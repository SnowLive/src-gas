package org.decade.gas.controller;

import org.decade.gas.biz.NoticesBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 *
 * @auther: decade
 * @date: 18-1-2
 */
@Controller
@RequestMapping("/notice")
public class NoticesController {

    @Autowired
    private NoticesBiz noticesBiz;

    @ResponseBody
    @RequestMapping(value = "/json/list", method = RequestMethod.GET)
    public Object listNotices() {
        return noticesBiz.listNotices();
    }


    @RequestMapping(value = "/detail/{noticeId}", method = RequestMethod.GET)
    public String detailNotices(@PathVariable("noticeId") String noticeId,
                                ModelMap modelMap) {
        modelMap.put("result", noticesBiz.detailNotices(noticeId));

        return "notice_detail";
    }


}
