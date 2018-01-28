package org.decade.gas.controller;

import org.decade.gas.biz.FocusBiz;
import org.decade.gas.biz.NoticesBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Class For:
 * 新闻
 *
 * @auther: decade
 * @date: 17-12-31
 */
@Controller
@RequestMapping("/focus")
public class FocusController {

    @Autowired
    private FocusBiz focusBiz;
    @Autowired
    private NoticesBiz noticesBiz;

    @RequestMapping(value = "/list", method = RequestMethod.GET)

    public String listFocus(ModelMap modelMap) {
        return "forward:list/1";
    }

    @RequestMapping(value = "/list/{current}", method = RequestMethod.GET)
    public String listFocusPage(ModelMap modelMap, @PathVariable("current") int current) {
        modelMap.put("result", focusBiz.pageList(current));
        return "focus_list";
    }

    @RequestMapping(value = "/detail/{focusId}", method = RequestMethod.GET)
    public String detailFocus(@PathVariable("focusId") String focusId, ModelMap modelMap) {
        modelMap.put("result", focusBiz.detailFocus(focusId));
        modelMap.put("notice", noticesBiz.pageList(1));
        return "focus_detail";
    }
}
