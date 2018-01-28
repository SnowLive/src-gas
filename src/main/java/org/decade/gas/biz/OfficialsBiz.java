package org.decade.gas.biz;

import org.decade.gas.bean.db.index.OfficialsBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * officials 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface OfficialsBiz {

    BaseJsonObj<OfficialsBean> detailOfficials(String officialsId);

    PageBean<OfficialsBean> pageList(int currentPage);

    BaseJsonObj<OfficialsBean> searchOfficialsByDepId(String depId);

    BaseJsonObj<OfficialsBean> searchOfficialsByDepName(String depName);
    //根据真是名称查找信息
    BaseJsonObj<OfficialsBean> searchOfficialsByRName(String rName);
}
