<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 政策法规</title>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/join.min.css"/>
  <jsp:include page="common/css.jsp"/>
</head>
<body>
  <div class="layout">
    <!--===========layout-header================-->
    <jsp:include page="common/header.jsp"/>
    <!--===========layout-container================-->
    <!-- 导航 -->
    <div class="layout-container">
      <div class="breadcrumb-box">
        <div class="am-container">
          <ol class="am-breadcrumb">
            <li><a href="/">首页</a></li>
            <li><a href="/init/info">信息公示</a></li>
            <li class="am-active">政策法规</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- 内容列表 -->
    <div class="section">
      <div class="container">
        <!--标题-->
        <div class="section--header am-margin">
          <h2 class="section--title">政策法规</h2>
          <p class="section--description">
            本网站公布的政策法规清单所列的政策法规是行政主体依法履行的由国家机关制定并颁布的政策法规。
            <br/> 政策法规的履行接受公众监督。
          </p>
        </div>
        <!--内容-->
        <div class="join-container">
          <div class="am-g">
            <!--政策法规清单-->
            <div class="am-u-md-12">
              <h3 class="careers--subtitle">政策法规清单</h3>
              <div class="careers--vacancies">
                <div class="am-panel-group" id="accordion">
                  <c:forEach items="${requestScope.result.data}" var="obj" varStatus="num">
                    <div class="am-panel am-panel-default">
                      <!--tab  title -->
                      <div class="am-panel-hd">
                        <h4 class="am-panel-title"
                            data-am-collapse="{parent: '#accordion', target: '#do-not-say-${num.index}'}">
                            ${fn:substring(obj.title,0 ,10 )}...
                          <span class="am-fr">${obj.publishTime}</span>
                        </h4>
                      </div>
                      <!--tab content-->
                      <div id="do-not-say-${num.index}"
                           class="am-panel-collapse am-collapse ${num.index eq 0 ? 'am-in': ''}">
                        <div class="am-panel-bd">
                          <div class="vacancies--item_content js-accordion--pane_content" style="">
                              ${obj.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </c:forEach>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--===========layout-footer================-->
    <jsp:include page="common/footer.jsp"/>
  </div>
</body>
<jsp:include page="common/js.jsp"/>
</html>
