<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 申报入口</title>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/news.min.css"/>
  <jsp:include page="common/css.jsp"/>
  <%--<link rel="stylesheet" href="http://beta.amazeui.org/dist/css/amazeui.css"/>--%>
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
  <div class="section news-section">
    <div class="container">
      <!--guide -->
      <div class="am-u-md-12">
        <div class="comments">
          <div class="comments">
            <h2 class="comments--title article "><strong
                    class="am-margin-right-lg am-text-lg">指南:</strong>${result.data[0].title}</h2>
            <ul class="comments_list">
              <li class="comment">
                <header class="comment--header">
                  <figure class="comment--userpic"><img
                          src="<%=request.getContextPath()%>/dist/assets/images/news/av01.jpg" alt=""></figure>
                  <strong class="comment--username"><span>Official</span></strong>
                </header>
                <div class="comment--content">
                  <p>
                    ${result.data[0].content}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- declare's entry -->
      <div class="am-u-md-12">
        <div class="comments">
          <div class="comments">
            <h2 class="comments--title article "><strong
                    class="am-margin-right-lg am-text-lg">申报信息填写</strong>${fn:substringBefore(result.data[0].title,"办事指南" )}
            </h2>
            <ul class="comments_list">
              <li class="comment">
                <div class="comment_form">
                  <form class="am-form am-form-horizontal">
                    <div class="am-form-group">
                      <div class="am-g" >
                        <div class="am-u-md-6" >
                          <input id="id-ipt-title" type="text" placeholder="申报事项(请输入50字左右的标题)" pattern="">
                        </div>
                        <div class="am-u-md-6">
                          <input id="id-ipt-rname" disabled type="text" value="${sessionScope.user.realName}"
                                 placeholder="真实姓名">
                        </div>
                      </div>
                      <div class="am-g">
                        <textarea id="id-ta-content" name="comment" cols="30" rows="10" placeholder="具体内容"></textarea>
                      </div>
                      <!--文件上传-->
                      <div class="am-g am-margin-top-lg">
                        <div class="am-upload" id="my-upload">
                          <input id="file" name="file" type="file" multiple data-max-file-count="1">
                        </div>
                      </div>
                      <div class="comment-form-footer">
                        <button type="button"
                                onclick="declare.func.add('${result.data[0].powerId}','${sessionScope.user.publicId}')"
                                class="am-btn am-btn-secondary">确认提交
                        </button>
                      </div>
                    </div>
                  </form>
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
