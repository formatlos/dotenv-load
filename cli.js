#!/usr/bin/env node

const shell = require('shelljs');
require('./index')();
const result = shell.exec(process.argv.slice(2).join(' '));
process.exit(result.code);
