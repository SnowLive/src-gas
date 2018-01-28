<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gas XX 部门政务办理网站</title>
  <jsp:include page="common/css.jsp"/>
  <link rel="stylesheet" href="<%=request.getContextPath()%>/dist/assets/css/index.min.css"/>
</head>

<body>

<div class="layout">
  <!--===========layout-header================-->
  <jsp:include page="common/header.jsp"/>
  <!--===========选项================-->
  <div class="layout-container">
    <div class="index-page">
      <div data-am-widget="tabs" class="am-tabs am-tabs-default">
        <div class="am-tabs-bd">
          <div data-tab-panel-0 class="am-tab-panel am-active">
            <div class="index-banner">
              <div class="index-mask">
                <div class="container">
                  <div class="am-g">
                    <div class="am-u-md-10 am-u-sm-centered">
                      <h1 class="slide_simple--title">信息公示</h1>
                      <p class="slide_simple--text am-text-center">
                        为了保障公民、法人和其他组织依法获取政府信息，提高政府工作的透明度，促进依法行政，<br>
                        充分发挥政府信息对人民群众生产、生活和经济社会活动的服务作用制定。
                      </p>
                      <div class="slide_simple--buttons">
                        <a href="/init/info">
                          <button type="button" class="am-btn am-btn-danger">了解更多</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-tab-panel-1 class="am-tab-panel ">
            <div class="index-banner">
              <div class="index-mask">
                <div class="container">
                  <div class="am-g">
                    <div class="am-u-md-10 am-u-sm-centered">
                      <h1 class="slide_simple--title">网上办事</h1>
                      <p class="slide_simple--text am-text-center">
                        为公众提供一快捷高效的办事场所,拒绝无休止的等待,提升政府服务质量,<br>急公众之所急,向公众之所想,尽可能简化办事流程.
                      </p>
                      <div class="slide_simple--buttons">
                        <a href="/init/onlinedeal">
                          <button type="button" class="am-btn am-btn-danger">了解更多</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-tab-panel-2 class="am-tab-panel ">
            <div class="index-banner">
              <div class="index-mask">
                <div class="container">
                  <div class="am-g">
                    <div class="am-u-md-10 am-u-sm-centered">
                      <h1 class="slide_simple--title">在线申报</h1>
                      <p class="slide_simple--text am-text-center">
                        公众只需了解需要申报的项目,准备必要的申报素材；公职人员只要准备一台电脑或一部手机，<br>在有网络的地方即可办公，提升办事效率。
                      </p>
                      <div class="slide_simple--buttons">
                        <a href="/init/onlinedeclare">
                          <button type="button" class="am-btn am-btn-danger">了解更多</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-tab-panel-3 class="am-tab-panel ">
            <div class="index-banner">
              <div class="index-mask">
                <div class="container">
                  <div class="am-g">
                    <div class="am-u-md-10 am-u-sm-centered">
                      <h1 class="slide_simple--title">公众参与</h1>
                      <p class="slide_simple--text am-text-center">
                        公众是这个城市，这个国家的主人，有责任有义务，也有权利参与到这个城市，<br>这个国家的建设中来。
                      </p>
                      <div class="slide_simple--buttons">
                        <a href="/init/join">
                          <button type="button" class="am-btn am-btn-danger">了解更多</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="am-tabs-nav am-cf index-tab">
          <li class="am-active">
            <a href="[data-tab-panel-0] am-g">
              <div class="am-u-md-3 am-u-sm-3 am-padding-right-0">
                <i class="am-icon-cog"></i>
              </div>
              <div class="school-item-right am-u-md-9 am-u-sm-9 am-text-left">
                <strong class="promo_slider_nav--item_title">信息公开</strong>
                <p class="promo_slider_nav--item_description">Supervise 接受公众监督</p>
              </div>
            </a>
          </li>
          <li class="a">
            <a href="[data-tab-panel-1] am-g">
              <div class="am-u-md-3 am-u-sm-3 am-padding-right-0">
                <i class="am-icon-lightbulb-o"></i>
              </div>
              <div class="school-item-right am-u-md-9 am-u-sm-9 am-text-left">
                <strong class="promo_slider_nav--item_title">网上办事</strong>
                <p class="promo_slider_nav--item_description">Simplify 简化办事流程</p>
              </div>
            </a>
          </li>
          <li class="">
            <a href="[data-tab-panel-2] am-g">
              <div class="am-u-md-3 am-u-sm-3 am-padding-right-0">
                <i class="am-icon-line-chart"></i>
              </div>
              <div class="school-item-right am-u-md-9 am-u-sm-9 am-text-left">
                <strong class="promo_slider_nav--item_title">在线申报</strong>
                <p class="promo_slider_nav--item_description">Efficient 提高办事效率</p>
              </div>
            </a>
          </li>
          <li class="">
            <a href="[data-tab-panel-3] am-g">
              <div class="am-u-md-3 am-u-sm-3 am-padding-right-0">
                <i class="am-icon-hourglass-end"></i>
              </div>
              <div class="school-item-right am-u-md-9 am-u-sm-9 am-text-left">
                <strong class="promo_slider_nav--item_title">公众参与</strong>
                <p class="promo_slider_nav--item_description">Partake 共同提升服务水平</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="section--header">
        <h2 class="section--title">核心优势</h2>
        <p class="section--description">
          全球领先HTML5企业移动化解决方案供应商，由前微软美国总部IE浏览器核心研发团队成员及移动互联网行业专家在美国西雅图创立
          <br>获得了微软创投的扶持以及晨兴资本、IDG资本、天创资本等国际顶级风投机构的投资。
        </p>
      </div>

      <!--index-container start-->
      <div class="index-container">
        <div class="am-g">
          <div class="am-u-md-3">
            <div class="features_item">
              <img src="<%=request.getContextPath()%>/dist/assets/images/index/f01.jpg" alt="">
              <h3 class="features_item--title">简单的适配过程</h3>
              <p class="features_item--text">
                用户可快速学习适配开发，通过丰富的组件库完成页面功能的移动化适配。
              </p>
            </div>
          </div>
          <div class="am-u-md-3">
            <div class="features_item">
              <img src="<%=request.getContextPath()%>/dist/assets/images/index/f02.jpg" alt="">
              <h3 class="features_item--title">丰富移动组件库</h3>
              <p class="features_item--text">
                Enterplorer Studio内置丰富的移动组件，大大提升了开发效率。
              </p>
            </div>
          </div>
          <div class="am-u-md-3">
            <div class="features_item">
              <img src="<%=request.getContextPath()%>/dist/assets/images/index/f03.jpg" alt="">
              <h3 class="features_item--title">可视化界面设计</h3>
              <p class="features_item--text">
                整个适配过程可视化，集成手机模拟器，可以快速的开发调试。
            </div>
          </div>
          <div class="am-u-md-3">
            <div class="features_item">
              <img src="<%=request.getContextPath()%>/dist/assets/images/index/f04.jpg" alt="">
              <h3 class="features_item--title">零秒部署</h3>
              <p class="features_item--text">
                无需部署，实时上传实时呈现，复用现有系统流程及数据
              </p>
            </div>
          </div>
        </div>

        <div class="index-more">
          <button type="button" class="am-btn am-btn-secondary">MORE&nbsp;&nbsp;>></button>
        </div>
      </div>
      <!--index-container end-->
    </div>
  </div>
