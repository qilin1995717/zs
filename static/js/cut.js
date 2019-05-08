   
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

