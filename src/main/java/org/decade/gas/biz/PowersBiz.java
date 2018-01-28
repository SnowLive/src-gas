package org.decade.gas.biz;

import org.decade.gas.bean.db.index.PowersBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * powers 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface PowersBiz {

    BaseJsonObj<PowersBean> detailPowers(String powersId);

    PageBean<PowersBean> pageList(int currentPage);

    BaseJsonObj<PowersBean> searchPowersByDepId(String departmentId);

    BaseJsonObj<PowersBean> searchPowersByDepName(String DepName);

    BaseJsonObj<PowersBean> searchPowersByTitle(String title);
}
