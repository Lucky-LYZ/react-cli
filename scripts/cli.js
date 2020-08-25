const fs = require('fs');
const path = require('path');
const copyFile = require('./copyFile');


class CLI {
  constructor () {
    config: { }
  }
  init (config) {
    this.config = config
  }
  mkdirs (dir, cb) {
    fs.exists(dir, function (exists) {
      if (exists) {
        cb();
      } else {
        // console.log(path.dirname(dirname)); 
        this.mkdirs(path.dirname(dir), function () {
          fs.mkdir(dir, cb);
          // console.log('在' + path.dirname(dir) + '目录创建好' + dir  +'目录');
        });
      }
    }.bind(this));
  }
  mkdir (dir) {
    fs.mkdirSync(dir, function (err) {
      if (err) {
        console.log('mkdir error:', err)
      }
    })
  }
  copyFolder (srcDir, tarDir, cb) {
    console.log({
      srcDir,
      tarDir
    })
    copyFile(srcDir, tarDir);
  }
}

module.exports = new CLI()