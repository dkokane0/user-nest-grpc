import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { HeroController } from './hero.controller';
// import { join } from 'path';
// import { HeroService } from './hero.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...grpcClientOptions
      //   transport: Transport.GRPC,
      // options: {
      //   package: 'hero',
      //   protoPath: join(__dirname, './hero/hero.proto'),
      // },
      },
    ]),
  ],
  controllers: [HeroController],
  providers:[]
})
export class HeroModule {}