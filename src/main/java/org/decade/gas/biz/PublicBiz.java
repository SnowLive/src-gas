package org.decade.gas.biz;

import org.decade.gas.bean.json.DemoJson;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Class For:
 * 公众用户
 *
 * @auther: decade
 * @date: 18-1-2
 */
public interface PublicBiz {
    DemoJson login(String name, String passwd, HttpSession httpSession);

    DemoJson register(String name, String rname, String phone, String sex,
                      String info, MultipartFile file, String passwd, HttpServletRequest request);

    DemoJson logout(HttpSession httpSession);

}
