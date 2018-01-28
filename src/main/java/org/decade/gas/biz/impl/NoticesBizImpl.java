package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.NoticesBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.NoticesBiz;
import org.decade.gas.convert.NoticesConvert;
import org.decade.gas.entity.index.NoticesEntity;
import org.decade.gas.mapper.index.NoticesMapper;
import org.decade.gas.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 *  公告
 * @auther: decade
 * @date: 17-12-25
 */
@Service
public class NoticesBizImpl implements NoticesBiz {

    @Autowired
    private NoticesMapper mapper;
    private static int NOTICES_SIZE = 6;

    @Override
    public BaseJsonObj<NoticesBean> listNotices() {
        BaseJsonObj<NoticesBean> obj = new BaseJsonObj<>();
        obj.setData(NoticesConvert.enList2BeanList(mapper.listAll()));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public BaseJsonObj<NoticesBean> detailNotices(String newsId) {
        BaseJsonObj<NoticesBean> obj = new BaseJsonObj<>();
        NoticesEntity entity = new NoticesEntity();
        entity.setNoticeId(newsId);
        obj.setData(NoticesConvert.enList2BeanList(mapper.search(entity)));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }

    @Override
    public PageBean<NoticesBean> pageList(int currentPage) {
        List<NoticesEntity> newsList = mapper
                .searchList(PageUtils
                        .getStart(currentPage, NOTICES_SIZE), NOTICES_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, NOTICES_SIZE);
        List<NoticesBean> beanList = NoticesConvert.enList2BeanList(newsList);
        return new PageBean<NoticesBean>(currentPage, total, NOTICES_SIZE, beanList);
    }
}
