package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.FocusBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.FocusBiz;
import org.decade.gas.convert.FocusConvert;
import org.decade.gas.entity.index.FocusEntity;
import org.decade.gas.mapper.index.FocusMapper;
import org.decade.gas.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 *
 * @auther: decade
 * @date: 17-12-25
 */
@Service
public class FocusBizImpl implements FocusBiz {

    @Autowired
    private FocusMapper mapper;
    private static int NEWS_SIZE = 4;

    @Override
    public BaseJsonObj<FocusBean> listFocus() {
        BaseJsonObj<FocusBean> obj = new BaseJsonObj<>();
        obj.setData(FocusConvert.enList2BeanList(mapper.listAll()));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public BaseJsonObj<FocusBean> detailFocus(String newsId) {
        BaseJsonObj<FocusBean> obj = new BaseJsonObj<>();
        FocusEntity entity = new FocusEntity();
        entity.setFocusId(newsId);
        obj.setData(FocusConvert.enList2BeanList(mapper.search(entity)));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public PageBean<FocusBean> pageList(int currentPage) {
        List<FocusEntity> newsList = mapper
                .searchList(PageUtils
                        .getStart(currentPage, NEWS_SIZE), NEWS_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, NEWS_SIZE);
        List<FocusBean> beanList = FocusConvert.enList2BeanList(newsList);
        return new PageBean<FocusBean>(currentPage, total, NEWS_SIZE, beanList);
    }
}
