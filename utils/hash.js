var fs = require('fs');
var crypto = require('crypto');

module.exports = {

    createHash: async (algorithm, path) => {
        return new Promise(function (resolve, reject) {
            let fs = require('fs');
            let crypto = require('crypto');
        
            let hash = crypto.createHash(algorithm).setEncoding('hex');
            fs.createReadStream(path)
              .once('error', reject)
              .pipe(hash)
              .once('finish', function () {
                resolve(hash.read());
              });
          });
    }
}