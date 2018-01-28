package org.decade.gas.controller;

import org.decade.gas.biz.QuestionsBiz;
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
 * 新闻
 *
 * @auther: decade
 * @date: 17-12-31
 */
@Controller
@RequestMapping("/questions")
public class QuestionsController {

    @Autowired
    private QuestionsBiz questionsBiz;
    @Autowired
    private NoticesBiz noticesBiz;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listQuestions() {
        return "forward:list/1";
    }

    @RequestMapping(value = "/list/{current}", method = RequestMethod.GET)
    public String listQuestionsPage(ModelMap modelMap, @PathVariable("current") int current) {
        modelMap.put("result", questionsBiz.pageList(current));
        return "questions_list";
    }

    @RequestMapping(value = "/detail/{questionsId}", method = RequestMethod.GET)
    public String detailQuestions(@PathVariable("questionsId") String questionsId, ModelMap modelMap) {
        modelMap.put("result", questionsBiz.detailQuestions(questionsId));
        modelMap.put("notice", noticesBiz.pageList(1));
        return "questions_detail";
    }

    @ResponseBody
    @RequestMapping(value = "/search/{question}", method = RequestMethod.GET)
    public Object SearchQuestions(@PathVariable("question") String question) {
        return questionsBiz.searchQuestions(question);
    }
}
