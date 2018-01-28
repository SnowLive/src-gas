<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 在线申报</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/index.min.css"/>
</head>

<body>

<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========选项================-->
  <!-- 导航 -->
  <div class="layout-container">
    <div class="breadcrumb-box">
      <div class="am-container">
        <ol class="am-breadcrumb">
          <li><a href="/">首页</a></li>
          <li><a href="/init/onlinedeclare">在线申报</a></li>
          <li class="am-active">状态查询</li>
        </ol>
      </div>
    </div>
  </div>
</div>

<!--panel-->
<div class="section" style="border-bottom: 1px solid #e9e9e9;">
  <div class="container">
    <!-- container title -->
    <div class="section--header">
      <h2 class="section--title">状态查询</h2>
      <p class="section--description">办公流程太多，搜索框输入（或语音输入），可以快速找到核心内容。</p>
    </div>
    <!--index-container start-->
    <div class="index-container">
      <div class="am-g">

        <!--同意申报入口-->
        <div class="am-u-md-6">
          <div class="service_item">
            <i class="service_item--icon am-icon-user"></i>
            <h3 class="service_item--title">统一申报入口</h3>
            <div class="service_item--text">
              <p>涵盖主要申报申报事宜，简化申报流程</p>
            </div>
            <footer class="service_item--footer"><a href="#" class="link -blue_light">Learn More>></a></footer>
          </div>
        </div>
        <!--状态查询-->
        <div class="am-u-md-6">
          <div class="service_item">
            <i class="service_item--icon am-icon-search"></i>
            <h3 class="service_item--title">申报状态查询</h3>
            <div class="service_item--text">
              <p>办公流程太多，搜索框输入（或语音输入），可以快速找到核心内容</p>
            </div>
            <footer class="service_item--footer"><a href="#" class="link -blue_light">Learn More>></a></footer>
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

