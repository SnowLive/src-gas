package org.decade.gas.biz;

import org.decade.gas.bean.db.index.DepartmentBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;

/**
 * Class For:
 * 部门 事务
 *
 * @auther: decade
 * @date: 17-12-25
 */
public interface DepartmentBiz {

    BaseJsonObj<DepartmentBean> listDepartment();

    BaseJsonObj<DepartmentBean> detailDepartment(String departmentId);

    PageBean<DepartmentBean> pageList(int currentPage);

    BaseJsonObj<DepartmentBean> searchByName(String depName);
}
