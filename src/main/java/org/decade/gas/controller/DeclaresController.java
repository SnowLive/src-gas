package org.decade.gas.controller;

import org.decade.gas.biz.DeclaresBiz;
import org.decade.gas.biz.GuidesBiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * Class For:
 * 在线申报
 *
 * @auther: decade
 * @date: 18-1-23
 */
@Controller
@RequestMapping(value = "/declares")
public class DeclaresController {

    private final GuidesBiz guidesBiz;

    private final DeclaresBiz declareBiz;

    @Autowired
    public DeclaresController(GuidesBiz guidesBiz, DeclaresBiz declareBiz) {
        this.guidesBiz = guidesBiz;
        this.declareBiz = declareBiz;
    }

    @RequestMapping(value = "/list")
    public String entry() {
        return "forward: list/1";
    }

    @RequestMapping(value = "/state")
    public String state() {
        return "declares_state";
    }


    @RequestMapping(value = "/list/{current}", method = RequestMethod.GET)
    public String listGuidesPage(ModelMap modelMap, @PathVariable("current") int current) {
        modelMap.put("result", guidesBiz.pageList(current));
        return "declares_list";
    }

    @RequestMapping(value = "/guide/{guideId}", method = RequestMethod.GET)
    public String guideDeclare(ModelMap modelMap, @PathVariable("guideId") String guideId) {
        modelMap.put("result", guidesBiz.detailGuides(guideId));
        return "declares_entry";
    }

    /**
     * 申报
     *
     * @param powerId 行政职权id
     * @param title   申报标题
     * @param content 内容
     * @param file    上传文件
     * @param request 请求
     * @return 上传结果.
     */
    @ResponseBody
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Object addDeclare(@RequestParam(value = "powerId", required = false) String powerId,
                             @RequestParam(value = "publicId", required = false) String publicId,
                             @RequestParam(value = "title", required = false) String title,
                             @RequestParam(value = "content", required = false) String content,
                             @RequestParam(value = "file", required = false) MultipartFile file,
                             HttpServletRequest request) {
        return declareBiz.addDeclare(powerId, publicId, title, content, file, request);
    }
}
