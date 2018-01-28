package org.decade.gas.controller;

import org.decade.gas.biz.PoliciesBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Class For:
 *
 * @auther: decade
 * @date: 18-1-2
 */
@Controller
@RequestMapping("/policy")
public class PoliciesController {

    @Autowired
    private PoliciesBiz policiesBiz;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String toListPolicies(ModelMap modelMap) {
        modelMap.put("result", policiesBiz.listPolicies());
        return "policies_list";
    }

}
