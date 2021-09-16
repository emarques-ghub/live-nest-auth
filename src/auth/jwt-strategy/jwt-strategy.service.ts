import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// garantir que quem esta autenticado acesse a aplicação
// Nesta estrategia partivular, extrai o token da chamada tipo Bearer, valida expiração e compara com secret (declarado em codigo, mas deve estar em variavel de ambiente ou certificado)

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'abcd123456',
    });
  }

  async validate(payload) {
    return payload;
  }
}
