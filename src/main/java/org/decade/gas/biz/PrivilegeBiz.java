package org.decade.gas.biz;

import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.entity.admin.PrivilegeEntity;

/**
 * Class For:
 * 权限管理
 *
 * @auther: decade
 * @date: 17-12-30
 */
public interface PrivilegeBiz {

    BaseJsonObj<PrivilegeEntity>  listPrivilege(String name);
}
