package org.decade.gas.controller;

import org.decade.gas.biz.BFRoleBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 *
 * @auther: decade
 * @date: 17-12-26
 */
@Controller
@RequestMapping(value = "/role")
public class BFRoleController {

    @Autowired
    private BFRoleBiz roleBiz;

    @ResponseBody
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public Object list() {
        return roleBiz.listRole();
    }

    @ResponseBody
    @RequestMapping(value = "/search/{name}", method = RequestMethod.GET)
    public Object search(@PathVariable("name") String name) {
        return roleBiz.searchRole(name);
    }


}
