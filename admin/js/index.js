$(function () {
    $.ajax({
        type: 'get',
        url: BigNew.user_info,
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            if (res.code == 200) {
                $('.user_info img').attr('scr', res.data.userPic)
                $('.user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
                $('.user_center_link img').attr('scr', res.data.userPic)
            }
        }
    })

    $('.user_center_link .logout').on('click', function () {
        localStorage.removeItem('token')
        window.location.href = './login.html'
    })

})