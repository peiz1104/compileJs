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
// 7、 数组的filter
function filter(array,fn){
  validate(array)
  var length = array.length
  var result =[]
  while(length--){
   if(fn(array[length],length,array)) result.push(array[length])
  }
 return result
}
// 8、判断浏览器是否支持Object.assign
function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}
// 9、支持Object.assign的pollyfill
function toObject(val) {
  if (val === null || val === undefined) {
	throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function (target, source) {
 var getOwnPropertySymbols = Object.getOwnPropertySymbols;
 var hasOwnProperty = Object.prototype.hasOwnProperty;
 var propIsEnumerable = Object.prototype.propertyIsEnumerable;
 var from;
 var to = toObject(target);
 var symbols;

 for (var s = 1; s < arguments.length; s++) {
	from = Object(arguments[s]);

	 for (var key in from) {
	   if (hasOwnProperty.call(from, key)) {
	     to[key] = from[key];
	   }
	 }
	if (getOwnPropertySymbols) {
	  symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
	      if (propIsEnumerable.call(from, symbols[i])) {
		   to[symbols[i]] = from[symbols[i]];
		 }
	    }
	}
  }
  return to;
}

// 10、 Array数组的find
if(!Array.prototype.find){
 Object.defineProperty(Array.prototype,'find',{
  value:function(predicate){
     if(this==null) throw new TypeError('"this" is null or not defined')
     if(typeof predicate !=='function') throw new TypeError('predicate must be function')
     var o = Object(this)
     var len = o.length>>>0
     var thisArg = arguments[1]
     var k = 0
     while(k<len){
      var kval = o[k]
      if(predicate.call(thisArg,kval,k,o)) return kval
      k++
    }
   return undefined
  }
 })
}
// 11、数组的includes方法
if(!Array.prototype.includes){
  Object.defineProperty(Array.prototype,'includes',{
   value:function(valueTofind,fromIndex){
     if(this==null) throw new TypeError('"this" is null or not defined')
     var o = Object(this)
     var len = o.length>>>0
     if(len===0)return false
     var n  = fromIndex|0
     var k = Math.max(n>=0?n:len-Math.abs(n),0)
     function sameValueFind(x,y){
       return x===y||(typeof x==='number'&&typeof y==='number'&&isNaN(x)&&isNaN(y))
     }
    while(k<len){
      if(sameValueFind(o[k],valueTofind)) return true
      k++
    }
    return false
   }
  })
}
// 12、Function.prototype.bind方法
if(!Funtion.prototype.bind)(function(){
 var slice = Array.prototype.slice
 Function.prototype.bind = function(Argthis){
  if(typeof this!=='function') throw new TypeError('this must be function')
  var baseArg = slice.call(arguments,1),
  baseArgLength = baseArg.length,
  fToBind = this,
  fNOP = function() {},
  fBound  = function() {
  baseArg.length = baseArgLength; // reset to default base arguments
  baseArg.push.apply(baseArg, arguments);
  return fToBind.apply(fNOP.prototype.isPrototypeOf(this) ? this : Argthis, baseArg);
   };
 if (this.prototype) {
     // Function.prototype doesn't have a prototype property
     fNOP.prototype = this.prototype; 
    }
    fBound.prototype = new fNOP();
    return fBound;
 }
})()

