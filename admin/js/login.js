$(function () {
    $('.input_sub').on('click', function (e) {
        e.preventDefault()
        console.log(123);

        var username = $('.input_txt').val()
        var password = $('.input_pass').val()
        if ($.trim(username) == '' || $.trim(password) == '') {
            alert('帐号或者密码不能为空')
            return
        }
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                if (res.code == 200) {
                    //跳转首页
                    window.location.href = './index.html';
                } else {
                    alert(res.msg);
                }
            }
        })
    })
})