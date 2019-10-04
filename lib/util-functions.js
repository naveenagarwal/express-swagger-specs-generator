const utilFunctions = {

    propertyKeys: [
        'format',
        'minLength',
        'maxLength',
        'maximum',
        'minimum',
        'pattern',
        'type'
    ],

    getFileName: function(name, suffix) {
        return name.replace(/\.?([A-Z]+)/g, function (x,y){ return "-" + y.toLowerCase() }).replace(/^-/, "") +
            suffix;
    },

    getProperties: function(properties, depth) {
        let swaggerProperties = '';
        const tabsize = 2;
        for(let index in properties) {
            if(index == 0) {
                swaggerProperties = swaggerProperties + `${properties[index]['name']}:`
            } else {
                swaggerProperties = swaggerProperties + `\n *${' '.repeat(depth * tabsize)}${properties[index]['name']}:`
            }

            this.propertyKeys.forEach((property) => {
                if(properties[index][property]){
                    swaggerProperties += `\n*${' '.repeat((depth +1) * tabsize)}${property}: ${properties[index][property]}`
                }
            });
        }

        return swaggerProperties;
    }

};

module.exports = utilFunctions;