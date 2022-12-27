import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './product.entity';  //ProductEntity
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
constructor(
    @InjectRepository(Product) private readonly productRepository:Repository<Product>
){}

async showAll() {
    return await this.productRepository.find();
  }

  async create(data: ProductDTO) {
    const user = this.productRepository.create(data);
    await this.productRepository.save(data);
    return user;
  }

  async findByEmail(title: string): Promise<ProductDTO> {
    return await this.productRepository.findOne({
      where: {
        title: title,
      },
    });
  }

  async read(id: number) {
    return await this.productRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<ProductDTO>) {
    await this.productRepository.update({ id }, data);
    // return await this.productRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.productRepository.delete({ id });
    return { deleted: true };
  }
}


