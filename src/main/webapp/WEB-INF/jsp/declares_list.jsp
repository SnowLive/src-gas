<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 申报入口</title>
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
          <li><a href="/init/onlinedeal">网上办事</a></li>
          <li class="am-active">申报入口</li>
        </ol>
      </div>
    </div>
  </div>
  <!--guides info list-->
  <div class="section">
    <div class="container">
      <!--header and search-->
      <div class="section--header">
        <h2 class="section--title">申报入口</h2>
        <p class="section--description">涵盖主要申报申报事宜，简化申报流程</p>
        <form class="am-form am-form-horizontal ">
          <div class="am-form-group blog">
            <div class="am-g am-pagination">
              <div class="am-u-md-8 am-u-sm-8">
                <input id="id-ipt-search" onkeyup="declare.func.search()"  type="text" class="am-round am-lx" placeholder="Input Question">
              </div>
              <button type="button" onclick="declare.func.search()"
                      class="am-btn am-btn-secondary am-b am-round am-btn-lg">search
              </button>
            </div>
          </div>
        </form>
      </div>
      <!--list-->
      <div class="news-contaier">
        <div class="blog">
          <!--list-->
          <div class="am-g am-margin-lg ">
            <c:forEach items="${requestScope.result.data}" var="obj">
              <div class="am-u-lg-4 am-u-md-6 am-u-end">
                <div class="article">
                  <div class="article-img">
                  </div>
                  <div class="article-header">
                    <h2><a href="/declares/guide/${obj.guideId}" title="${obj.title}" rel="">在线申报: ${fn:substring(obj.title,0,10 )}...</a>
                    </h2>
                  </div>
                  <div class="article--footer">
                    <a href="/declares/guide/${obj.guideId}" class="link">Read More</a>
                  </div>
                </div>
              </div>
            </c:forEach>
          </div>
          <!-- pagination-->
          <ul class="am-pagination">
            <li class="${result.current<2?"am-disabled":""} am-fl"><a href="/declares/list/${result.current-1}">上一页</a>
            </li>
            <li class="${result.current*result.size>result.total?"am-disabled":""} am-fr"><a
                    href="/declares/list/${result.current+1}">下一页</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--connect-->
  <jsp:include page="common/connector.jsp"/>
  <!--===========layout-footer================-->
  <jsp:include page="common/footer.jsp"/>
</div>
</body>
<jsp:include page="common/js.jsp"/>
<script src="<%=request.getContextPath()%>/dist/assets/js/index/declares.js" charset="utf-8"></script>
</html>
