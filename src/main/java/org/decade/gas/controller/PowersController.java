package org.decade.gas.controller;

import org.decade.gas.bean.db.index.DepartmentBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.biz.DepartmentBiz;
import org.decade.gas.biz.PowersBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 * 行政职权
 *
 * @auther: decade
 * @date: 17-12-31
 */
@Controller
@RequestMapping("/powers")
public class PowersController {

    @Autowired
    private PowersBiz powersBiz;

    @Autowired
    private DepartmentBiz departmentBiz;


    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listPower(ModelMap box) {
        BaseJsonObj<DepartmentBean> department = departmentBiz.listDepartment();
        box.put("department", department);
        box.put("powers", powersBiz.searchPowersByDepId(department.getData().get(0).getDepartmentId()));
        return "powers_list";
    }

    @ResponseBody
    @RequestMapping(value = "/dep/{depName}", method = RequestMethod.GET)
    public Object searchPowerByDep(@PathVariable("depName") String depName) {
        return powersBiz.searchPowersByDepName(depName);
    }

    @ResponseBody
    @RequestMapping(value = "/search/{title}", method = RequestMethod.GET)
    public Object searchPowerByTitle(@PathVariable("title") String title) {
        return powersBiz.searchPowersByTitle(title);
    }

}
