import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
//   transport: Transport.GRPC,
//   options: {
//     package: 'hero',
//     protoPath: join(__dirname, './hero/hero.proto'),
//   },
// });
  
app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