</div>

<!--promo_detailed start-->
<div class="promo_detailed">
  <div class="promo_detailed-container">
    <div class="container">
      <div class="am-g">
        <div class="am-u-md-6">
          <ul class="promo_detailed--list">
            <li class="promo_detailed--list_item">
                <span class="promo_detailed--list_item_icon">
                  <i class="am-icon-diamond"></i>
                </span>
              <dl>
                <dt>多层次的用户管理功能</dt>
                <dd>
                  支持用户的添加和导入，与AD可以进行紧密的整合，实时同步最新的用户信息，从而方便对用户进行管理。
                </dd>
              </dl>
            </li>
            <li class="promo_detailed--list_item">
                <span class="promo_detailed--list_item_icon">
                  <i class="am-icon-dollar" style="margin-left: 15px;"></i>
                </span>
              <dl>
                <dt>丰富的日志报表系统</dt>
                <dd>
                  提供实时监控平台，日志和报告系统，帮助管理员对系统的整体情况有全面的了解。
                </dd>
              </dl>
            </li>
            <li class="promo_detailed--list_item">
                <span class="promo_detailed--list_item_icon">
                  <i class="am-icon-bank" style="margin-left: 10px;"></i>
                </span>
              <dl>
                <dt>丰富的应用程序管理</dt>
                <dd>
                  支持在线应用、适配应用、本地应用等多种应用类型。使用户可以最便捷的获取企业的各种应用。
                </dd>
              </dl>
            </li>
          </ul>
        </div>

        <div class="am-u-md-6">
          <div class="promo_detailed--cta">
            <div class="promo_detailed--cta_wrap">
              <div class="promo_detailed--cta_text">
                提供设备的远程锁定，擦除等功能。在设备出现遗失的情况下可以最大程度的保护企业的信息不被泄露。
              </div>
              <div class="promo_detailed--cta_footer">
                <button type="button" class="am-btn am-btn-danger">MORE&nbsp;&nbsp;>></button>
              </div>
            </div>
            <div class="promo_detailed-img am-show-sm-only"
                 style="background-image: url('<%=request.getContextPath()%>/dist/assets/images/index/promo_detailed_bg.jpg');"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="promo_detailed-img am-hide-sm-only"
       style="background-image: url('<%=request.getContextPath()%>/dist/assets/images/index/promo_detailed_bg.jpg');"></div>
</div>
<!--promo_detailed end-->

