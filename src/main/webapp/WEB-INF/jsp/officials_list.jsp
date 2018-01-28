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
    <div class="layout-container">
      <div class="breadcrumb-box">
        <div class="am-container">
          <ol class="am-breadcrumb">
            <li><a href="/">首页</a></li>
            <li><a href="/init/info">信息公示</a></li>
            <li class="am-active">人事信息</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <hr class="section_divider -narrow">
  <div class="section"
       style="margin-top:0px;background-image: url('<%=request.getContextPath()%>/dist/assets/images/pattern-light.png');">
    <%--<div class="about-container">
      <div class="our-team">
        <div class="am-g">
          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/001.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                    <a href="">john@financed.com</a>
                  </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/002.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/003.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/004.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/005.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/006.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/007.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="am-u-md-3 am-u-end">
            <div class="team-box">
              <div class="our-team-img">
                <img src="<%=request.getContextPath()%>/dist/assets/images/about/008.jpg" alt=""/>
              </div>
              <div class="team_member--body">
                <h3 class="team_member--name">John Holland</h3>
                <span class="team_member--position">Chief Executive Officer</span>
                <span class="team_member--email">
                  <a href="">john@financed.com</a>
                </span>
                <ul class="team_member--links">
                  <li><a href="#"><span class="am-icon-facebook"></span></a></li>
                  <li><a href="#"><span class="am-icon-twitter"></span></a></li>
                  <li><a href="#"><span class="am-icon-google-plus"></span></a></li>
                  <li><a href="#"><span class="am-icon-linkedin"></span></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!--about-container end-->
    </div>--%>
    <div class="section">
      <div class="container">
        <div class="section--header">
          <h2 class="section--title">人员信息</h2>
        </div>
        <div class="cooperation-container">
          <div data-am-widget="tabs" class="am-tabs">
            <ul class="am-tabs-nav am-cf">
              <c:forEach items="${requestScope.department.data}" var="dep" varStatus="status">
                <li class="" onclick="official.func.dep_officials('${dep.name}',${status.index})"><a>${dep.name}</a>
                </li>
              </c:forEach>
            </ul>
            <div class="am-tabs-bd  am-margin-top-lg" id="id-div-tab-content">
              <ul class="am-avg-md-5 am-avg-sm-3 am-thumbnails">
                <c:forEach items="${requestScope.officials.data}" var="official">
                  <li><a href="/officials/detail/${official.officialId}"><img
                          class="am-thumbnail" src="${official.picture}"/>${official.realName}</a>
                  </li>
                </c:forEach>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<!--===========layout-footer================-->
<jsp:include page="common/footer.jsp"/>
</body>
<jsp:include page="common/js.jsp"/>
<script src="<%=request.getContextPath()%>/dist/assets/js/index/officials.js" charset="utf-8"></script>
</html>