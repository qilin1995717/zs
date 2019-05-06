//表单数据
function formData() {
  return {
    name     : $('.name').val(),
    mobile   : $('.phone').val(),
    remark   : $('.remark').val() || '无',
    grade    : $('#selectNianji').val(),
    course   : $('#selectKemu').val(),
    channel  : location.search.split('=')[1] || 'default'
  }
}

//提交数据
(function submit(){
  $('.submit').on('click',function() {
    var userData = formData();
    //信息验证
    for(var key in userData){
      if(userData[key] === ''){
        alert('请完善信息')
        return
      }
      if(!/^((1[3-8][0-9])+\d{8})$/.test($('.phone').val())) {
        alert('手机格式不对')
        return
      }
    }
    $.post(`http://api.dafenke.cn/apply?channel=${userData.channel}`,userData,function(res){
        alert(res.message)
    })
  })
})()

