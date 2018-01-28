/**
 * declares js
 */

const declare = {

    url: {
        search: function (declare) {
            return "/guides/search/" + declare;
        },
        add: '/declares/add',
    },
    model: {
        item: function (obj) {
            return "<div class= 'am-u-lg-4 am-u-md-6 am-u-end '>" +
                " <div class= 'article '>" +
                "  <div class= 'article-img '>" +
                "  </div>" +
                "  <div class= 'article-header '>" +
                "   <h2><a href= '/declares/guide/" + obj.guideId + " ' title='" + obj.title + "' rel= ' '>在线申报：" + obj.title.substr(0, 10) + "...</a> " +
                "   </h2> " +
                "  </div> " +
                "  <div class= 'article--footer '> " +
                "   <a href= '/declares/guide/ " + obj.guideId + "' class= 'link'>Read More</a> " +
                "  </div> " +
                " </div> " +
                "</div>";
        },
        error: function (info) {

        }
    },
    func: {
        search: function () {
            const ipt = $("#id-ipt-search");
            const resDiv = $("body > div > div:nth-child(4) > div > div.news-contaier > div > div");
            $.ajax({
                url: declare.url.search(ipt.val()),
                success: function (result) {
                    const pages = $(".am-pagination li");
                    pages.addClass('am-disabled');
                    common.func.success(resDiv, result, declare.model.item);
                },
                error: function (result) {
                    console.log("e:" + result.status);
                }
            })
        },
        add: function (powerId, publicId) {
            if (publicId === '') {
                alert('请先登录系统,后再进行在线申请!');
                window.location.href = public.url.to_login;
                return;
            }
            const title = $('#id-ipt-title').val();
            const content = $('#id-ta-content').val();
            console.log(powerId + ':' + title + ':' + content);
            const url = declare.url.add;
            const fileId = 'file';
            const dataType = 'json';
            const data = {
                'powerId': powerId,
                'publicId': publicId,
                'title': title,
                'content': content
            };
            const bool = powerId !== '' && publicId !== '' && title !== '' && content !== '';
            // common.func.add(url, fileId, dataType, data);
            if (bool) {
                $.ajaxFileUpload({
                    url: url,
                    secureuri: false,
                    fileElementId: fileId,
                    dataType: dataType,
                    data: data,
                    success: function (result) {
                        alert(result.msg);
                        if (result.state === 1) {
                            console.log('msg:' + result.msg);
                            window.location.href = public.url.detail;
                        }
                        else {
                            console.log('msg:' + result.msg);
                            window.location.reload();
                        }
                        console.log(result);
                    },
                    error: function (result) {
                        alert('添加失败');
                        console.log('error' + result.state);
                    }
                });
            } else alert("请填入必要数据");
        },
    }
};