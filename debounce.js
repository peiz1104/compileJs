/*
* 防抖函数
*/
function debounce1(func,wait,immediate){
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
* 防抖函数2
*/
function debounce2(func,delay){
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
/*
* 截流1
*/
function throttle1(func,delay){
  let args,context;
  let valid = true;
  return function(...argu){
   if(!valid) return false;
    valid = false;
    args = argu;
    context = this;
    setTimeout(()=>{
      func.apply(context,args);
      valid = true;
      context = args = null;
    },delay)
  }
}
/**
* 截流2
*/
function throttle2(func,delay){
  let timeout,args,context;
  return function(...argu){
    if(!timeout){
      args = argu;
      context = this;
      timeout = setTimeout(()=>{
        func.apply(context,args);
        args = context = null;
        timeout = null;
      },delay)
    }
  }
}
