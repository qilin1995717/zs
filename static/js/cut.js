   
var myVar1 = setInterval(function(){ countTime() }, 1000);
function countTime() { 
			 //获取当前时间  
			var date =new Date(); 
			var now = date.getTime();
             //设置截止时间  
             var str="2019/5/26 23:59:59";
             var endDate = new Date(str); 
             var end = endDate.getTime();
             //时间差  
             var leftTime = end-now; 
             //定义变量 d,h,m,s保存倒计时的时间  
             var d,h,m,s;  
             if (leftTime>=0) {  
                 d = Math.floor(leftTime/1000/60/60/24);  
                 h = Math.floor(leftTime/1000/60/60%24);  
                 m = Math.floor(leftTime/1000/60%60);  
                 s = Math.floor(leftTime/1000%60);                     
             }else{
				 document.getElementById("hd1").innerHTML="优惠已截止";
			 }  
             //将倒计时赋值到div中  
             document.getElementById("t1").innerHTML = d+"天";  
             document.getElementById("s1").innerHTML = h+"时";
             document.getElementById("f1").innerHTML = m+"分";  
             document.getElementById("m1").innerHTML = s+"秒"; 
 } 
 var myVar2 = setInterval(function(){ countTime2() }, 1000);
 function countTime2() { 
 			 //获取当前时间  
 			var date =new Date(); 
 			var now = date.getTime();
              //设置截止时间  
              var str="2019/6/16 23:59:59";
              var endDate = new Date(str); 
              var end = endDate.getTime();
              //时间差  
              var leftTime = end-now; 
              //定义变量 d,h,m,s保存倒计时的时间  
              var d,h,m,s;  
              if (leftTime>=0) {  
                  d = Math.floor(leftTime/1000/60/60/24);  
                  h = Math.floor(leftTime/1000/60/60%24);  
                  m = Math.floor(leftTime/1000/60%60);  
                  s = Math.floor(leftTime/1000%60);                     
              } else{
				 document.getElementById("hd2").innerHTML="优惠已截止";
			 }  
              //将倒计时赋值到div中  
              document.getElementById("t2").innerHTML = d+"天";  
              document.getElementById("s2").innerHTML = h+"时";
              document.getElementById("f2").innerHTML = m+"分";  
              document.getElementById("m2").innerHTML = s+"秒"; 
  } 
   var myVar3 = setInterval(function(){ countTime3() }, 1000);
  function countTime3() { 
  			 //获取当前时间  
  			var date =new Date(); 
  			var now = date.getTime();
               //设置截止时间  
               var str="2019/7/7 23:59:59";
               var endDate = new Date(str); 
               var end = endDate.getTime();
               //时间差  
               var leftTime = end-now; 
               //定义变量 d,h,m,s保存倒计时的时间  
               var d,h,m,s;  
               if (leftTime>=0) {  
                   d = Math.floor(leftTime/1000/60/60/24);  
                   h = Math.floor(leftTime/1000/60/60%24);  
                   m = Math.floor(leftTime/1000/60%60);  
                   s = Math.floor(leftTime/1000%60);                     
               }  else{
				 document.getElementById("hd3").innerHTML="优惠已截止";
			 } 
               //将倒计时赋值到div中  
               document.getElementById("t3").innerHTML = d+"天";  
               document.getElementById("s3").innerHTML = h+"时";
               document.getElementById("f3").innerHTML = m+"分";  
               document.getElementById("m3").innerHTML = s+"秒"; 
   } 
document.getElementById("bm").onclick=function(){
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	if(name === "" && phone === ""){
		alert("姓名或手机号为空请输入");
	}else if(phone.length < 11){
		alert("请输入正确的手机号")
	}
	else{
		console.log(name);
		console.log(phone);
	 var url = "mailto:317283133@qq.com ?subject=" + name + "&body=" + phone;
	 console.log(url)
    document.getElementById("bm").setAttribute("href", url);
	}
}
$(function(){
		$("#xq").click(function() {
			$("#xzxq").toggle();
		});
	});
$(function(){
	$('#xzxq li').click(function(){
		$("#xzxq").toggle();
		$('#xq').val($(this).text());
	})
})	

$(function(){
	 var url = location.href;
        var timestamp="";
        var signature = "";
        var title = document.title;
            var shareData = {  
                "imgUrl" : "http://m.yousaychina.cn/zs/static/images/xiaoxiang%20.png",    // 分享显示的缩略图地址 ,根据自己情况而定
                "link" : "http://m.yousaychina.cn/zs/",    // 分享地址  
                "desc": "优斯暑假班火热报名中...",   // 分享描述  
                "title": "优斯暑假班火热报名中",   // 分享标题  
                success : function () {    
                  
                    // 分享成功可以做相应的数据处理  
                  
                    //alert("分享成功"); }   
                }};
            function init()
            {
                var parms = { url: url };
                $.ajax({
                    type: "POST", 
                    url: "GEThttps://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=ACCESS_TOKEN",//后台接口
                    data: parms, //可选参数
                    dataType: "json",
                    success: function(data){ 
                        timestamp=data.timestamp;
                        signature=data.signature;
                        //alert(timestamp)
                        initwx(timestamp, signature);
                    } //可选参数
                });
                
                
                
            }
            $(function () {
                init();
            });
            function initwx(timestamp, signature) {
                wx.config({
                    debug: false, // 
                    appId: 'wxb82a9e94d41a92c7', // 公众号的唯一标识 
                    timestamp: timestamp, //生成签名的时间戳 
                    nonceStr: 'GDOU', //生成签名的随机串
                    signature: signature,// 
                    jsApiList: ['onMenuShareTimeline', // 
                               'onMenuShareAppMessage'] // 
                });
                wx.checkJsApi({
                    jsApiList: [
                        'onMenuShareTimeline','onMenuShareAppMessage'
                    ]
                });
                wx.ready(function () {
                    wx.onMenuShareTimeline(shareData);//分享到朋友圈
					wx.onMenuShareAppMessage(shareData);//分享给朋友
                });
            }
})