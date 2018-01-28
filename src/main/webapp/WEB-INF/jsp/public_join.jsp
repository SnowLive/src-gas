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
          <li class="am-active">公众参与</li>
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
      <h2 class="section--title">公众参与</h2>
      <p class="section--description">参与问卷调查,提升服务质量,了解群众最需要的,因为那是我们努力的方向.</p>
    </div>
    <!--index-container start-->
    <div class="index-container">
      <div class="am-g">

        <!--同意申报入口-->
        <div class="am-u-md-6">
          <div class="service_item">
            <i class="service_item--icon am-icon-wpforms"></i>
            <h3 class="service_item--title">网上调查</h3>
            <div class="service_item--text">
              <p>通过问卷调查的方式了解用户所需所想.</p>
            </div>
            <footer class="service_item--footer"><a href="/survey/list" class="link -blue_light">Learn More>></a></footer>
          </div>
        </div>
        <!--状态查询-->
        <div class="am-u-md-6">
          <div class="service_item">
            <i class="service_item--icon am-icon-circle-o"></i>
            <h3 class="service_item--title">热点访谈</h3>
            <div class="service_item--text">
              <p>聚焦政府热点,关注实时动态.</p>
            </div>
            <footer class="service_item--footer"><a href="/focus/list" class="link -blue_light">Learn More>></a></footer>
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

