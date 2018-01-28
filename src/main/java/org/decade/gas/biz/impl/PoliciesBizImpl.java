package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.PoliciesBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.biz.PoliciesBiz;
import org.decade.gas.convert.PoliciesConvert;
import org.decade.gas.mapper.index.PoliciesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Class For:
 *  政策法规
 * @auther: decade
 * @date: 18-1-2
 */
@Service
public class PoliciesBizImpl implements PoliciesBiz {

    @Autowired
    private PoliciesMapper mapper;


    @Override
    public BaseJsonObj<PoliciesBean> listPolicies() {
        BaseJsonObj<PoliciesBean> result = new BaseJsonObj<>();
        result.setData(PoliciesConvert.enList2BeanList(mapper.listAll()));
        result.setState(1);
        return result;
    }

}
