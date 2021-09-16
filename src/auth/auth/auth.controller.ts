//import { Controller, Get } from '@nestjs/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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
      name: 'Luiz Carlos',
    };
  }

  //Para proteger um metodo especifico da API e acionar o guardião definido em jwt.guard.ts
  @UseGuards(JwtGuard)
  @Get('test-auth2')
  test2(@Req() req) {
    console.log(req.user);
    return {
      name: 'Luiz Carlos',
    };
  }

  @Get('exemplo')
  exemplo(): string {
    return 'exemplo de chamada Get';
  }
}
