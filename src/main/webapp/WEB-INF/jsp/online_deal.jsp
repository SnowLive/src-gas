<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 信息公开</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/index.min.css"/>
</head>

<body>

<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!-- 导航 -->
  <div class="layout-container">
    <div class="breadcrumb-box">
      <div class="am-container">
        <ol class="am-breadcrumb">
          <li><a href="/">首页</a></li>
          <li class="am-active">网上办事</li>
        </ol>
      </div>
    </div>
  </div>

</div>
<div class="section"
     style="margin-top:0px;background-image: url('<%=request.getContextPath()%>/dist/assets/images/pattern-light.png');">
  <div class="container">
    <!--index-container start-->
    <div class="index-container">
      <div class="am-g">
        <div class="am-u-md-6">
          <div class="contact_card">
            <i style="color:#59bcdb" class="contact_card--icon am-icon-fire"></i>
            <strong class="contact_card--title">办事指南</strong>
            <p class="contact_card--text">
              办事指南协助<br>用户进行网上办事的<br>在线宝典
            </p>
            <a href="/guides/list"><button type="button" class="am-btn am-btn-secondary">Learn More</button></a>
          </div>
        </div>
        <div class="am-u-md-6">
          <div class="contact_card">
            <i style="color:#59bcdb" class="contact_card--icon am-icon-question-circle"></i>
            <strong class="contact_card--title">常见问题</strong>
            <p class="contact_card--text">常见问题,这里整理了<br>所有你在使用网站时出现的<br>问题的解决方法供您采纳</p>
            <a href="/questions/list"><button type="button" class="am-btn am-btn-secondary">Learn More</button></a>
          </div>
        </div>
      </div>
    </div>
    <!--index-container end-->
  </div>
</div>
<!--===========layout-footer================-->
<jsp:include page="common/footer.jsp"/>
</body>

<jsp:include page="common/js.jsp"/>
</html>

