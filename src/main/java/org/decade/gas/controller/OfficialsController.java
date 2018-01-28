package org.decade.gas.controller;

import org.decade.gas.bean.db.index.DepartmentBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.biz.DepartmentBiz;
import org.decade.gas.biz.OfficialsBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 * 人事信息
 *
 * @auther: decade
 * @date: 18-1-22
 */
@Controller
@RequestMapping("/officials")
public class OfficialsController {

    private final DepartmentBiz depBiz;
    private final OfficialsBiz offBiz;

    @Autowired
    public OfficialsController(DepartmentBiz depBiz, OfficialsBiz offBiz) {
        this.depBiz = depBiz;
        this.offBiz = offBiz;
    }

    @RequestMapping(value = "list", method = RequestMethod.GET)
    public String list(ModelMap box) {
        BaseJsonObj<DepartmentBean> department = depBiz.listDepartment();
        box.put("department", department);
        box.put("officials", offBiz.searchOfficialsByDepId(department.getData().get(0).getDepartmentId()));
        return "officials_list";
    }

    @RequestMapping(value = "detail/{officialId}", method = RequestMethod.GET)
    public String detailById(@PathVariable("officialId") String officialId, ModelMap box) {
        box.put("official", offBiz.detailOfficials(officialId));
        return "officials_detail";
    }

    @ResponseBody
    @RequestMapping(value = "dep/{depName}", method = RequestMethod.GET)
    public Object searchByDepName(@PathVariable("depName") String depName) {
        return offBiz.searchOfficialsByDepName(depName);
    }
}
