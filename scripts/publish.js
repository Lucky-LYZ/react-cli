const copyFile = require('./utils/copyFile');
const delFile = require('./utils/delFile');

// 先将src目录下的组件拷贝至lib目录下；
copyFile('./src', './lib');


// 删除文件&&文件夹
// delFile('./lib');
