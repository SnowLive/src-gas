<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 部门政务人事信息</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/about.min.css"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/solution.min.css"/>
</head>
<body>
<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========layout-container================-->
  <div class="layout-container">
    <!-- 导航 -->
    <div class="breadcrumb-box">
      <div class="am-container">
        <ol class="am-breadcrumb">
          <li><a href="/">首页</a></li>
          <li><a href="/init/info">信息公示</a></li>
          <li><a href="/officials/list">人事信息</a></li>
          <li class="am-active">联系我们</li>
        </ol>
      </div>
    </div>
  </div>
  <hr class="section_divider -narrow">
  <div class="section"
       style="margin-top:0px;background-image: url('<%=request.getContextPath()%>/dist/assets/images/pattern-light.png');">
    <div class="container">
      <!--about-container start-->
      <div class="section">
        <div class="container am-text-center">
          <div class="section--header">
            <h2 class="section--title ">${requestScope.official.data[0].realName}</h2>
            <div class=""></div>
          </div>
          <!--about-container start-->
          <div class="about-container">
            <div class="am-g">
              <div class="am-u-md-6">
                <div class="our-company-text am-text-left">
                  <h3>${requestScope.official.data[0].role.name}</h3>
                  <div class="am-text-left am-padding-0 am-cf">
                    <strong class="am-u-md-1 am-badge am-radius am-badge-secondary">姓名:</strong><span
                          class="am-u-md-3">${requestScope.official.data[0].realName}</span>
                    <strong class="am-u-md-1 am-badge am-radius am-badge-secondary">性别:</strong><span
                          class="am-u-md-3">${requestScope.official.data[0].sex}</span>
                    <strong class="am-u-md-1 am-badge am-radius am-badge-secondary">民族:</strong><span
                          class="am-u-md-3">${requestScope.official.data[0].nation}</span>
                    <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">毕业大学:</strong><span
                          class="am-u-md-4">${requestScope.official.data[0].college}</span>
                    <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">学位:</strong><span
                          class="am-u-md-4">${requestScope.official.data[0].degree}</span>
                    <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">入党时间:</strong><span
                          class="am-u-md-4">${requestScope.official.data[0].joinPartyTime}</span>
                    <strong class="am-u-md-2 am-badge am-radius am-badge-secondary">工作时间:</strong><span
                          class="am-u-md-4">${requestScope.official.data[0].joinWorkTime}</span>
                    <strong class="am-u-md-1 am-badge am-radius am-badge-secondary">籍贯:</strong><span
                          class="am-u-md-11">${requestScope.official.data[0].origin}</span>
                  </div>
                </div>
              </div>

              <div class="am-u-md-6">
                <div class="our-company-quote">
                  <div class="am-g">
                    <div class="am-u-md-6">
                      <div class="our-company-img">
                        <img src="${requestScope.official.data[0].picture}" alt=""/>
                      </div>
                    </div>
                    <div class="am-u-md-6 am-text-left">
                      <p class="our-company-brief">${requestScope.official.data[0].resume}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--about-container end-->
        </div>
      </div>

    </div>
  </div>


  <!--===========layout-footer================-->
  <jsp:include page="common/footer.jsp"/>
</body>
<jsp:include page="common/js.jsp"/>
</html>