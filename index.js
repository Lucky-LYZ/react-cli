#! node

const path = require('path')
const CLI = require('./scripts/cli')
const COMPONENT = require('./scripts/component')
const APP = require('./scripts/app')

const actionOptions = ['app', 'component']
// module：store下面一个模块module
const config = {
  action: '', // 动作：page,component,module
  name: '',
  srcComponent: 'templates/components/demo', // 创建组件的默认目标路径
  srcApp: 'templates/app/demo', // 创建应用的默认目标路径
  dirComponent: 'src/components', // 创建组件的默认目标路径
  dirApp: 'src/app', // 创建应用的默认目标路径
  multiFile: false,
}

console.log('---start---------------------------')
let argv = process.argv
console.log('argv', argv)
if (argv[2] === '-h' || argv.length < 3) {
  console.log('usage: react-cli <command> [<args>]\n')
  console.log('command: app/component')
  console.log('\tapp\t\tcreate a app(view)')
  console.log('\tcomponent\tcreate a component')
  console.log('args:')
  console.log('\t-n\tname. required.')
  console.log('\t-d\tdirectory. default value:')
  console.log('\t\tapp:\t\t\'./src/app/\'.')
  console.log('\t\tcomponent:\t\'./src/components/\'.')
  console.log('\t-m\tmultiple File. default false. only used in page command.')
  return;
}

if (actionOptions.includes(argv[2])) {
  config.action = argv[2]
} else {
  console.log('cli: \'' + argv[2] + '\' is not a cli command. See \'cli -h\'.\n')
  return
}

if (argv[3].substr(0, 1) !== '-') {
  config.name = argv[3]
}
// 参数处理
let options = argv.slice(3)
options.forEach((item, index) => {
  switch (item) {
    case '-n': //页面名称，必须参数
      config.name = options[index + 1]
      break;
    case '-d': //指定生成的目录
      let dir = options[index + 1]
      console.log('dir', dir)
      // dir = dir.substr(0, 1) === '.' ? dir.substring(1) : dir
      // dir = dir.substr(0, 1) === '/' ? dir.substring(1) : dir
      config.dir = dir
      break;
    default:
      break;
  }
})
if (config.name === '') {
  console.error('[error]create fail!', 'page name is require!')
}

console.log(config)

CLI.init(config)

let PATH = '.'
let dir

// 开始创建
switch (config.action) {
  case 'app': // 表示当前操作是创建 app
    dir = `${PATH}/${config.dirApp}/${config.name}`;
    APP.init(config);
    APP.begin(dir);
    break;
  case 'component': // 表示当前操作是创建组件
    dir = `${PATH}/${config.dirComponent}/${config.name}`;
    COMPONENT.init(config);
    COMPONENT.begin(dir);
    break;
  default:
    break;
}




console.log('---end---------------------------')