package org.decade.gas.controller;

import org.decade.gas.biz.NewsBiz;
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
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsBiz newsBiz;
    @Autowired
    private NoticesBiz noticesBiz;

    @RequestMapping(value = "/list", method = RequestMethod.GET)

    public String listNews(ModelMap modelMap) {
        return "forward:list/1";
    }

    @RequestMapping(value = "/list/{current}", method = RequestMethod.GET)
    public String listNewsPage(ModelMap modelMap, @PathVariable("current") int current) {
        modelMap.put("result", newsBiz.pageList(current));
        return "news_list";
    }

    @RequestMapping(value = "/detail/{newsId}", method = RequestMethod.GET)
    public String detailNews(@PathVariable("newsId") String newsId, ModelMap modelMap) {
        modelMap.put("result", newsBiz.detailNews(newsId));
        modelMap.put("notice",noticesBiz.pageList(1));
        return "news_detail";
    }

    @RequestMapping(value = "/detail/copy", method = RequestMethod.GET)
    public String detailNewsCopy() {
        return "news_detail_copy";
    }
}
