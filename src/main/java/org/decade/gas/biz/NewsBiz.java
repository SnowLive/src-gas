package org.decade.gas.biz;

import org.decade.gas.bean.db.index.NewsBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * news 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface NewsBiz {

    BaseJsonObj<NewsBean> listNews();

    BaseJsonObj<NewsBean> detailNews(String newsId);

    PageBean<NewsBean> pageList(int currentPage);
}