<div class="section" style="border-bottom: 1px solid #e9e9e9;">
  <div class="container">
    <div class="section--header">
      <h2 class="section--title">我们的服务</h2>
      <p class="section--description">
        全球领先HTML5企业移动化解决方案供应商，由前微软美国总部IE浏览器核心研发团队成员及移动互联网行业专家在美国西雅图创立
        <br>获得了微软创投的扶持以及晨兴资本、IDG资本、天创资本等国际顶级风投机构的投资。
      </p>
    </div>

    <!--index-container start-->
    <div class="index-container">
      <div class="am-g">
        <div class="am-u-md-3">
          <div class="service_item">
            <i class="service_item--icon am-icon-diamond"></i>
            <h3 class="service_item--title">多页面工作</h3>
            <div class="service_item--text">
              <p>标签栏可切换，不必为了新内容而被迫跳转界面，多项工作内容并行处理</p>
            </div>
            <footer class="service_item--footer"><a href="#" class="link -blue_light">Learn More>></a></footer>
          </div>
        </div>

        <div class="am-u-md-3">
          <div class="service_item">
            <i class="service_item--icon am-icon-user"></i>
            <h3 class="service_item--title">统一入口</h3>
            <div class="service_item--text">
              <p>集成企业内网所有资源，OA、CRM、ERP、邮件系统，单点登录，无需重复输入密码</p>
            </div>
            <footer class="service_item--footer"><a href="#" class="link -blue_light">Learn More>></a></footer>
          </div>
        </div>

        <div class="am-u-md-3">
          <div class="service_item">
            <i class="service_item--icon am-icon-umbrella"></i>
            <h3 class="service_item--title">一键直达</h3>
            <div class="service_item--text">
              <p>办公流程太多，搜索框输入（或语音输入），可以快速找到核心内容</p>
            </div>
            <footer class="service_item--footer"><a href="#" class="link -blue_light">Learn More>></a></footer>
          </div>
        </div>

        <div class="am-u-md-3">
          <div class="service_item">
            <i class="service_item--icon am-icon-briefcase"></i>
            <h3 class="service_item--title">语音助手</h3>
            <div class="service_item--text">
              <p>不方便打字时，可以直接用语音输入想要的内容，使您的双手得到解放</p>
            </div>
            <footer class="service_item--footer"><a href="#" class="link -blue_light">Learn More>></a></footer>
          </div>
        </div>
      </div>
    </div>
    <!--index-container end-->
  </div>
</div>

<div class="section promo_banner-container">
  <!--index-container start-->
  <div class="promo_banner-box">
    <div class="container">
      <h2 class="promo_banner--title">期待您的加入</h2>
      <p class="promo_banner--text">
        我们成立了三年，正用自己的技术力量一步一步改变世界。
        <br> 我们开创了中国首个开源HTML5跨屏前端框架、可见即可得的IDE、无障碍网页我们是全球独一无二的
        <br> 云适配技术，我们的目标是打造极致的网页体验。
        <footer class="promo_banner--footer">
          <button type="button" class="am-btn am-btn-secondary">MORE>></button>
        </footer>
    </div>
  </div>
  <!--index-container end-->
</div>

<!--customer-logo start-->
<div class="customer-logo">
  <div class="container">
    <div class="am-g">
      <div class="am-u-md-2 am-u-sm-4 customer-box">
        <a href="#">
          <img class="normal-logo"
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_Microsoft.png" alt=""/>
          <img class="am-active" alt=""
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_Microsoft_active.png" alt=""/>
        </a>
      </div>
      <div class="am-u-md-2 am-u-sm-4 customer-box">
        <a href="#">
          <img class="normal-logo" src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_qhdx.png"
               alt=""/>
          <img class="am-active"
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_qhdx_active.png" alt=""/>
        </a>
      </div>
      <div class="am-u-md-2 am-u-sm-4 customer-box">
        <a href="#">
          <img class="normal-logo" src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_gmw.png"
               alt=""/>
          <img class="am-active"
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_gmw_active.png" alt=""/>
        </a>
      </div>
      <div class="am-u-md-2 am-u-sm-4 customer-box">
        <a href="#">
          <img class="normal-logo" src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_gov.png"
               alt=""/>
          <img class="am-active"
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_gov_active.png" alt=""/>
        </a>
      </div>
      <div class="am-u-md-2 am-u-sm-4 customer-box">
        <a href="#">
          <img class="normal-logo" src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_jl.png"
               alt=""/>
          <img class="am-active"
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_jl_active.png" alt=""/>
        </a>
      </div>
      <div class="am-u-md-2 am-u-sm-4 customer-box">
        <a href="#">
          <img class="normal-logo" src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_hx.png"
               alt=""/>
          <img class="am-active"
               src="<%=request.getContextPath()%>/dist/assets/images/index/customer_logo_hx_active.png" alt=""/>
        </a>
      </div>
    </div>
  </div>
</div>
<!--customer-logo end-->


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
              <br> and we’ll get back soon.</p>
            <button type="button" class="am-btn am-btn-secondary">Start Writing</button>
          </div>
        </div>
        <div class="am-u-md-4">
          <div class="contact_card">
            <i style="color:#59bcdb" class="contact_card--icon am-icon-map-marker"></i>
            <strong class="contact_card--title">Our Address</strong>
            <p class="contact_card--text">Come visit us at <br> <strong>Stock Building, New York,</strong> <br> NY 93459
            </p>
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
</body>

<jsp:include page="common/js.jsp"/>
</html>