低版本android机webpack打包存在兼容问题
1、需要的依赖包
  browserify 、babelify、node环境
2、遍历找到打包后的js文件、通过browserify使用babelify对其进行编译
  a、fs.createWriteStream 对编译后的js创建新的文件夹暂存
  b、fs.unlink删除原来的文件
  c、fs.createReadStream读取原来文件创建文件流
  d、fs.createWriteStream添加替换到原来有es6语法的打包文件
  e、readerstream.pipe(writeStream)
 
 
