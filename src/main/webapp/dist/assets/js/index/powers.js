/**
 * questions js
 */

const power = {
    url: {
        search: function (powerName) {
            return "/powers/search/" + powerName;
        },
        searchByDepName: function (depName) {
            return "/powers/dep/" + depName;
        }
    },
    model: {
        item: function (obj, i) {
            return "<div class='am-panel am-panel-default'>" +
                " <div class='am-panel-hd'>" +
                "<h4 class=\"am-panel-title am-collapsed\" data-am-collapse=\"{parent: '#accordion', target: '#do-not-say-"+i+"'}\">\n" +
                obj.title +
                "  </h4>" +
                " </div>" +
                " <div id='do-not-say-" + i + "' class='am-panel-collapse am-collapse " + (i === 0 ? "am-in" : "") + "'>" +
                "  <div class='am-panel-bd'>" +
                "   <div class='am-panel-title am-margin-left-lg'>依据:</div>" +
                "   <div class='join-container'>" +
                obj.content +
                "   </div>" +
                "   <div class='am-panel-title am-margin-left-lg'><a href='/guides/detail/power/"+obj.title+"'>办事指南</a></div>" +
                "  </div>" +
                " </div>" +
                "</div>";
        },
        error: function (info) {

        }
    },
    func: {
        search: function () {
            const ipt = $("#id-ipt-search");
            const resDiv = $("div#accordion");
            $.ajax({
                url: power.url.search(ipt.val()),
                success: function (result) {
                    common.func.success(resDiv, result, power.model.item);
                },
                error: function (result) {
                    console.log("e:" + result.status);
                }
            })
        },
        dep_powers:function (depName) {
            const resDiv = $("div#accordion");

            $.ajax({
                url: power.url.searchByDepName(depName),
                success: function (result) {
                    const pages = $(".am-pagination li");
                    pages.addClass('am-disabled');
                    common.func.success(resDiv, result, power.model.item);
                },
                error: function (result) {
                    console.log("e:" + result.status);
                }
            });
        }
    }
};