function mySymbol(obj){
 let symbolK = Math.random().toString(36).slice(-10)
 if(obj.hasOwnProperty(symbolK)){
   mySymbol(obj)
 }
 return symbolK
}
Function.prototype.myApply = function(context){
  if(typeof this !=='function') throw new TypeError(`${this} is not a function`)
  context = context || window
  if(arguments[1]&&typeof arguments[1]!=='object') throw new TypeError('')
  var arg = arguments[1]? [...arguments].slice(1):[]
  var fn = mySymbol(context)
  var context[fn]= this
  context[fn](...arg)
  delete context[fn]
}

Function.prototype.myCall = function(context){
 if(typeof this !=='function') throw new TypeError(`${this} is not a function`)
 context = context || window
 var arg = [...arguments].slice(1)
 var fn = mySymbol(context)
 var context[fn] = this
 context[fn](...arg)
 delete context[fn]
}

Function.prototype.myBind = function(context){
 if(typeof this!=='function') throw new TypeError(`${this} is not a function`)
 var thisArg = this;
 var arg = [...arguments].slice(1)
 context = context || window
 return function bind(){
  var newArg = arg.concat([...arguments])
  return thisArg.apply(context,newArg)
 }
}
