package org.decade.gas.controller;

import org.decade.gas.biz.PrivilegeBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 *  权限
 * @auther: decade
 * @date: 17-12-30
 */
@Controller
@RequestMapping("/privilege")
public class PrivilegeController {

    @Autowired
    private PrivilegeBiz privilegeBiz;

    @ResponseBody
    @RequestMapping(value = "/search/{resume}",method = RequestMethod.GET)
    public Object list(@PathVariable("resume")String resume){
        return privilegeBiz.listPrivilege(resume);
    }

}
