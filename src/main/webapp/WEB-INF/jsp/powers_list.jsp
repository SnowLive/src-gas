<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 行政职权</title>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/join.min.css"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/news.min.css"/>
  <jsp:include page="common/css.jsp"/>
</head>
<body>
<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========导航================-->
  <div class="layout-container">
    <div class="breadcrumb-box">
      <div class="am-container">
        <ol class="am-breadcrumb">
          <li><a href="/">首页</a></li>
          <li><a href="/init/info">信息公示</a></li>
          <li class="am-active">行政职权</li>
        </ol>
      </div>
    </div>
  </div>
  <!-- 具体内容 -->
  <div class="section">
    <div class="container">
      <!-- 描述 -->
      <div class="section--header">
        <h2 class="section--title">行政职权</h2>
        <p class="section--description">
          本网站公布的权力清单所列的行政权力是行政主体依法实施的对公民、法人和其他组织权利义务
          <br>产生直接影响的行政职权。
        </p>
      </div>
      <!--搜索框-->
      <form class="am-form am-form-horizontal ">
        <div class="am-form-group blog">
          <div class="am-g am-pagination">
            <div class="am-u-md-8 am-u-sm-8">
              <input id="id-ipt-search" onkeyup="power.func.search()" type="text" class="am-round am-lx"
                     placeholder="Input Question">
            </div>
            <button type="button" onclick="power.func.search()"
                    class="am-btn am-btn-secondary am-b am-round am-btn-lg">search
            </button>
          </div>
        </div>
      </form>
      <!-- 内容 -->
      <div class="join-container">
        <div class="am-g">
          <!-- 左侧边栏-->
          <div class="am-u-md-3">
            <div class="careers--articles">
              <h3 class="careers--subtitle">部 门 : </h3>
              <div class="careers_articles">
                <c:forEach items="${requestScope.department.data}" var="department">
                  <div class="careers_article" onclick="power.func.dep_powers('${department.name}')">
                    <i class="careers_article--icon am-icon-building-o"></i>
                    <h3 class="careers_article--title">${department.name}</h3>
                    <div class="careers_article--text">
                      <p>${department.function}</p>
                    </div>
                    <div class="careers_article--footer"><a onclick="power.func.dep_powers('${department.name}')"
                                                            class="link">Learn More</a></div>
                  </div>
                </c:forEach>
              </div>
            </div>
          </div>
          <!-- 行政职权 -->
          <div class="am-u-md-9">
            <div class="am-container">
              <h3 class="careers--subtitle am-u-md-4">责 任 与 权 力 :</h3>
            </div>
            <div class="careers--vacancies">
              <div class="am-panel-group" id="accordion">
                <c:forEach items="${requestScope.powers.data}" var="power" varStatus="status">
                  <div class="am-panel am-panel-default ">
                    <div class="am-panel-hd">
                      <h4 class="am-panel-title"
                          data-am-collapse="{parent: '#accordion', target: '#do-not-say-${status.index}'}">
                          ${power.title}
                      </h4>
                    </div>
                    <div id="do-not-say-${status.index}"
                         class="am-panel-collapse am-collapse ${status.index eq 0? 'am-in':''}">
                      <div class="am-panel-bd">
                        <div class="am-panel-title am-margin-left-lg">依据:</div>
                        <div class="join-container">
                            ${power.content}
                        </div>
                        <div class="am-panel-title am-margin-left-lg"><a
                                href="/guides/detail/power/${power.title}">办事指南</a></div>
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
<script src="<%=request.getContextPath()%>/dist/assets/js/index/powers.js" charset="utf-8"></script>
</html>
