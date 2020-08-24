const CLI = require('./cli')

class PAGE {
  constructor () {
    config: { }
  }
  init (config) {
    this.config = config
  }
  begin (dir) {
    this.createComponent(dir)
  }
  createComponent (dir) {
    CLI.mkdirs(dir, () => {
      CLI.copyFolder('./templates/app/demo', `${dir}`)
      return;
    })
  }
}

module.exports = new PAGE()