package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.NewsBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.NewsBiz;
import org.decade.gas.convert.NewsConvert;
import org.decade.gas.entity.index.NewsEntity;
import org.decade.gas.mapper.index.NewsMapper;
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
public class NewsBizImpl implements NewsBiz {

    @Autowired
    private NewsMapper mapper;
    private static int NEWS_SIZE = 6;

    @Override
    public BaseJsonObj<NewsBean> listNews() {
        BaseJsonObj<NewsBean> obj = new BaseJsonObj<>();
        obj.setData(NewsConvert.enList2BeanList(mapper.listAll()));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public BaseJsonObj<NewsBean> detailNews(String newsId) {
        BaseJsonObj<NewsBean> obj = new BaseJsonObj<>();
        NewsEntity entity = new NewsEntity();
        entity.setNewsId(newsId);
        obj.setData(NewsConvert.enList2BeanList(mapper.search(entity)));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public PageBean<NewsBean> pageList(int currentPage) {
        List<NewsEntity> newsList = mapper
                .searchList(PageUtils
                        .getStart(currentPage, NEWS_SIZE), NEWS_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, NEWS_SIZE);
        List<NewsBean> beanList = NewsConvert.enList2BeanList(newsList);
        return new PageBean<NewsBean>(currentPage, total, NEWS_SIZE, beanList);
    }
}
