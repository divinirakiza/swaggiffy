import { Class } from "../typings";
import {readFileSync} from 'fs';


class Utility {

    static _getAllFilesFromFolder(dir: any) {

        var filesystem = require("fs");
        var results: any[] = [];
    
        filesystem.readdirSync(dir).forEach(function(file: any) {
    
            file = dir+'/'+file;
            var stat = filesystem.statSync(file);
    
            if (stat && stat.isDirectory()) {
                results = results.concat(Utility._getAllFilesFromFolder(file))
            } else {
                if (file.endsWith('route.ts' || 'route.js'))
                    results.push(file);
            }
    
        });
        return results;
    };


    static getClassProps(_class: any) {
      
        const obj = new _class();
        const props = [];

        for (const prop of Object.keys(obj)) {
            props.push({type: typeof obj[prop], prop: prop});
        }

        return {
            class: _class,
            props
        }
    }

    static compileSwagger() {

    }


    static getSwagger() {
        const json: Buffer =  readFileSync(__dirname + '/swagger.json');
        const swagger = JSON.parse(json.toString());
        console.info('Swagger APIS', swagger.apis);   
        return swagger;  
    }


    static writeSwagger() {
        const swagger = this.getSwagger();
        console.info(swagger.swaggerDefinition.definitions);
    }



}


export default Utility;