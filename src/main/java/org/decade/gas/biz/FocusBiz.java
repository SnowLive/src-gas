package org.decade.gas.biz;

import org.decade.gas.bean.db.index.FocusBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * 热点访谈 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface FocusBiz {

    BaseJsonObj<FocusBean> listFocus();

    BaseJsonObj<FocusBean> detailFocus(String focusId);

    PageBean<FocusBean> pageList(int currentPage);
}
