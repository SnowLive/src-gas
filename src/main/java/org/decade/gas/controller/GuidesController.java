package org.decade.gas.controller;

import org.decade.gas.biz.NoticesBiz;
import org.decade.gas.biz.GuidesBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 * 新闻
 *
 * @auther: decade
 * @date: 17-12-31
 */
@Controller
@RequestMapping("/guides")
public class GuidesController {

    private final GuidesBiz guidesBiz;
    private final NoticesBiz noticesBiz;

    @Autowired
    public GuidesController(GuidesBiz guidesBiz, NoticesBiz noticesBiz) {
        this.guidesBiz = guidesBiz;
        this.noticesBiz = noticesBiz;
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listGuides() {
        return "forward: list/1";
    }

    @RequestMapping(value = "/list/{current}", method = RequestMethod.GET)
    public String listGuidesPage(ModelMap modelMap, @PathVariable("current") int current) {
        modelMap.put("result", guidesBiz.pageList(current));
        return "guides_list";
    }

    @RequestMapping(value = "/detail/{guidesId}", method = RequestMethod.GET)
    public String detailGuides(@PathVariable("guidesId") String guidesId, ModelMap modelMap) {
        modelMap.put("result", guidesBiz.detailGuides(guidesId));
        modelMap.put("notice", noticesBiz.pageList(1));
        return "guides_detail";
    }
    @RequestMapping(value = "/detail/power/{title}", method = RequestMethod.GET)
    public String detailGuidesByPower(@PathVariable("title") String title, ModelMap modelMap) {
        modelMap.put("result", guidesBiz.detailGuidesByPower(title));
        modelMap.put("notice", noticesBiz.pageList(1));
        return "guides_detail";
    }


    @ResponseBody
    @RequestMapping(value = "/search/{guide}", method = RequestMethod.GET)
    public Object SearchGuides(@PathVariable("guide") String guide) {
        return guidesBiz.searchGuidesByTitle(guide);
    }
}
