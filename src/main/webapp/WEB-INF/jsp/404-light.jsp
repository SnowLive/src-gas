<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 部门政务办理网站</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/other.min.css"/>
</head>
<body class="error-container error-dark-box">

<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========layout-container================-->
  <div class="layout-container">
    <div class="error error-light">
      <div class="container">
        <h2>404</h2>
        <p>Page Not Found</p>
        <p>对不起,没有找到您所需要的页面,可能是URL不确定,或者页面已被移除。</p>
        <button type="button" class="am-btn am-btn-secondary" onclick="window.location.href='/'">Home
        </button>
      </div>
    </div>
  </div>
</div>
</body>
<jsp:include page="common/js.jsp"/>
</html>
