package org.decade.gas.biz;

import org.decade.gas.bean.db.index.DeclaresBean;
import org.decade.gas.bean.json.BaseJsonObj;
import org.decade.gas.bean.json.DemoJson;
import org.decade.gas.bean.json.PageBean;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

/**
 * Class For:
 * 在线申报
 *
 * @auther: decade
 * @date: 18-1-2
 */
public interface DeclaresBiz {

    BaseJsonObj<DeclaresBean> listDeclares();

    BaseJsonObj<DeclaresBean> detailDeclares(String declareId);

    BaseJsonObj<DeclaresBean> detailByPublicId(String publicId);

    PageBean<DeclaresBean> pageList(int currentPage);

    DemoJson addDeclare(String powerId, String publicId, String title, String content, MultipartFile file, HttpServletRequest request);
}
