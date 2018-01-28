package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.PowersBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.DepartmentBiz;
import org.decade.gas.biz.PowersBiz;
import org.decade.gas.convert.PowersConvert;
import org.decade.gas.entity.index.PowersEntity;
import org.decade.gas.enums.PowersEnum;
import org.decade.gas.exception.PowersException;
import org.decade.gas.mapper.index.PowersMapper;
import org.decade.gas.utils.PageUtils;
import org.decade.gas.utils.StrUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 *
 * @auther: decade
 * @date: 17-12-25
 */
@Service
public class PowersBizImpl implements PowersBiz {

    private final PowersMapper mapper;
    private final DepartmentBiz departmentBiz;

    @Autowired
    public PowersBizImpl(DepartmentBiz departmentBiz, PowersMapper mapper) {
        this.departmentBiz = departmentBiz;
        this.mapper = mapper;
    }

    @Override
    public BaseJsonObj<PowersBean> searchPowersByDepId(String departmentId) {
        PowersEntity entity = new PowersEntity();
        entity.setDepartmentId(departmentId);
        return search(entity);
    }

    @Override
    public BaseJsonObj<PowersBean> searchPowersByDepName(String depName) {
        PowersEntity entity = new PowersEntity();
        entity.setDepartmentId(departmentBiz.searchByName(depName).getData().get(0).getDepartmentId());
        return search(entity);
    }

    @Override
    public BaseJsonObj<PowersBean> searchPowersByTitle(String title) {
        PowersEntity entity = new PowersEntity();
        entity.setTitle(StrUtils.addChar(title,"%"));
        return search(entity);
    }

    @Override
    public BaseJsonObj<PowersBean> detailPowers(String powerId) {
        PowersEntity entity = new PowersEntity();
        entity.setPowerId(powerId);
        return search(entity);
    }

    @Override
    public PageBean<PowersBean> pageList(int currentPage) {
        int POWERS_SIZE = 6;
        List<PowersEntity> newsList = mapper
                .searchList(PageUtils
                        .getStart(currentPage, POWERS_SIZE), POWERS_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, POWERS_SIZE);
        List<PowersBean> beanList = PowersConvert.enList2BeanList(newsList);
        return new PageBean<>(currentPage, total, POWERS_SIZE, beanList);
    }


    private BaseJsonObj<PowersBean> search(PowersEntity entity){
        List<PowersEntity> data = mapper.search(entity);
        if (data.isEmpty()) throw new PowersException(PowersEnum.NULL_POWERS);
        BaseJsonObj<PowersBean> result = new BaseJsonObj<>();
        result.setState(1);
        result.setMsg("success");
        result.setData(PowersConvert.enList2BeanList(data));
        return result;
    }
}
