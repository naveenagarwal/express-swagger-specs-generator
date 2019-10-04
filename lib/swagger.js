const { swaggerTemplate, swaggerDefTemplate } = require('../templates');
const fs = require('fs');
const shell = require('shelljs');
const util = require('./util-functions')

class Swagger {
    constructor(name, attributes, path) {
        this.name = name;
        this.attributes = attributes;
        this.path = path;
        this.cwd = process.cwd();
    }

    init() {
        shell.exec(`mkdir -p ${this.path}`);
        const swaggerDefFilePath = `${this.path}/swagger.def.js`;
        fs.writeFileSync(swaggerDefFilePath, swaggerDefTemplate())
    }

    generateSpecFile() {
        const template = swaggerTemplate(this.name, this.attributes, util.getFileName(this.name,''));
        const fileName = `${this.path}/${util.getFileName(this.name, '-swagger-spec.js')}`;
        fs.writeFileSync(fileName, template);
    }

    generateSwaggerJSONFile() {
        shell.exec(`cd ${this.path} && npx swagger-jsdoc -d swagger.def.js`);
    }

}

module.exports = Swagger