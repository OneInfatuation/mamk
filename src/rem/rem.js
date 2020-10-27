// // rem配置
// (function(document,window){
//     var document = document.documentElement;//声明变量 获取HTML根元素
//     // orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件
//     // onresize 事件会在窗口或框架被调整大小时发生
//     // 在window里面找看有没有orientationchange事件，如果有，就使用这个事件。如果没有，就使用resize事件
//     var resizeEvent = "orientationchange" in window ? "orientationchange":"resize";//配置兼容
//     var recalc = function(){
//         // clientWidth：元素内部的高度
//         var clientWidth = document.clientWidth;
//         if(!clientWidth){//容错判断 假如没有找到，就不执行
//             return;
//         }
//         // 这里的根元素的font-size默认为20px；
//         // 用元素内部的宽度除以设计稿的宽度
//         document.style.fontSize = 20*(clientWidth / 320) + "px";
//     }
//     if(!document.addEventListener){//容错判断 （事件监听）
//         return;
//     }
//     // window事件监听 resizeEvent变量里面的事件，执行recalc函数(动态计算rem)
//     window.addEventListener(resizeEvent,recalc,false);
//     // 文档事件监听  DOMContentLoaded事件 执行recalc函数(动态计算rem)
//     // 当初始的 HTML 文档被完全加载和解析完成之后，
//     // DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。
//     document.addEventListener('DOMContentLoaded',recalc,false);
// })(document,window)


function rem(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/3.2+'px'
}
rem()
window.onresize=rem