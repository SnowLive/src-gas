package org.decade.gas.controller;

import org.decade.gas.biz.DeclaresBiz;
import org.decade.gas.biz.PublicBiz;
import org.decade.gas.entity.index.PublicEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Class For:
 * 公众用户
 *
 * @auther: decade
 * @date: 18-1-24
 */
@Controller
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private PublicBiz publicBiz;
    @Autowired
    private DeclaresBiz declaresBiz;

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Object login(@RequestParam(value = "name") String name,
                        @RequestParam(value = "passwd") String passwd, HttpSession httpSession) {
        return publicBiz.login(name, passwd, httpSession);
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Object register(@RequestParam(value = "name") String name,
                           @RequestParam(value = "rname") String rname,
                           @RequestParam(value = "phone") String phone,
                           @RequestParam(value = "sex") String sex,
                           @RequestParam(value = "info") String info,
                           @RequestParam(value = "file") MultipartFile file,
                           @RequestParam(value = "passwd") String passwd,
                           HttpServletRequest request) {
        return publicBiz.register(name, rname, phone, sex, info, file, passwd, request);
    }

    @ResponseBody
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public Object logout(HttpSession httpSession) {
        return publicBiz.logout(httpSession);
    }

    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    public Object detail(ModelMap box, HttpSession session) {
        if (session.getAttribute("user") != null) {
            PublicEntity entity = (PublicEntity) session.getAttribute("user");
            box.put("declares", declaresBiz.detailByPublicId(entity.getPublicId()));
        }
        return "public_detail";
    }


}
