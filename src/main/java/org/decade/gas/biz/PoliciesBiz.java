package org.decade.gas.biz;

import org.decade.gas.bean.db.index.PoliciesBean;
import org.decade.gas.bean.json.BaseJsonObj;

/**
 * Class For:
 * 政策法规
 * @auther: decade
 * @date: 18-1-2
 */
public interface PoliciesBiz {
    BaseJsonObj<PoliciesBean> listPolicies();
}
