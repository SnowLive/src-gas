package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.QuestionsBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.QuestionsBiz;
import org.decade.gas.convert.QuestionsConvert;
import org.decade.gas.entity.index.QuestionsEntity;
import org.decade.gas.enums.QuestionsEnum;
import org.decade.gas.exception.QuestionException;
import org.decade.gas.mapper.index.QuestionsMapper;
import org.decade.gas.utils.PageUtils;
import org.decade.gas.utils.StrUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 *  常见问题
 * @auther: decade
 * @date: 17-12-25
 */
@Service
public class QuestionsBizImpl implements QuestionsBiz {

    private final QuestionsMapper mapper;

    @Autowired
    public QuestionsBizImpl(QuestionsMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public BaseJsonObj<QuestionsBean> listQuestions() {
        BaseJsonObj<QuestionsBean> obj = new BaseJsonObj<>();
        obj.setData(QuestionsConvert.enList2BeanList(mapper.listAll()));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public BaseJsonObj<QuestionsBean> detailQuestions(String questionsId) {
        BaseJsonObj<QuestionsBean> obj = new BaseJsonObj<>();
        QuestionsEntity entity = new QuestionsEntity();
        entity.setQuestionId(questionsId);
        obj.setData(QuestionsConvert.enList2BeanList(mapper.search(entity)));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public PageBean<QuestionsBean> pageList(int currentPage) {
        int QUESTIONS_SIZE = 6;
        List<QuestionsEntity> questionsList = mapper
                .searchList(PageUtils
                        .getStart(currentPage, QUESTIONS_SIZE), QUESTIONS_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, QUESTIONS_SIZE);
        List<QuestionsBean> beanList = QuestionsConvert.enList2BeanList(questionsList);
        return new PageBean<>(currentPage, total, QUESTIONS_SIZE, beanList);
    }

    @Override
    public BaseJsonObj<QuestionsBean> searchQuestions(String question) {
        QuestionsEntity entity = new QuestionsEntity();
        entity.setQuestion(StrUtils.addChar(question,"%"));
        List<QuestionsEntity> data = mapper.search(entity);

        if(data.isEmpty()) throw new QuestionException(QuestionsEnum.NULL_QUESTIONS);

        BaseJsonObj<QuestionsBean> result = new BaseJsonObj<>();
        result.setState(1);
        result.setMsg("success");
        result.setData(QuestionsConvert.enList2BeanList(data));
        return result;
    }
}
