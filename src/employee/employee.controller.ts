import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

  @Get()
  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployee();
  }
  @Get('/:id')
  getEmployeeById(@Param('id') id:string):Employee{
    return this.employeeService.getEmployeeById(id);
  }

  @Post()
  createEmployee(
    @Body('name') name: string,
    @Body('designation') designation: string,
  ): Employee {
    return this.employeeService.createEmployee(name, designation);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id:string){
    this.employeeService.deleteEmployee(id);
    return `employee ${id} is deleted`
  }

  @Patch('/:id')
  updateEmployeeStatus(@Param('id') id:string,
  @Body('designation') designation:string){
    return this.employeeService.updateEmployeeDesignation(id,designation)
  }
}
