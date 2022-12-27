import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [EmployeeModule,
    HeroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
