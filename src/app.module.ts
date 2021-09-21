import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { KakfaModule } from './kakfa/kakfa.module';

@Module({
  imports: [AuthModule, KakfaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
