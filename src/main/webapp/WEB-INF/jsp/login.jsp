<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 部门政务办理网站</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/other.min.css" />
</head>

<body class="register-container">

<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========选项================-->
  <!--===========layout-container================-->
  <div class="register-box">
      <fieldset class="am-form" data-am-validator>
        <legend class="am-text-center">登录</legend>

        <div class="am-form-group">
          <div class="am-g">
            <div class="am-u-md-2 am-padding-0 am-text-right">
              <label for="doc-vld-name-2" class="register-name">账号</label>
            </div>
            <div class="am-u-md-10">
              <input type="text" id="doc-vld-name-2" minlength="3" pattern="^\w{6,12}$"
                     placeholder="请输入账号" required/>
            </div>
          </div>
        </div>

        <div class="am-form-group">
          <div class="am-g">
            <div class="am-u-md-2 am-padding-0 am-text-right">
              <label for="doc-vld-pwd-1" class="register-pwd">密码</label>
            </div>
            <div class="am-u-md-10">
              <input type="password" id="doc-vld-pwd-1" placeholder="请输入密码" pattern="\w{6,12}$" required/>
            </div>
          </div>
        </div>


        <div class="am-g">
          <div class="am-u-md-10">
            <button class="am-btn am-btn-secondary" onclick="public.func.login()" >登录</button>
          </div>
        </div>
      </fieldset>
  </div>
</div>


<!--===========layout-footer================-->
<jsp:include page="common/footer.jsp"/>
</body>

<jsp:include page="common/js.jsp"/>
</html>