package org.decade.gas.biz;

import org.decade.gas.bean.db.index.NoticesBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * 政府公告
 *
 * @auther: decade
 * @date: 18-1-2
 */
public interface NoticesBiz {

    BaseJsonObj<NoticesBean> listNotices();

    BaseJsonObj<NoticesBean> detailNotices(String noticeId);

    PageBean<NoticesBean> pageList(int currentPage);
}
