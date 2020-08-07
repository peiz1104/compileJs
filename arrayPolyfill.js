// 1、数组的map方法
function map(array,fn){
 if(Object.prototype.toString.call(array)!=='[object Array]') throw TypeError(it + ' is not a typed array!');
 var length = array.length;
 var result = [];
 
 while(length--){
  result[length] = fn(array[length],length,array)
 }
 return result
}

// 2、数组的forEach方法

function forEach(array,fn){
 if(Object.prototype.toString.call(array)!=='[object Array]') throw TypeError(it + ' is not a typed array!');
 var length = array.length;
 while(length--){
  fn(array[length],length,array)
 }
}

// 3、数组的some方法
function some(array,fn){
 if(Object.prototype.toString.call(array)!=='[object Array]') throw TypeError(it + ' is not a typed array!');
 for(var i = 0;i<array.length;i++){
  if(fn(array[i],i,array)) return true
 }
 return false
}

// 4、数组的every方法
function every(array,fn){
 if(Object.prototype.toString.call(array)!=='[object Array]') throw TypeError(it + ' is not a typed array!');
 for(var i = 0;i<array.length;i++){
   if(!fn(array[i],i,array)) return false
 }
 return !!array.length
}
