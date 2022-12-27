import { Controller, HttpStatus } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common/decorators';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('api/products')
export class ProductController {

constructor(private productService:ProductService){}

@Get()
async showAllProduct() {
  const product =  await this.productService.showAll();
  return {
    statusCode: HttpStatus.OK,
    message: 'Product fetched successfully',
    product
  };
}

@Post()
async createProduct(@Body() data: ProductDTO) {
   const product = await this.productService.create(data);
  return {
    statusCode: HttpStatus.OK,
    message: 'product created successfully',
    product
  };
}

@Get(':id')
async readProduct(@Param('id') id: number) {
  const data =  await this.productService.read(id);
  return {
    statusCode: HttpStatus.OK,
    message: 'Product fetched successfully',
    data,
  };
}

@Patch(':id')
async updateProduct(@Param('id') id: number, @Body() data: Partial<ProductDTO>) {
  await this.productService.update(id, data);
  return {
    statusCode: HttpStatus.OK,
    message: 'Product updated successfully',
  };
}

@Delete(':id')
async deleteProduct(@Param('id') id: number) {
  await this.productService.destroy(id);
  return {
    statusCode: HttpStatus.OK,
    message: 'Product deleted successfully',
  };
}

}
