package org.decade.gas.biz;

import org.decade.gas.bean.db.index.QuestionsBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * questions 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface QuestionsBiz {

    BaseJsonObj<QuestionsBean> listQuestions();

    BaseJsonObj<QuestionsBean> detailQuestions(String questionsId);

    PageBean<QuestionsBean> pageList(int currentPage);

    BaseJsonObj<QuestionsBean> searchQuestions(String question);
}
