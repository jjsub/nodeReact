
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
    return;
}

// dev enviroment
module.exports = require('./dev');