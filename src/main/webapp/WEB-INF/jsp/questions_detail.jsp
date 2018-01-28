<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 新闻动态</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/news.min.css"/>
</head>
<body>
<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========layout-container================-->
  <div class="layout-container ">
    <!--导航-->
    <div class="breadcrumb-box">
      <div class="am-container">
        <ol class="am-breadcrumb">
          <li><a href="/">首页</a></li>
          <li><a href="/init/onlinedeal">网上办事</a></li>
          <li class="am-active">办事指南</li>
        </ol>
      </div>
    </div>
  </div>
  <!--===========layout-container================-->
  <div class="section news-section">
    <div class="container">
      <!--news-section left start-->
      <div class="am-u-md-9">
        <div class="comments">
          <div class="comments">
            <h2 class="comments--title article">问题:${result.data[0].question}</h2>
            <ul class="comments_list">
              <li class="comment">
                <header class="comment--header">
                  <figure class="comment--userpic"><img src="<%=request.getContextPath()%>/dist/assets/images/news/av01.jpg" alt=""></figure>
                  <strong class="comment--username"><span>Official</span></strong>
                </header>
                <div class="comment--content">
                  <p>
                    ${result.data[0].answer}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--questions-section left end-->
      <!--notice start-->
      <div class="am-u-md-3">
        <div class="blog_sidebar">
          <div class="widget">
            <h2 class="widget--title"><i class="am-icon-rss"></i>站内公告</h2>
            <ul>
              <c:forEach items="${requestScope.notice.data}" var="obj">
                <li>
                  <a href="/notice/detail/${obj.noticeId}">${obj.title}</a>
                  <span class="rss-date">${obj.publishTime}</span>
                </li>
              </c:forEach>
            </ul>
          </div>
        </div>
      </div>
      <!--notice end-->
    </div>
  </div>
</div>
<!--===========layout-footer================-->
<jsp:include page="common/footer.jsp"/>
</body>
<jsp:include page="common/js.jsp"/>
</html>
