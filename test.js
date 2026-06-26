const { greet } = require('./index');
if (greet('World') !== 'Hello, World!') { console.error('FAIL'); process.exit(1); }
console.log('PASS');
