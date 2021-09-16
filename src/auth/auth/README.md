Para autenticacao JWT
1. Declarar o modulo em auth.modules.ts informando o 'secret' e 'expiresIn'
2. Em auth.services.ts criar o serviço (jwtService) de geração do token
3. Criar estrategia em jwt-strategy.services.js 

// Bestpratices...
 -- https criptografa o HEADER na transmissao entao é mais seguro.
-- expiração baixa = proteção alta