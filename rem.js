!function (x) {
  function w() {
    var v, u, t, tes, s = x.document, r = s.documentElement, a = r.getBoundingClientRect().width;
    if (!v && !u) {
      var n = !!x.navigator.appVersion.match(/AppleWebKit.*Mobile.*/);
      v = x.devicePixelRatio;
      tes = x.devicePixelRatio;
      v = n ? v : 1, u = 1 / v
    }
    if (a >= 640) {
      r.style.fontSize = "40px"
    } else {
      if (a <= 320) {
        r.style.fontSize = "20px"
      } else {
        r.style.fontSize = a / 320 * 20 + "px"
      }
    }
  }
  x.addEventListener("resize", function () { w() });
  w()
}(window);

// js计算
(function(doc,win){
 var docEl = doc.documentElement,
     resizeEvt = 'orientationchange' in win ? 'orientationchange':'resize',
     recalc = funtion(){
      var clientWidth = win.clientWidth
      if(!clientWidth) return
       if(clientWidth>=750) {
        docEl.style.fontSize='100px'
       }else{
        docEl.style.fontSize = 100*(750/clientWidth)+'px'
       }
     }
  if(!doc.addEventListener) return
  win.addEventListener(resizeEvt,recalc,false)
  doc.addEventListener('DOMContentLoaded',recalc,false)
})(document,window)

