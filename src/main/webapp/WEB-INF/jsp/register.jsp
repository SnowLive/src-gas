<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 部门政务办理网站</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/other.min.css"/>
</head>

<body class="register-container">

<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========选项================-->
  <!--===========layout-container================-->
  <div class="register-box">
    <fieldset class="am-form" data-am-validator>
      <legend class="am-text-center">注册用户</legend>

      <!--账号 -->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-name" class="register-name">账号</label>
          </div>
          <div class="am-u-md-10">
            <input type="text" id="doc-vld-name" minlength="3"
                   placeholder="输入用户名（至少 3 个字符）" required/>
          </div>
        </div>
      </div>
      <!--真实姓名 -->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-rname" class="register-pwd">真实姓名</label>
          </div>
          <div class="am-u-md-10">
            <input type="text" id="doc-vld-rname" placeholder="输入真实姓名" pattern="^[\u4E00-\u9FA5\w]{1,}$" required/>
          </div>
        </div>
      </div>
      <!--手机号-->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-phone" class="register-name">手机号</label>
          </div>
          <div class="am-u-md-10">
            <input type="tel" id="doc-vld-phone" minlength="3"
                   placeholder="输入手机号" pattern="^1((3|5|8){1}\d{1}|70)\d{8}$" required/>
          </div>
        </div>
      </div>
      <!--性别 -->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-sex" class="register-pwd">性别</label>
          </div>
          <div class="am-u-md-10">
            <div id="doc-vld-sex">
              <label class="am-radio-inline">
                <input type="radio" name="radio" value="男" data-am-ucheck> 男
              </label>
              <label class="am-radio-inline">
                <input type="radio" name="radio" value="女" data-am-ucheck> 女
              </label>
            </div>
          </div>
        </div>
      </div>
      <!--备注信息-->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-info" class="register-name">备注信息</label>
          </div>
          <div class="am-u-md-10">
            <input type="text" id="doc-vld-info" minlength="3"
                   placeholder="备注信息" required/>
          </div>
        </div>
      </div>
      <!--照片-->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="file" class="register-pwd">头像</label>
          </div>
          <div class="am-u-md-10">
            <div class="am-upload" id="my-upload">
              <input id="file" name="file" type="file" multiple data-max-file-count="1">
            </div>
          </div>
        </div>
      </div>
      <!--密码-->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-pwd-1" class="register-pwd">密码</label>
          </div>
          <div class="am-u-md-10">
            <input type="password" id="doc-vld-pwd-1" placeholder="输入6-12位密码" pattern="^\w[\w\d]{6,12}$" required/>
          </div>
        </div>
      </div>
      <!--确认密码-->
      <div class="am-form-group">
        <div class="am-g">
          <div class="am-u-md-2 am-padding-0 am-text-right">
            <label for="doc-vld-pwd-2">确认密码</label>
          </div>
          <div class="am-u-md-10">
            <input type="password" id="doc-vld-pwd-2" placeholder="请与上面输入的值一致" data-equal-to="#doc-vld-pwd-1"
                   required/>
          </div>
        </div>
      </div>
      <!--提交-->
      <div class="am-g">
        <div class="am-u-md-10">
          <button class="am-btn am-btn-secondary" onclick="public.func.register()">注册</button>
        </div>
      </div>
    </fieldset>
  </div>
</div>

<!--===========layout-footer================-->
<jsp:include page="common/footer.jsp"/>
</body>

<jsp:include page="common/js.jsp"/>
<script src="<%=request.getContextPath()%>/dist/assets/js/ajaxfileupload.js" charset="utf-8"></script>
<%--<script src="<%=request.getContextPath()%>/dist/assets/js/index/public.js" charset="utf-8"></script>--%>
</html>