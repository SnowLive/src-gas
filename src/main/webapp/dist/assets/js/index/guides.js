/**
 * guides js
 */

const guide = {

    url: {
        search: function (guide) {
            return "/guides/search/" + guide;
        }
    },
    model: {
        item: function (obj) {
            return "<div class= 'am-u-lg-4 am-u-md-6 am-u-end '>" +
                " <div class= 'article '>" +
                "  <div class= 'article-img '>" +
                "  </div>" +
                "  <div class= 'article-header '>" +
                "   <h2><a href= '/guides/detail/" + obj.guideId + " ' rel= ' '>" + obj.title.substr(0, 14) + "...</a> " +
                "   </h2> " +
                "  </div> " +
                "  <div class= 'article--footer '> " +
                "   <a href= '/guides/detail/ " + obj.guideId + "' class= 'link'>Read More</a> " +
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
                url: guide.url.search(ipt.val()),
                success: function (result) {
                    const pages = $(".am-pagination li");
                    pages.addClass('am-disabled');
                    common.func.success(resDiv, result, guide.model.item);
                },
                error: function (result) {
                    console.log("e:" + result.status);
                }
            })
        },
    }
};