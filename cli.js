#!/usr/bin/env node

const shell = require('shelljs');
require('./index')();
shell.exec(process.argv.slice(2).join(' '));