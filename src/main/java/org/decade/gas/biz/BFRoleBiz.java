package org.decade.gas.biz;

import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.entity.admin.BFRoleEntity;

/**
 * Class For:
 * role
 *
 * @auther: decade
 * @date: 17-12-26
 */
public interface BFRoleBiz {
    BaseJsonObj<BFRoleEntity> listRole();

    int addRoleWithOutPrivilege(BFRoleEntity entity);


    BaseJsonObj<BFRoleEntity> searchRole(String name);
}
