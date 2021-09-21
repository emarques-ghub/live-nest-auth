import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { TestKafkaController } from './test-kafka/test-kafka.controller';

@Module({
  //Servico de produtor de mensagens
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        // as infos de conexao sao as mesmas
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
      },
    ]),
  ],
  controllers: [TestKafkaController],
  //delcarar um provider para o servico de comunicacao para ser usado no controller Post
  providers: [
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (client: ClientKafka) => {
        return client.connect();
      },
      inject: ['KAFKA_SERVICE'],
    },
  ],
})
export class KakfaModule {}
