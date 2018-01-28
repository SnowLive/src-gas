package org.decade.gas.controller;

import org.decade.gas.biz.DepartmentBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 * 部门信息
 *
 * @auther: decade
 * @date: 18-1-7
 */
@Controller
@RequestMapping("/department")
public class DepartmentController {


    @Autowired
    private DepartmentBiz biz;

    @ResponseBody
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public Object getlist() {
        biz.listDepartment().getData().forEach(ent -> System.out.println(ent.getContact().getPhone()));
        return biz.listDepartment();
    }

}
