if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod'); // Dynamic imports are not supported by ES6, using 'require()' instead
}  else  {
    module.exports = require('./configureStore.dev'); // Dynamic imports are not supported by ES6, using 'require()' instead
}
