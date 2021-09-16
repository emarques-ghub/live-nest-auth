import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Guardiao do token
@Injectable()
//Corresponde ao 'jwt' que esta na jwt-strategy.service.ts
export class JwtGuard extends AuthGuard('jwt') {}
