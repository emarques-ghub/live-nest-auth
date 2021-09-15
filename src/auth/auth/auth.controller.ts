//import { Controller, Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
/*
@Controller('login')
export class AuthController {
    @Get()
    login(): string {
        return('login 2');
    }
}
*/
@Controller()
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    login(@Body() body): void {
        this.authService.login(body.username, body.password);
    }
}
