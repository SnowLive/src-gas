package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.OfficialsBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.DepartmentBiz;
import org.decade.gas.biz.OfficialsBiz;
import org.decade.gas.convert.OfficialsConvert;
import org.decade.gas.entity.index.OfficialsEntity;
import org.decade.gas.enums.BaseEnum;
import org.decade.gas.exception.BaseException;
import org.decade.gas.mapper.index.OfficialsMapper;
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
public class OfficialsBizImpl implements OfficialsBiz {

    private final OfficialsMapper mapper;
    private final DepartmentBiz departmentBiz;

    @Autowired
    public OfficialsBizImpl(DepartmentBiz departmentBiz, OfficialsMapper mapper) {
        this.departmentBiz = departmentBiz;
        this.mapper = mapper;
    }

    @Override
    public BaseJsonObj<OfficialsBean> searchOfficialsByDepId(String departmentId) {
        OfficialsEntity entity = new OfficialsEntity();
        entity.setDepartmentId(departmentId);
        return search(entity);
    }

    @Override
    public BaseJsonObj<OfficialsBean> searchOfficialsByDepName(String depName) {
        OfficialsEntity entity = new OfficialsEntity();
        entity.setDepartmentId(departmentBiz.searchByName(depName).getData().get(0).getDepartmentId());
        return search(entity);
    }

    @Override
    public BaseJsonObj<OfficialsBean> searchOfficialsByRName(String rName) {
        OfficialsEntity entity = new OfficialsEntity();
        entity.setRealName(StrUtils.addChar(rName, "%"));
        return search(entity);
    }

    @Override
    public BaseJsonObj<OfficialsBean> detailOfficials(String officialId) {
        OfficialsEntity entity = new OfficialsEntity();
        entity.setOfficialId(officialId);
        return search(entity);
    }

    @Override
    public PageBean<OfficialsBean> pageList(int currentPage) {
        int POWERS_SIZE = 6;
        List<OfficialsEntity> newsList = mapper
                .searchList(PageUtils
                        .getStart(currentPage, POWERS_SIZE), POWERS_SIZE);
        int total = mapper.totalCount();
        PageUtils.check(currentPage, total, POWERS_SIZE);
        List<OfficialsBean> beanList = OfficialsConvert.enList2BeanList(newsList);
        return new PageBean<>(currentPage, total, POWERS_SIZE, beanList);
    }


    private BaseJsonObj<OfficialsBean> search(OfficialsEntity entity) {
        List<OfficialsEntity> data = mapper.search(entity);
        if (data.isEmpty()) throw new BaseException(BaseEnum.NOTINFO);
        BaseJsonObj<OfficialsBean> result = new BaseJsonObj<>();
        result.setState(1);
        result.setMsg("success");
        result.setData(OfficialsConvert.enList2BeanList(data));
        return result;
    }
}
