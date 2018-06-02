var result=`
*{
    margin:0;
    padding:0;
    transition:all 1s;
  }
body{
   dispaly:flex;
   height:100vh;
   flex-direction:column;
 } 
  #code{
    border:1px solid red;
    background-color:rgb(222,222,222);
    overflow:auto;
    flex:auto;
    height:50%;
  }
  .wrapper{
    flex:auto;
    height:50%;
    background-color:rgb(254,228,51);
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .animal{
    width:370px;
    height:181px;
    position:relative;
  }
  .nose{
    border:10px solid;
    border-radius:50%;
    border-color: black transparent transparent;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:29px;
  }
  .eyes{
    position:absolute;
    width:46px;
    height:46px;
    background-color:rgb(46,46,46);
    border:2px solid black;
    border-radius:50%;
  }
  .eyes:before{
    content:'';
    position:absolute;
    border-radius:50%;
    width:24px;
    height:22px;
    background-color:white;
    border:2px solid rgb(8,8,8);
    top:3px;
    left:3px;
  }
  .eyes.left{
    right:50%;
    margin-right:75px;

  }
  .eyes.right{
    left:50%;
    margin-left:75px;
  }
  .face{
    position:absolute;
    width:66px;
    height:66px;
    border:2px solid black;
    background-color:rgb(252,13,28);
    top:86px;
    border-radius:50%;
  }
  .face.left{
    right:50%;
    margin-right:95px;
  }
  .face.right{
    left:50%;
    margin-left:95px;
  }
  .upperlip.left{
    z-index:3;
    position:absolute;   
    width:60px;
    height:20px;
    border:3px solid black;
    border-bottom-left-radius:35px 25px;
    border-top:none;
    border-right:none;
    right:50%;
    transform:translateX(-50%);
    transform:rotate(-25deg);
    top:54px;
    background:rgb(254,228,51);
  }
  .upperlip.right{
    z-index:3;
    position:absolute;
    width:60px;
    height:20px;
    border:3px solid black;
    border-bottom-right-radius:35px 25px;
    border-top:none;
    border-left:none;
    transform:rotate(25deg);
    left:50%;
    transform:tranalateX(-50%);
    top:54px;
    background:rgb(254,228,51);
  }
  .lowerlipw{
    position:absolute;
    bottom:0;
    right:50%;
    transform:translateX(50%);
    height:120px;
    overflow:hidden;
    width:100px;
  }
  .lowerlip{
    position:absolute;
    bottom:0;
    width:100px;
    height:600px;
    border:2px solid black;
    border-radius:900px/2800px;
    background:rgb(155,0,10);
    overflow:hidden; 
  }
  .lowerlip:before{
    content:'';
    position:absolute;
    width:100px;
    height:400px;
    background:rgb(255,72,95);
    border-radius:200px/170px;
    border:1px solid black;
    bottom:-310px;
  }
`
!function (){
  let n=0;
  let duration = 50
  dompage = document.querySelector('#code');
  setTimeout(function fn(){
  n++;
  dompage.innerHTML = result.slice(0,n);
  dompage.scrollTop = dompage.scrollHeight;
  styleType.innerHTML = result.slice(0,n);
  if(n < result.length){
    setTimeout(fn,duration);
  }
},duration)
}.call()
console.log('dededede')
$('.control').on('click','button',function(e){
   var $button = $(e.currentTarget);
   var speed = $button.attr('data-speed');
   console.log(speed)
   $button.addClass('active').siblings('.active').removeClass('active')
   switch (speed) {
     case 'slow':
     duration =100; 
     break;
     case 'middle':
     duration =50; 
     break;
     case 'fast':
     duration =10; 
     break;
   }
})