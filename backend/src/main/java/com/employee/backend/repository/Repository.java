package com.employee.backend.repository;

import com.employee.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repository extends JpaRepository<Employee, Long> {
}
