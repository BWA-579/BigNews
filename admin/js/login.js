$(function () {
    $('.input_sub').on('click', function (e) {
        e.preventDefault()

        var username = $('.input_txt').val()
        var password = $('.input_pass').val()
        if ($.trim(username) == '' || $.trim(password) == '') {
            $('.modal').modal('show')
            $('.modal-body').text('帐号或者密码不能为空,请重新输入...')
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
                console.log(res);
                $('.modal').modal('show')
                $('.modal-body p').text(res.msg)
                if (res.code == 200) {
                    //跳转首页
                    $('.modal').on('hidden.bs.modal', function (e) {
                        localStorage.setItem('token', res.token)
                        window.location.href = './index.html';
                    })
                }
            }
        })
    })
})