package com.bookishboulevard.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.bookishboulevard.model.Employee;
import com.bookishboulevard.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Optional;

@RestController
public class EmployeeController {

  private final EmployeeRepository employeeRepository;

  public EmployeeController(EmployeeRepository employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  @GetMapping("/employees")
  public Iterable<Employee> findAllEmployees() {
    return this.employeeRepository.findAll();
  }

  @PostMapping("/employees")
  public Employee addOneEmployee(@RequestBody Employee employee) {
    return this.employeeRepository.save(employee);
  }

  @PutMapping("employees/{id}")
  public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Integer id,
      @RequestBody Employee employeeDetails) {
    Optional<Employee> optionalEmployee = employeeRepository.findById(id);
    if (optionalEmployee.isPresent()) {
      Employee employee = optionalEmployee.get();
      employee.setFirstName(employeeDetails.getFirstName()); // Make sure this method exists in the Employee class
      employee.setLastName(employeeDetails.getLastName());
      employee.setDateOfBirth(employeeDetails.getDateOfBirth());

      final Employee updatedEmployee = employeeRepository.save(employee);
      return ResponseEntity.ok(updatedEmployee);
    } else {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Employee not found with id " + id);
    }
  }

  @DeleteMapping("/employees/{id}")
  public ResponseEntity<Void> deleteEmployee(@PathVariable(value = "id") Integer id) {
    try {
      Optional<Employee> optionalEmployee = employeeRepository.findById(id);
      if (optionalEmployee.isPresent()) {
        employeeRepository.deleteById(id);
        return ResponseEntity.noContent().build();
      } else {
        return ResponseEntity.notFound().build();
      }
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

}
