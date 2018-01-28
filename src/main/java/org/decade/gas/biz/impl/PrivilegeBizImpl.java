package org.decade.gas.biz.impl;

import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.biz.PrivilegeBiz;
import org.decade.gas.entity.admin.PrivilegeEntity;
import org.decade.gas.mapper.admin.PrivilegeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Class For:
 * 权限管理
 *
 * @auther: decade
 * @date: 17-12-30
 */
@Service
public class PrivilegeBizImpl implements PrivilegeBiz {

    @Autowired
    private PrivilegeMapper mapper;

    @Override
    public BaseJsonObj<PrivilegeEntity> listPrivilege(String resume) {
        PrivilegeEntity entity = new PrivilegeEntity();
        entity.setResume(resume);
        BaseJsonObj<PrivilegeEntity> obj = new BaseJsonObj<>();
        obj.setState(1);
        obj.setData(mapper.searchWithRole(entity));
        return obj;
    }
}
