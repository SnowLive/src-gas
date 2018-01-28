<%--header.jsp--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<div class="layout-header am-hide-sm-only">
  <!--topbar start-->
  <div class="topbar">
    <div class="container">
      <div class="am-g">
        <div class="am-u-md-12">
          <div class="topbar-right am-text-right am-fr">
            Follow us
            <i class="am-icon-wechat"></i>
            <i class="am-icon-qq"></i>
            <c:choose>
              <c:when test="${sessionScope.user !=null}">
                <span><img style="width: 30px;height: 30px;border-radius: 50%;border: 1px solid #e4edf4;" src="${sessionScope.user.picture}"></span>
                <a href="/public/detail">${sessionScope.user.name}</a>
                <span class="am-text am-text-secondary" onclick="public.func.logout()">退出</span>
              </c:when>
              <c:otherwise><a href="/init/login">登录</a><a href="/init/register">注册</a></c:otherwise>
            </c:choose>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--topbar end-->
  <div class="container">
    <div class="header">
      <div class="am-g">
        <div class="am-u-lg-2 am-u-sm-12">
          <div class="logo">
            <a href=""><img src="<%=request.getContextPath()%>/dist/assets/images/logo1.png" alt=""/></a>
          </div>
        </div>
        <div class="am-u-md-10">
          <div class="header-right am-fr">
            <div class="header-contact">
              <div class="header_contacts--item">
                <div class="contact_mini">
                  <i style="color:#7c6aa6" class="contact-icon am-icon-phone"></i>
                  <strong>0 (855) 233-5385</strong>
                  <span>周一~周五, 8:00 - 20:00</span>
                </div>
              </div>
              <div class="header_contacts--item">
                <div class="contact_mini">
                  <i style="color:#7c6aa6" class="contact-icon am-icon-envelope-o"></i>
                  <strong>cn@yunshipei.com</strong>
                  <span>随时欢迎您的来信！</span>
                </div>
              </div>
              <div class="header_contacts--item">
                <div class="contact_mini">
                  <i style="color:#7c6aa6" class="contact-icon am-icon-map-marker"></i>
                  <strong>天使大厦,</strong>
                  <span>海淀区海淀大街27</span>
                </div>
              </div>
            </div>
            <a href="html/contact.html" class="contact-btn">
              <button type="button" class="am-btn am-btn-secondary am-radius">联系我们</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-box" data-am-sticky>
    <!--header start-->
    <!--header end-->
    <!--nav start-->
    <div class="nav-contain">
      <div class="nav-inner">
        <ul class="am-nav am-nav-pills am-nav-justify">
          <li class=""><a href="/">首页</a></li>
          <!--信息公示-->
          <li>
            <a href="/init/info">信息公示</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="/policy/list">政策法规</a></li>
              <li class="menu-item"><a href="/powers/list">行政职权</a></li>
              <li class="menu-item"><a href="/officials/list">人事信息</a></li>
            </ul>
          </li>
          <!--新闻中心-->
          <li><a href="/news/list">新闻中心</a></li>
          <!--网上办事-->
          <li>
            <a href="/init/onlinedeal">网上办事</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="/guides/list">办事指南</a></li>
              <li class="menu-item"><a href="/questions/list">常见问题</a></li>
            </ul>
          </li>
          <!--在线申报-->
          <li>
            <a href="/init/onlinedeclare">在线申报</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="/declares/list">申报入口</a></li>
              <li class="menu-item"><a href="/declares/state">状态查询</a></li>
            </ul>
          </li>
          <!--公众参与-->
          <li>
            <a href="/init/join">公众参与</a>
            <!-- sub-menu start-->
            <ul class="sub-menu">
              <li class="menu-item"><a href="/suervey/list">网上调查</a></li>
              <li class="menu-item"><a href="/focus/list">热点访谈</a></li>
            </ul>
            <!-- sub-menu end-->
          </li>
        </ul>
      </div>
    </div>
    <!--nav end-->
  </div>
</div>
<!--mobile header start-->
<div class="m-header">
  <div class="am-g am-show-sm-only">
    <div class="am-u-sm-2">
      <div class="menu-bars">
        <a href="#doc-oc-demo1" data-am-offcanvas="{effect: 'push'}">
          <i class="am-menu-toggle-icon am-icon-bars"></i>
        </a>
        <!-- 侧边栏内容 -->
        <nav data-am-widget="menu" class="am-menu  am-menu-offcanvas1" data-am-menu-offcanvas>
          <a href="javascript: void(0)" class="am-menu-toggle"></a>
          <div class="am-offcanvas">
            <div class="am-offcanvas-bar">
              <ul class="am-menu-nav am-avg-sm-1">
                <li><a href="/" class="">首页</a></li>
                <!--信息公示-->
                <li class="am-parent">
                  <a href="html/news.html" class="">信息公示</a>
                  <ul class="am-menu-sub am-collapse">
                    <li class=""><a href="/policy/list" class="">政策法规</a></li>
                    <li class=""><a href="/powers/list" class="">行政职权</a></li>
                    <li class=""><a href="/officials/list" class="">行政职权</a></li>
                  </ul>
                </li>
                <!--新闻信息-->
                <li><a href="/news/list" class="">新闻中心</a></li>
                <!--网上办事-->
                <li class="am-parent">
                  <a href="html/news.html" class="">网上办事</a>
                  <ul class="am-menu-sub am-collapse">
                    <li class="">
                      <a href="/guide/list" class="">办事指南</a>
                    </li>
                    <li class="">
                      <a href="/questions/list" class="">常见问题</a>
                    </li>
                  </ul>
                </li>
                <!--网上办事-->
                <li class="am-parent">
                  <a href="/init/onlinedeclare" class="">在线申报</a>
                  <ul class="am-menu-sub am-collapse">
                    <li class=""><a href="/declares/list" class="">申报入口</a></li>
                    <li class=""><a href="/declares/state" class="">状态查询</a></li>
                  </ul>
                </li>
                <li class="am-parent">
                  <a href="html/news.html" class="">公众参与</a>
                  <ul class="am-menu-sub am-collapse">
                    <li class=""><a href="html/news-content.html" class="">网上调查</a></li>
                    <li class=""><a href="html/news-content.html" class="">热点访谈</a></li>
                  </ul>
                </li>
                <li class="nav-share-contain">
                  <div class="nav-share-links">
                    <i class="am-icon-wechat"></i>
                    <i class="am-icon-qq"></i>
                  </div>
                </li>
                <li class=""><a href="html/login.html" class="">登录</a></li>
                <li class=""><a href="html/register.html" class="">注册</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!--logo-->
    <div class="am-u-sm-5 am-u-end">
      <div class="m-logo">
        <a href=""><img src="<%=request.getContextPath()%>/dist/assets/images/logo1.png" alt=""></a>
      </div>
    </div>
  </div>
</div>
<script src="<%=request.getContextPath()%>/dist/assets/js/index/public.js" charset="utf-8"></script>