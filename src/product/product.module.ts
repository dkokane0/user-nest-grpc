import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product])
    // TypeOrmModule.forRoot(),ProductModule
  ],
  controllers:[ProductController],
  providers: [ProductService]
})
export class ProductModule {}
