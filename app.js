const http = require('http');
const fs = require('fs');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = "debug";

http.createServer((req, res) =>{
    logger.info("Conección a la aplicación");
    fs.readFile('./index.html', (err, file) => {
        if(err){        
            res.writeHead(404, {"Content-Type": "text/html"})
            res.write(err.message);                    
            logger.warn('404 - not found');
        } else{
            logger.info('200 - ok');
            res.write(file);    
        }
        res.end();    
    });    
}).listen(3000);

// git rm --cached "filename" #quita del stage el archivo
//ssh-keygen -t rsa -C gerardo.t.o@hotmail.com
//salt key  es un agregado a la llave de encriptacion 
//passprhase es una frase que se agrega como salt key a la llave privada para encriptar de forma mas segura