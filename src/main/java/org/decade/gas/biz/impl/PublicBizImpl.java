package org.decade.gas.biz.impl;

import org.decade.gas.bean.json.DemoJson;
import org.decade.gas.biz.BFRoleBiz;
import org.decade.gas.biz.PublicBiz;
import org.decade.gas.entity.index.PublicEntity;
import org.decade.gas.enums.BFRoleEnum;
import org.decade.gas.mapper.index.PublicMapper;
import org.decade.gas.utils.FileUpUtil;
import org.decade.gas.utils.MD5Util;
import org.decade.gas.utils.UUIDFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Class For:
 * public service
 *
 * @auther: decade
 * @date: 18-1-24
 */
@Service
public class PublicBizImpl implements PublicBiz {

    private final PublicMapper publicMapper;
    private final BFRoleBiz roleBiz;

    @Autowired
    public PublicBizImpl(PublicMapper publicMapper, BFRoleBiz roleBiz) {
        this.publicMapper = publicMapper;
        this.roleBiz = roleBiz;
    }

    @Override
    public DemoJson login(String name, String passwd, HttpSession httpSession) {
        DemoJson result = initDemoJson();
        PublicEntity entity = new PublicEntity();
        entity.setName(name);
        List resultList = publicMapper.search(entity);
        if (resultList.size() > 0) {
            entity = (PublicEntity) resultList.get(0);
            if (MD5Util.getMD5Str(passwd).equals(entity.getPasswd())) {
                httpSession.setAttribute("user", entity);
                result.setState(1);
                result.setMsg("login ok");
            } else {
                result.setMsg("账号或密码错误,请重新填写!");
            }
        } else {
            result.setMsg("账号或密码错误,请重新填写!");
        }
        return result;
    }

    /**
     * 注册
     * 1.用户存在不进行存储,
     * 2.不存在,文件是否存在,存在进行,文件上传.
     *
     * @param name    用户名
     * @param rname   真实姓名
     * @param phone   电话
     * @param sex     性别
     * @param info    备注
     * @param file    头像
     * @param passwd  密码
     * @param request 请求.
     * @return 添加结果.
     */
    @Override
    public DemoJson register(String name, String rname, String phone, String sex,
                             String info, MultipartFile file, String passwd, HttpServletRequest request) {
        DemoJson result = initDemoJson();
        String url = "";
        PublicEntity entity = new PublicEntity();
        entity.setName(name);
        if (publicMapper.search(entity).isEmpty()) {
            if (file.isEmpty()) System.out.println("file is empty");
            else {
                System.out.println(file.getOriginalFilename());
                try {
                    url = FileUpUtil.upload(file, request, FileUpUtil.UPLOAD_IMG);
                } catch (IOException e) {
                    System.out.println("文件上传失败");
                }
                entity.setPublicId(UUIDFactory.createUUID());
                entity.setName(name);
                entity.setRole(roleBiz.searchRole(BFRoleEnum.ROLE_PUBLIC.getMsg()).getData().get(0));
                entity.setRealName(rname);
                entity.setPhoneNumber(phone);
                entity.setSex(sex);
                entity.setInfo(info);
                entity.setPicture(url);
                entity.setPasswd(MD5Util.getMD5Str(passwd));
                entity.setState(1);
                System.out.println(name + ":" + rname + ":" + phone + ":" + sex + ":" + info + ":" + passwd);
//                存储数据
                result.setState(publicMapper.insert(entity));
                result.setMsg("ok");
                result.setData(url);
            }
        } else {
            result.setMsg("用户名已存在,请更换用户名进行注册");
        }
        return result;
    }


    @Override
    public DemoJson logout(HttpSession httpSession) {
        DemoJson result = initDemoJson();
        httpSession.removeAttribute("user");
        result.setMsg("退出成功");
        result.setState(1);
        return result;
    }


    private DemoJson initDemoJson() {
        return new DemoJson(-1, "failed", "");
    }
}
