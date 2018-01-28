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
          <li class="am-active">信息公示</li>
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
        <div class="am-u-md-4">
          <div class="contact_card">
            <i style="color:#59bcdb" class="contact_card--icon am-icon-list"></i>
            <strong class="contact_card--title">政策法规</strong>
            <p class="contact_card--text">
              行政主体依法履行的<br>由国家机关<br>制定并颁布的政策法规<br>
            </p>
            <a href="/policy/list"><button type="button" class="am-btn am-btn-secondary">Learn More</button></a>
          </div>
        </div>
        <div class="am-u-md-4">
          <div class="contact_card">
            <i style="color:#59bcdb" class="contact_card--icon am-icon-envelope-o"></i>
            <strong class="contact_card--title">行政职权</strong>
            <p class="contact_card--text">行政权力是行政主体依法实施的<br>对公民、法人和其他组织权利义务<br>产生直接影响的行政职权</p>
            <button type="button" class="am-btn am-btn-secondary"><a href="/powers/list">Learn More</a></button>
          </div>
        </div>
        <div class="am-u-md-4">
          <div class="contact_card">
            <i style="color:#59bcdb" class="contact_card--icon am-icon-envelope-o"></i>
            <strong class="contact_card--title">人事信息</strong>
            <p class="contact_card--text">合法公开<br>行政机关人员<br>必要信息</p>
            <button type="button" class="am-btn am-btn-secondary"><a href="/officials/list">Learn More</a></button>
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

