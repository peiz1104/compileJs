/*
* 防抖函数
*/
function debounce(func,wait,immediate){
  let context,timeout,args,result,timestamp;
  const later = function(){
    const last = +new Date() - timestamp;
    if(last<wait&&last>0){
      timeout = setTimeout(later,wait - last)
    }else{
      timeout = null;
      result = func.apply(context,args);
      context = args = null;
    }
  }
  return function(...argu){
    context = this;
    args = argu;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    if(!timeout) timeout = setTimeout(later,wait)
    if(immediate){
      result = func.apply(context,args);
      context = args = null;
    }
    return result;
  }
}
/*
* 截流函数
*/
function throttle(func,delay){
  let timeout, args,context;
  return function(...argu){
    args = argu;
    context = this;
    if(timeout) {
      clearTimeout(timeout);
      return;
    }
    timeout = setTimeout(()=>{
      func.apply(context,args);
      timeout = null;
      context = args = null;
    },delay)
  }
  
}
