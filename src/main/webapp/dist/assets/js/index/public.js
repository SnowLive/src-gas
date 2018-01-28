/**
 * public js
 */
const public = {
    url: {
        register: '/public/register',
        detail: '/public/detail',
        login: '/public/login',
        logout: '/public/logout',
        to_login:'/init/login',
    },
    model: {},
    func: {
        login: function () {
            const name = $('#doc-vld-name-2').val();
            const passwd = $('#doc-vld-pwd-1').val();
            console.log(name + ':' + passwd);
            const bool = (name !== '') && ( passwd !== '');
            if (bool) {
                $.ajax({
                    url: public.url.login,
                    method: 'post',
                    data: {
                        'name': name,
                        'passwd': passwd
                    },
                    success: function (obj) {
                        console.log(obj);
                        alert(obj.msg);
                        if (obj.state === 1) window.location.href = '/public/detail';
                    },
                    error: function (obj) {
                        console.log(obj.msg);
                    }
                });
            } else {
                alert("请正确填写数据");
            }

        },
        logout: function () {
            $.ajax({
                url: public.url.logout,
                method: 'post',
                success: function (obj) {
                    console.log(obj);
                    alert(obj.msg);
                    window.location.href = '/';
                },
                error: function (obj) {
                    console.log(obj.msg);
                }
            });
        },
        register: function () {
            const name = $('#doc-vld-name').val();
            const rname = $('#doc-vld-rname').val();
            const phone = $('#doc-vld-phone').val();
            const sex = $('input:radio:checked').val();
            const info = $('#doc-vld-info').val();
            const pic = $('#doc-vld-pic').val();
            const passwd = $('#doc-vld-pwd-1').val();
            const rpasswd = $('#doc-vld-pwd-2').val();
            //姓名,真实姓名,手机号
            console.log(name + ':' + passwd + ':' + rpasswd);
            const bool = name != '' && rname != '' && phone != '' && info != '' && (typeof sex != 'undefined') && (passwd === rpasswd ) && ( passwd !== '');
            const mdata = {
                'name': name,
                'rname': rname,
                'phone': phone,
                'sex': sex,
                'info': info,
                'passwd': passwd
            };
            console.info(mdata);
            console.info(bool);
            const fileId = 'file';
            if (bool) {
                console.log('in');
                $.ajaxFileUpload({
                    url: public.url.register,
                    secureuri: false,
                    fileElementId: fileId,
                    dataType: 'json',
                    data: mdata,
                    success: function (result) {
                        if (result.state === 1) {
                            alert('添加成功');
                        } else {
                            alert(result.msg);
                        }
                        console.log('resultCode:' + result.state);
                        console.log('msg:' + result.msg);
                        console.log('data:' + result.data);
                        console.table(result);
                    },
                    error: function (result) {
                        alert('添加失败');
                        console.log('error' + result.state);
                    }
                });
            } else alert('请正确输入数据');
        },
    }
};

