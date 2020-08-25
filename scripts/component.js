const CLI = require('./cli')

class PAGE {
  constructor () {
    config: { }
  }
  init (config) {
    this.config = config
  }
  begin (dir) {
    this.create(dir)
  }
  create (dir) {
    CLI.mkdirs(dir, () => {
      CLI.copyFolder(this.config.srcComponent, `${dir}`)
      return;
    })
  }
}

module.exports = new PAGE()