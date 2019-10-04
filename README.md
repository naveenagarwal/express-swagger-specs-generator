# express-swagger-specs-generator
Package to generate the OpenAPI 2.0 swagger specs automatically for the given model in command line arguments.

This is sub-package for [express-scaffold](https://www.npmjs.com/package/@naveen.agarwal/express-scaffold). It is used to to generate the api-specs for the controller route generated via [express-scaffold](https://www.npmjs.com/package/@naveen.agarwal/express-scaffold).

It is opiniated and generates the API-specs based on the APIs generated via the express-scaffold package. However, it can be used as standalone package as well either via *command-line* or *in-code*.

**Usage**

1. Command Line

```
npm i --save-dev @amiadeveloper/express-swagger-specs-generator
npx ssg --name User --filepath </full/path/to/attributes.json> --force
```

2. In code

```
const Swagger = rquire('@amiadeveloper/express-swagger-specs-generator');
const attributes =  [{}] // see the example below for attrutes.json
const path = process.cwd() + '/api-specs';

// create the swagger specs from the file
const swagger = new Swagger(options.name, attributes, path);
swagger.init();
swagger.generateSpecFile(force); // force can be true or false
swagger.generateSwaggerJSONFile();
```

There will be a folder named *api-specs* int the current directory. It will have a *swagger.json* file which can be used with [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

*Example attributes.json*
```
[
    {
        "name": "firstname",
        "type": "string",
        "minLength": 3,
        "maxLength": 20,
        "pattern": "^\\d{3}-\\d{2}-\\d{4}$",
        "format": "date"
    },
    {
        "name": "age",
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "format": "double"
    },
    {
        "name": "registered",
        "type": "boolean"
    },
]

<!-- All the above values to the keys are same as they are supported by swagger data-types -->
```

**Limitations**
It can be only be used to create api-sepcs for a flat schema.