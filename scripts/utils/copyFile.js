var fs = require('fs');
var stat = fs.stat;

/**
 * @function 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
function copyFile (src, dst) {
    const executeCopy = () => {
        // 读取目录中的所有文件/目录
        fs.readdir(src, function (err, paths) {
            if (err) {
                throw err;
            }
            paths.forEach(function (path) {
                // console.log({ path });
                // 不拷贝js文件
                if (path.includes('.js')) {
                    return;
                }
                var _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;
                stat(_src, function (err, st) {
                    if (err) {
                        throw err;
                    }
                    // console.log({ st });
                    // 判断是否为文件
                    if (st.isFile()) {
                        // 创建读取流
                        readable = fs.createReadStream(_src);
                        // 创建写入流
                        writable = fs.createWriteStream(_dst);
                        // 通过管道来传输流
                        readable.pipe(writable);
                    }
                    // 如果是目录则递归调用自身
                    else if (st.isDirectory()) {
                        exists(_src, _dst, copyFile);
                    }
                });
            });
        });
    }
    exists(src, dst, executeCopy);
};

/**
 * @function 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
 * @param {*} src 需要复制的目录
 * @param {*} dst 复制到指定的目录
 * @param {*} callback 
 */
function exists (src, dst, callback) {
    fs.exists(dst, function (exists) {
        // 已存在
        if (exists) {
            callback(src, dst);
        } else { // 不存在的话先创建文件
            fs.mkdir(dst, function () {
                callback(src, dst);
            });
        }
    });
};


module.exports = copyFile;