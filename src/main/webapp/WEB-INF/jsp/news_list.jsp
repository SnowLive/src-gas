<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 新闻动态</title>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/news.min.css"/>
  <jsp:include page="common/css.jsp"/>
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
          <li class="am-active">新闻动态</li>
        </ol>
      </div>
    </div>
  </div>

  <!--news info list-->
  <div class="section">
    <div class="container">
      <div class="section--header">
        <h2 class="section--title">政务新闻</h2>
        <p class="section--description">大事小情早知道</p>
      </div>
      <!--list-->
      <div class="news-contaier">
        <div class="blog">
          <!--list-->
          <div class="am-g">
            <c:forEach items="${requestScope.result.data}" var="obj">
              <div class="am-u-lg-4 am-u-md-6  am-u-end">
                <div class="article">
                  <div class="article-img">
                    <c:choose>
                      <c:when test="${obj.picture ne null}">
                        <img src="${obj.picture}" style="height: 200px" alt=""/>
                      </c:when>
                      <c:otherwise>
                        <img src="<%=request.getContextPath()%>/dist/assets/images/example/example1.jpg" style="height: 200px" alt=""/>
                      </c:otherwise>
                    </c:choose>
                  </div>
                  <div class="article-header">
                    <h2><a href="/news/detail/${obj.newsId}" rel="">${fn:substring(obj.title,0 ,14 )}...</a></h2>
                    <ul class="article--meta">
                      <li class="article--meta_item comments">${obj.info.source}</li>
                      <li class="article--meta_item -date">${obj.info.date}</li>
                      <li class="article--meta_item comments--title">${obj.info.time}</li>
                    </ul>
                  </div>
                  <div class="article--content">
                    <p>${obj.info.summary}...</p>
                  </div>
                  <div class="article--footer">
                    <a href="/news/detail/${obj.newsId}" class="link">Read More</a>
                  </div>
                </div>
              </div>
            </c:forEach>
          </div>
          <!-- pagination-->
          <ul class=" am-pagination">
            <li class="${result.current<2?"am-disabled":""} am-fl"><a href="/news/list/${result.current-1}">上一页</a></li>
            <li class="${result.current*result.size>result.total?"am-disabled":""} am-fr"><a
                    href="/news/list/${result.current+1}">下一页</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!--connect-->
  <div class="section"
       style="margin-top:0px;background-image: url('<%=request.getContextPath()%>/dist/assets/images/pattern-light.png');">
    <div class="container">
      <!--index-container start-->
      <div class="index-container">
        <div class="am-g">
          <div class="am-u-md-4">
            <div class="contact_card">
              <i style="color:#59bcdb" class="contact_card--icon am-icon-phone"></i>
              <strong class="contact_card--title">Contact Us</strong>
              <p class="contact_card--text">Feel free to call us on <br> <strong>0 (855) 233-5385</strong> <br> Monday -
                Friday, 8am - 7pm</p>
              <button type="button" class="am-btn am-btn-secondary">Order a Call Back</button>
            </div>
          </div>
          <div class="am-u-md-4">
            <div class="contact_card">
              <i style="color:#59bcdb" class="contact_card--icon am-icon-envelope-o"></i>
              <strong class="contact_card--title">Our Email</strong>
              <p class="contact_card--text">Drop us a line anytime at <br> <strong><a href="mailto:info@financed.com">info@financed.com</a>,</strong>
                <br> and we’ll get back soon<%=request.getContextPath()%>/dist/p>
                <button type="button" class="am-btn am-btn-secondary">Start Writing</button>
            </div>
          </div>
          <div class="am-u-md-4">
            <div class="contact_card">
              <i style="color:#59bcdb" class="contact_card--icon am-icon-map-marker"></i>
              <strong class="contact_card--title">Our Address</strong>
              <p class="contact_card--text">Come visit us at <br> <strong>Stock Building, New York,</strong> <br> NY
                93459</p>
              <button type="button" class="am-btn am-btn-secondary">See the Map</button>
            </div>
          </div>
        </div>
      </div>
      <!--index-container end-->
    </div>
  </div>

  <!--===========layout-footer================-->
  <jsp:include page="common/footer.jsp"/>
</div>
</body>
<jsp:include page="common/js.jsp"/>
</html>
