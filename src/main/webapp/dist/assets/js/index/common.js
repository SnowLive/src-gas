/*公共方法*/
var common = {
    func: {
        /**
         * 显示无结果的返回值.
         */
        showNoResult: function () {
        },
        success: function (parentDiv, result, modelItem) {
            let resultItem = '';
            if (result.code == null) {
                result.data.forEach((obj, i) => {
                    resultItem += modelItem(obj, i);
                });
            } else resultItem = common.model.nodata();
            parentDiv.hide().html(resultItem).show(500);
        },
        add: function (url, fileId, dataType, data) {
            $.ajaxFileUpload({
                url: url,
                secureuri: false,
                fileElementId: fileId,
                dataType: dataType,
                data: data,
                success: function (result) {
                    alert('添加成功');
                    console.log('resultCode:' + result.state);
                    console.log('url:' + result.msg);
                    console.table(result);
                },
                error: function (result) {
                    alert('添加失败');
                    console.log('error' + result.state);
                }
            });
        }

    },
    model: {
        nodata: function () {
            return "<div class='am-pagination am-alert-danger am-round am-text-xl am-text-center'><span>数据未查询到.</span></div>";
        }
    }
}