class Nolembic {
  init(options = {}) {
    console.log('entro')
    console.log(options)
  }
}

module.exports = () => new Nolembic();
