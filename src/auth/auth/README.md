Para autenticacao JWT
1. Declarar o modulo em auth.modules.ts informando o 'secret' e 'expiresIn'
2. Em auth.services.ts criar o serviço (jwtService) de geração do token
3. Criar estrategia em jwt-strategy.services.js 

// Bestpratices...
 -- https criptografa o HEADER na transmissao entao é mais seguro.
-- expiração baixa = proteção alta


EXEMPLO de Kafka com a aplicacao nest-auth de autorizacao com JWT

cd ~/projects/live-nest-auth
docker-compose up
docker-compose exec app bash
** para usar o kafka, instalar a biblioteca 
npm install @nestjs/microservices kafkajs --save