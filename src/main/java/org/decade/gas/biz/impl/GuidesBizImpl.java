package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.GuidesBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.GuidesBiz;
import org.decade.gas.convert.GuidesConvert;
import org.decade.gas.entity.index.GuidesEntity;
import org.decade.gas.enums.GuidesEnum;
import org.decade.gas.exception.GuidesException;
import org.decade.gas.mapper.index.GuidesMapper;
import org.decade.gas.utils.PageUtils;
import org.decade.gas.utils.StrUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class For:
 * <p>
 * 办事指南
 *
 * @auther: decade
 * @date: 17-12-25
 */
@Service
public class GuidesBizImpl implements GuidesBiz {

    private final GuidesMapper gMapper;
    private final PowersBizImpl powerBiz;

    @Autowired
    public GuidesBizImpl(GuidesMapper gMapper, PowersBizImpl powerBiz) {
        this.gMapper = gMapper;
        this.powerBiz = powerBiz;
    }

    //查询Guide的细节
    @Override
    public BaseJsonObj<GuidesBean> detailGuides(String guidesId) {
        GuidesEntity entity = new GuidesEntity();
        entity.setGuideId(guidesId);
        return search(entity);
    }

    @Override
    public PageBean<GuidesBean> pageList(int currentPage) {
        int GUIDES_SIZE = 6;
        List<GuidesEntity> newsList = gMapper
                .searchList(PageUtils
                        .getStart(currentPage, GUIDES_SIZE), GUIDES_SIZE);
        int total = gMapper.totalCount();
        PageUtils.check(currentPage, total, GUIDES_SIZE);
        List<GuidesBean> beanList = GuidesConvert.enList2BeanList(newsList);
        return new PageBean<>(currentPage, total, GUIDES_SIZE, beanList);
    }

    @Override
    public BaseJsonObj<GuidesBean> searchGuidesByPowerName(String powerTitle) {
        GuidesEntity entity = new GuidesEntity();
        entity.setPowerId(powerBiz.searchPowersByTitle(powerTitle).getData().get(0).getDepartmentId());
        return search(entity);
    }

    @Override
    public BaseJsonObj<GuidesBean> searchGuidesByTitle(String title) {
        GuidesEntity entity = new GuidesEntity();
        entity.setTitle(StrUtils.addChar(title, "%"));
        return search(entity);
    }

    @Override
    public BaseJsonObj<GuidesBean> detailGuidesByPower(String title) {
        GuidesEntity entity = new GuidesEntity();
        entity.setPowerId(powerBiz.searchPowersByTitle(title).getData().get(0).getPowerId());
        return search(entity);
    }

    //公共搜索类
    private BaseJsonObj<GuidesBean> search(GuidesEntity entity) {
        List<GuidesEntity> data = gMapper.search(entity);
        if (data.isEmpty()) throw new GuidesException(GuidesEnum.NULL_GUIDES);
        BaseJsonObj<GuidesBean> result = new BaseJsonObj<>();
        result.setState(1);
        result.setMsg("success");
        result.setData(GuidesConvert.enList2BeanList(data));
        return result;
    }

}
