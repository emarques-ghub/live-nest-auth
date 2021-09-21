import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //conectar ao Kafka antes de iniciar o listen - criando um consumer para este app
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        //c:\windows\system32\drivers\etc\hosts  -> 127.0.0.1 host.docker.internal
        //brokers: ['host.docker.internal:9094'],
        brokers: ['kafka:9092'],
      },
      consumer: {
        //para teste, concatenar + Math.random() para conectar mais rapido - remover para PROD
        groupId: 'pagamentos' + Math.random(),
      },
    },
  });
  await app.startAllMicroservices(); //inicia os serviços

  await app.listen(3000);
}
bootstrap();
