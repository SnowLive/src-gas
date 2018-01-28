package org.decade.gas.config;

import org.decade.gas.bean.json.ResultJson;
import org.decade.gas.enums.BaseEnum;
import org.decade.gas.exception.BaseException;
import org.decade.gas.utils.ResultUtil;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Class For:
 * 异常统一处理
 *
 * @auther: decade
 * @date: 18-1-3
 */
@ControllerAdvice
public class ExceptionHandle {

    @ResponseBody
    @ExceptionHandler(value = Exception.class)
    public ResultJson handle(Exception e) {
        if (e instanceof BaseException && ((BaseException) e).getCode() != -999) {
            System.out.println("捕获到运行时异常:" + e.getMessage());
            return ResultUtil.error(((BaseException) e).getCode(), e.getMessage());
        } else {
            System.out.println(e.getMessage());
            if (e instanceof CannotGetJdbcConnectionException)
                return ResultUtil.error(BaseEnum.JDBCCONNECT.getCode(), BaseEnum.JDBCCONNECT.getMsg());
        }
        return ResultUtil.error(-999, "未知错误");
    }
}