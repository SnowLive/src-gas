package org.decade.gas.biz;

import org.decade.gas.bean.db.index.GuidesBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * news 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface GuidesBiz {


    BaseJsonObj<GuidesBean> detailGuides(String guidesId);

    PageBean<GuidesBean> pageList(int currentPage);

    BaseJsonObj<GuidesBean> searchGuidesByPowerName(String powerTitle);

    BaseJsonObj<GuidesBean> searchGuidesByTitle(String title);

    BaseJsonObj<GuidesBean> detailGuidesByPower(String title);
}
