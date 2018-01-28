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
          <li><a href="/init/join">公众参与</a></li>
          <li class="am-active">热点访谈</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="section news-section">
    <div class="container">
      <!--news-section left start-->
      <div class="am-u-md-9">
        <div class="article">
          <header class="article--header">
            <h2 class="article--title"><a href="#" rel="">${result.data[0].title}</a></h2>
            <ul class="article--meta">
              <li class="article--meta_item"><i class="am-icon-calendar"></i>${result.data[0].publishTime}</li>
            </ul>
          </header>
          <div class="article--content">
            ${result.data[0].content}
          </div>
        </div>

      </div>
      <!--news-section left end-->

      <!--news-section right start-->
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
      <!--news-section right end-->
    </div>
  </div>
</div>
<!--===========layout-footer================-->
<jsp:include page="common/footer.jsp"/>
</body>
<jsp:include page="common/js.jsp"/>
</html>
