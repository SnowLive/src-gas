/**
 * officials js
 */
const official = {
    url: {
        search: function (officialName) {
            return "/officials/search/" + officialName;
        },
        searchByDepName: function (depName) {
            return "/officials/dep/" + depName;
        }
    },
    model: {
        item: function (obj) {
            return "<li>" +
                " <a href='/officials/detail/"+obj.officialId+"'>" +
                "  <img class='am-thumbnail' src='"+obj.picture+"'/>"+obj.realName +
                " </a>" +
                "</li>";
        },
        error: function (info) {

        },
        list_item: function (obj, i) {
        }

    },
    func: {
        search: function () {
            const ipt = $("#id-ipt-search");
            const resDiv = $("div#accordion");
            $.ajax({
                url: official.url.search(ipt.val()),
                success: function (result) {
                    common.func.success(resDiv, result, official.model.item);
                },
                error: function (result) {
                    console.log("e:" + result.status);
                }
            })
        },
        dep_officials: function (depName, index) {
            const resDiv = $("#id-div-tab-content ul");
            $.ajax({
                url: official.url.searchByDepName(depName),
                success: function (result) {
                    common.func.success(resDiv, result, official.model.item);
                },
                error: function (result) {
                    console.log("e:" + result.status);
                }
            });
        }
    }
};