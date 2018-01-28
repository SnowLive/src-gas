package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.DepartmentBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.DepartmentBiz;
import org.decade.gas.convert.DepartmentConvert;
import org.decade.gas.entity.index.DepartmentEntity;
import org.decade.gas.mapper.index.DepartmentMapper;
import org.decade.gas.utils.PageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 *  部门事务.
 * @auther: decade
 * @date: 17-12-25
 */
@Service
public class DepartmentBizImpl implements DepartmentBiz {

    @Autowired
    private DepartmentMapper mapper;
    private static int DEPARTMENT_SIZE = 6;

    @Override
    public BaseJsonObj<DepartmentBean> listDepartment() {
        return search(null);
    }

    @Override
    public BaseJsonObj<DepartmentBean> searchByName(String depName) {
        DepartmentEntity entity = new DepartmentEntity();
        entity.setName(depName);
        return search(entity);
    }

    @Override
    public BaseJsonObj<DepartmentBean> detailDepartment(String departmentId) {
        DepartmentEntity entity = new DepartmentEntity();
        entity.setDepartmentId(departmentId);
        return search(entity);
    }

    @Override
    public PageBean<DepartmentBean> pageList(int currentPage) {
        List<DepartmentEntity> departmentList = mapper
                .searchList(PageUtils.getStart(currentPage, DEPARTMENT_SIZE), DEPARTMENT_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, DEPARTMENT_SIZE);
        List<DepartmentBean> beanList = DepartmentConvert.enList2BeanList(departmentList);
        return new PageBean<DepartmentBean>(currentPage, total, DEPARTMENT_SIZE, beanList);
    }

    private BaseJsonObj<DepartmentBean> search(DepartmentEntity entity){
        BaseJsonObj<DepartmentBean> obj = new BaseJsonObj<>();
        obj.setData(DepartmentConvert.enList2BeanList(mapper.search(entity)));
        obj.setMsg("ok");
        obj.setState(1);
        return obj;
    }
}
