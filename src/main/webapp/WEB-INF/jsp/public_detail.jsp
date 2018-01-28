<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 用户中心</title>
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
          <li class="am-active">用户中心</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="section news-section">
    <div class="container">
      <!-- declare's entry -->
      <div class="am-u-md-12">
        <div class="comments">
          <div class="comments">
            <h2 class="comments--title article ">
              <strong class="am-margin-right-lg am-text-lg">${sessionScope.user.name}</strong>
            </h2>
            <ul class="comments_list">
              <li class="comment">
                <div class="about-container">
                  <div class="am-g">
                    <div class="am-u-md-6">
                      <div class="our-company-quote">
                        <div class="am-g">
                          <div class="am-u-md-6">
                            <div class="our-company-img">
                              <span><img
                                      style="width: 100px;height: 100px;border-radius: 50%;border: 1px solid #e4edf4;"
                                      src="${sessionScope.user.picture}"></span>
                            </div>
                          </div>
                          <div class="am-u-md-6 am-text-left">
                            <h3>个人简介</h3>
                            <p class="our-company-brief">${sessionScope.user.info}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="am-u-md-6">
                      <div class="our-company-text am-text-left">
                        <h3>${sessionScope.user.role.name}</h3>
                        <div class="am-text-left am-padding-0 am-cf">
                          <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">姓名:</strong><span
                                class="am-u-md-3">${sessionScope.user.realName}</span>
                          <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">性别:</strong><span
                                class="am-u-md-1">${sessionScope.user.sex}</span>
                          <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">电话:</strong><span
                                class="am-u-md-2">${sessionScope.user.phoneNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="comments">
            <h2 class="comments--title article ">
              <strong class="am-margin-right-lg am-text-lg ">在线申报</strong>
            </h2>
            <ul class="comments_list">
              <li class="comment">
                <div class="about-container">
                  <div class="am-g">
                    <div class="am-u-md-12">
                      <div class="our-company-text am-text-left">
                        <%--<div class="am-text-left am-padding-0 am-cf ">
                          <strong class="am-u-md-3  am-badge am-text-lg am-radius am-badge-secondary">title:</strong>
                          <span class="am-u-md-3 am-badge am-text-lg am-radius am-badge-secondary am-fr">state:</span>
                          <br><br>
                          <c:forEach items="${requestScope.declares.data}" var="declare">
                            <strong class="am-u-md-8 am-badge am-text-lg am-radius am-badge-warning">${declare.title}</strong>
                            <span class="am-u-md-3 am-badge am-text-lg am-radius am-badge-danger am-fr">${declare.declareState}</span>
                            <br>
                          </c:forEach>
                        </div>--%>
                        <div class="am-text-left am-padding-0 am-cf ">
                          <table class="am-table am-table-striped am-table-hover">
                            <thead>
                            <tr>
                              <th>标题</th>
                              <th>状态</th>
                              <th>创建时间</th>
                            </tr>
                            </thead>
                            <tbody>
                            <c:forEach items="${requestScope.declares.data}" var="declare">
                              <tr>
                                <td>${declare.title}</td>
                                <td>
                                  <c:choose>
                                    <c:when test="${declare.declareState eq 0}">发起</c:when>
                                    <c:when test="${declare.declareState eq 1}">解决中</c:when>
                                    <c:when test="${declare.declareState eq 2}">申报完成</c:when>
                                    <c:otherwise >删除</c:otherwise>
                                  </c:choose>
                                </td>
                                <td>${fn:substringBefore(declare.declareTime,' ' )}</td>
                              </tr>
                            </c:forEach>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
<script src="<%=request.getContextPath()%>/dist/assets/js/ajaxfileupload.js" charset="utf-8"></script>
<script src="<%=request.getContextPath()%>/dist/assets/js/index/declares.js" charset="utf-8"></script>
</html>
