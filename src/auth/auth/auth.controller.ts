//import { Controller, Get } from '@nestjs/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

//Para proteger a API toda e acionar o guardião definido em jwt.guard.ts
//@UseGuards(JwtGuard)
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    //this.authService.login(body.username, body.password);
    return { token: this.authService.login(body.username, body.password) };
  }

  //Para proteger um metodo especifico da API e acionar o guardião definido em jwt.guard.ts
  @UseGuards(JwtGuard)
  @Get('test-auth')
  test() {
    return {
      name: 'Eduardo Marques',
    };
  }

  //Guards tem que ser declarados na ordem certa
  //Para restringir conforme a autorizacao do usuario
  @Role('admin')
  //Para proteger um metodo especifico da API e acionar o guardião definido em jwt.guard.ts
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth2')
  test2(@Req() req) {
    console.log(req.user);
    return {
      name: 'Eduardo Marques',
    };
  }

  @Get('exemplo')
  exemplo(): string {
    return 'exemplo de chamada Get';
  }

  @UseGuards(JwtGuard)
  @Get('user')
  user(@Req() req: any) {
    console.log(req.user);
    return req.user;
  }

}
