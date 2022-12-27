import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
    private employees :Employee[]= [];

    getAllEmployee():Employee[]{
      return this.employees;
    }
  
    getEmployeeById(id:string):Employee{
      return this.employees.find(employee=>employee.id===id);
    }
  
    createEmployee(name:string,designation:string):Employee{
      const id = new Date().toString();
      const employee:Employee={
        id,
        name,
        designation
      }
      this.employees.push(employee)
  return employee
    }
  
    deleteEmployee(id:string){
      this.employees=this.employees.filter(employee=>employee.id!==id)
    }
  
    updateEmployeeDesignation(id:string,designation:string):Employee{
        let employee=this.getEmployeeById(id)
        employee.designation=designation
  
        return employee
    }
}
