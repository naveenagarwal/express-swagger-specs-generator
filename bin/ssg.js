#! /usr/bin/env node

console.log("Generating swagger specs.");

const fs = require("fs");
const commandLineArgs = require('command-line-args');

const cwd = process.cwd();

// read command line options
const optionDefinitions = [
    { name: 'name', alias: 'n', type: String },
    { name: 'filepath', alias: 'f', type: String },
    { name: 'force', type: Boolean, defaultValue: false }
  ];
const options = commandLineArgs(optionDefinitions);

// read attributes from filepath
const attributes = JSON.parse(fs.readFileSync(options.filepath));
const path = cwd + '/api-specs';

// create the swagger specs from the file
const Swagger = require('../lib/swagger');
const swagger = new Swagger(options.name, attributes, path);
swagger.init();
swagger.generateSpecFile(options.force);
swagger.generateSwaggerJSONFile();

// safe exit
process.exit(0);
