<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="dfn" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 热点访谈</title>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/news.min.css"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/product.min.css"/>
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
          <li><a href="/init/join">公众参与</a></li>
          <li class="am-active">热点访谈</li>
        </ol>
      </div>
    </div>
  </div>
  <!--focus info list-->
  <div class="section">
    <div class="container">
      <div class="section--header">
        <h2 class="section--title">热点访谈</h2>
      </div>
    </div>
    <div class="product3-show-container">
      <div class="container">
        <div class="am-g">
          <c:forEach items="${requestScope.result.data}" var="obj">
            <div class="am-u-lg-6 am-u-md-12 product3-show-box">
              <div class="am-g">
                <div class="am-u-md-6">
                  <div class="product3-show-img">
                    <div class="product3-img-mask"><i class="am-icon-search"></i></div>
                    <c:choose>
                      <c:when test="${obj.picture eq ''}">
                        <img src="<%=request.getContextPath()%>/dist/assets/images/example/example1.jpg">
                      </c:when>
                      <c:otherwise>
                        <img src="${obj.picture}">
                      </c:otherwise>
                    </c:choose>
                  </div>
                </div>
                <div class="am-u-md-6">
                  <div class="product3-show-content">
                    <h3>${obj.title}</h3>
                    <p>${obj.info}</p>
                    <a href="/focus/detail/${obj.focusId}" class="link">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </c:forEach>
        </div>
      </div>
    </div>
    <!-- pagination-->
    <div class="blog">
      <ul class="am-pagination">
        <li class="${result.current<2?"am-disabled":""} am-fl am-margin"><a
                href="/focus/list/${result.current-1}">上一页</a></li>
        <li class="${result.current*result.size>=result.total?"am-disabled":""} am-fr am-margin"><a
                href="/focus/list/${result.current+1}">下一页</a></li>
      </ul>
    </div>
  </div>
  <!--connect-->
  <jsp:include page="common/connector.jsp"/>
  <!--===========layout-footer================-->
  <jsp:include page="common/footer.jsp"/>
</div>
</body>
<jsp:include page="common/js.jsp"/>
</html>
