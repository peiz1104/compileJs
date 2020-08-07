function validate(array){
 if(Object.prototype.toString.call(array)!=='[object Array]') New Error(' is not a typed array!');
}
// 1、数组的map方法
function map(array,fn){
 validate(array);
 var length = array.length;
 var result = [];
 
 while(length--){
  result[length] = fn(array[length],length,array)
 }
 return result
}

// 2、数组的forEach方法

function forEach(array,fn){
 validate(array);
 var length = array.length;
 while(length--){
  fn(array[length],length,array)
 }
}

// 3、数组的some方法
function some(array,fn){
 validate(array);
 for(var i = 0;i<array.length;i++){
  if(fn(array[i],i,array)) return true
 }
 return false
}

// 4、数组的every方法
function every(array,fn){
 validate(array);
 for(var i = 0;i<array.length;i++){
   if(!fn(array[i],i,array)) return false
 }
 return !!array.length
}
// 5、数组的reduce
function reduce(array,fn,prev){
 validate(array);
 for(var i = 0;i<array.length;i++){
  if(prev===undefined){
    prev = fn(array[i],array[i+1],i+1,array)
  }else{
   prev = fn(prev,array[i],i,array)
  }
 }
 return prev
}
// 6、数组倒序
function reverse(array) {
   validate(array)
   var that = array;
   var length = that.length;
   var middle = Math.floor(length / 2);
   var index = 0;
   var value;
   while (index < middle) {
       value = that[index];
       that[index++] = that[--length];
       that[length] = value;
     } return that;
   }
