package com.employee.backend.service;

import com.employee.backend.model.Employee;
import com.employee.backend.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private Repository repo;

    public void add(Employee s)
    {
        repo.save(s);
    }

    public void delete(long id)
    {
        repo.deleteById(id);
    }

    public List<Employee> getallemp()
    {
        return repo.findAll();
    }

    public Optional<Employee> getemp(long id)
    {
        return repo.findById(id);
    }

    public void update(Employee data)
    {
        repo.save(data);
    }
}
