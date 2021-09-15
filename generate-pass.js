const bcrypt = require('bcrypt');
const saltRounds = 10; //força da criptografia
const password = process.argv.slice(2)[0]; //pega argumento da linha de comando

bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(password, salt, function(err, hash){
        console.log(hash);
    });
});


