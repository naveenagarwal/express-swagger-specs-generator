const util = require('../lib/util-functions');

module.exports = (name, attributes, routePath) => `
/**
 * @swagger
 * definitions:
 *    ${name}:
 *      properties:
 *        ${util.getProperties(attributes, 4)}
 *    ${name}withid:
 *      properties:
 *        id:
 *          type: integer
 *        ${util.getProperties(attributes, 4)}
 */

 /**
 * @swagger
 * /${routePath}:
 *    get:
 *      description: get ${name}
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: get ${name}
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/${name}withid'
 *              pageInfo:
 *                 type: object
 *                 properties:
 *                   pageSize:
 *                      type: integer
 *                   pageLimit:
 *                      type: integer
 *    post:
 *      description: save ${name}
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: ${name}
 *          schema:
 *            type: object
 *            properties:
 *              User:
 *                $ref: '#/definitions/${name}'
 *      responses:
 *        200:
 *          description: save user
 *          schema:
 *            $ref: '#/definitions/${name}withid'
 *
 * /${routePath}/{id}:
 *    get:
 *      description: get ${name} with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ${name} ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: get ${name}
 *          schema:
 *            $ref: '#/definitions/${name}withid'
 *    delete:
 *      description: remove ${name} with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ${name} ID
 *          required: true
 *          type: integer
 *          format: int64
 *      responses:
 *        200:
 *          description: delete ${name}
 *          schema:
 *            $ref: '#/definitions/${name}withid'
 *    put:
 *      description: update ${name} with id
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ${name} ID
 *          required: true
 *          type: integer
 *          format: int64
 *        - in: body
 *          name: ${name}
 *          schema:
 *            type: object
 *            properties:
 *              User:
 *                $ref: '#/definitions/${name}'
 *      responses:
 *        200:
 *          description: update ${name}
 *          schema:
 *            $ref: '#/definitions/${name}withid'
 */
`;