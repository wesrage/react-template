/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
   require('piping')({ hook: true });
}

require('babel-register');
require('./api');
