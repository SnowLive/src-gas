package org.decade.gas.biz.impl;

import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.biz.BFRoleBiz;
import org.decade.gas.entity.admin.BFRoleEntity;
import org.decade.gas.enums.BFRoleEnum;
import org.decade.gas.exception.BFRoleException;
import org.decade.gas.mapper.admin.BFRoleMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 * 角色id
 *
 * @auther: decade
 * @date: 17-12-26
 */
@Service
public class BFRoleBizImpl implements BFRoleBiz {

    private static Logger logger = LoggerFactory.getLogger(BFRoleBizImpl.class);
    @Autowired
    private BFRoleMapper mapper;

    @Override
    public BaseJsonObj<BFRoleEntity> listRole() {
        BaseJsonObj<BFRoleEntity> obj = new BaseJsonObj<>();
        if (mapper.listAll().isEmpty()) throw new BFRoleException(BFRoleEnum.NULL_ROLE);
        obj.setData(mapper.listAll());
        obj.setState(1);
        obj.setMsg("ok");
        return obj;
    }

    @Override
    public int addRoleWithOutPrivilege(BFRoleEntity entity) {
        if (entity == null)
            throw new BFRoleException(BFRoleEnum.NOT_ROLE);
        return mapper.insert(entity);
    }

    /**
     * 查询带有权限列表的role.
     *
     * @param name
     * @return
     */
    @Override
    public BaseJsonObj<BFRoleEntity> searchRole(String name) {
        BaseJsonObj<BFRoleEntity> obj = new BaseJsonObj<>();
        BFRoleEntity entity = new BFRoleEntity();
        entity.setName(name);
        List<BFRoleEntity> data = mapper.selectWithPrivilege(entity);
        if (data.isEmpty()) {
            System.out.println("role-biz-exception:" + BFRoleEnum.NULL_ROLE);
            throw new BFRoleException(BFRoleEnum.NULL_ROLE);
        }
        obj.setData(data);
        obj.setState(1);
        obj.setMsg("ok");
        return obj;
    }
}
