package org.decade.gas.biz.impl;

import org.decade.gas.bean.db.index.DeclaresBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.DemoJson;
import org.decade.gas.bean.json.PageBean;
import org.decade.gas.biz.DeclaresBiz;
import org.decade.gas.biz.PowersBiz;
import org.decade.gas.convert.DeclaresConvert;
import org.decade.gas.entity.index.DeclaresEntity;
import org.decade.gas.enums.BaseEnum;
import org.decade.gas.exception.BaseException;
import org.decade.gas.mapper.index.DeclaresMapper;
import org.decade.gas.utils.FileUpUtil;
import org.decade.gas.utils.JsonSimpleUtils;
import org.decade.gas.utils.UUIDFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

/**
 * Class For:
 * 在线申报
 *
 * @auther: decade
 * @date: 18-1-27
 */
@Service
public class DeclaresBizImpl implements DeclaresBiz {

    private final DeclaresMapper dMapper;

    private final PowersBiz pBiz;

    @Autowired
    public DeclaresBizImpl(DeclaresMapper dMapper, PowersBiz pBiz) {
        this.dMapper = dMapper;
        this.pBiz = pBiz;
    }

    @Override
    public BaseJsonObj<DeclaresBean> listDeclares() {
        return null;
    }

    @Override
    public BaseJsonObj<DeclaresBean> detailDeclares(String declareId) {
        DeclaresEntity entity = new DeclaresEntity();
        entity.setDeclareId(declareId);
        return search(entity);
    }

    @Override
    public BaseJsonObj<DeclaresBean> detailByPublicId(String publicId) {
        if (publicId == null) return null;
        DeclaresEntity entity = new DeclaresEntity();
        entity.setPublicId(publicId);
        return search(entity);
    }

    /**
     * 在线申报添加
     *
     * @param powerId  申报事项依附的部门权利id
     * @param publicId 公众id
     * @param title    申报事项名称
     * @param content  内容
     * @param file     文件
     * @param request  请求     @return 添加申报事项的结果.
     */
    @Override
    public DemoJson addDeclare(String powerId, String publicId, String title, String content, MultipartFile file, HttpServletRequest request) {
        DemoJson result = initDemoJson();
        String url = "";
        DeclaresEntity entity = new DeclaresEntity();
        //搜索的申请标题完全相同可能时同一个,所以,
        entity.setTitle(title);
        entity.setPublicId(publicId);

        if (dMapper.insertSearch(entity).isEmpty()) {
            if (file.isEmpty()) System.out.println("file is empty");
            else {
                System.out.println(file.getOriginalFilename());
                try {
                    url = FileUpUtil.upload(file, request, FileUpUtil.UPLOAD_DOCU);
                } catch (IOException e) {
                    System.out.println("文件上传失败");
                }
            }
            entity.setDeclareId(UUIDFactory.createUUID());
            entity.setDepartmentId(pBiz.detailPowers(powerId).getData().get(0).getDepartmentId());
            entity.setState(1);
            entity.setDeclareState(0);
            entity.setDeclareFile(url);
            entity.setInfo(content);
            System.out.println(JsonSimpleUtils.obj2Str(entity));
            //存储数据
            result.setState(dMapper.insert(entity));
            result.setState(1);
            result.setMsg("申报提交成功");
            result.setData(url);
        } else {
            result.setMsg("申报已存在");
        }
        return result;
    }

    @Override
    public PageBean<DeclaresBean> pageList(int currentPage) {
        return null;
    }

    private DemoJson initDemoJson() {
        return new DemoJson(-1, "failed", "");
    }

    //公共搜索类
    private BaseJsonObj<DeclaresBean> search(DeclaresEntity entity) {
        List<DeclaresEntity> data = dMapper.insertSearch(entity);
        if (data.isEmpty()) {
            System.out.println("data is empty");
            throw new BaseException(BaseEnum.NOTINFO);
        }
        BaseJsonObj<DeclaresBean> result = new BaseJsonObj<>();
        result.setState(1);
        result.setMsg("success");
        result.setData(DeclaresConvert.enList2BeanList(data));
        return result;
    }
}
