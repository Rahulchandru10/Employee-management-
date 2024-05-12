package com.employee.backend.controller;

import com.employee.backend.model.Employee;
import com.employee.backend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class Controller {
    @Autowired
    private Service service;

    @PostMapping("/add")
    public String add(@RequestBody Employee emp)
    {
        service.add(emp);
        return "Successfully added";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable long id)
    {
        service.delete(id);
        return "Deleted Successfully";
    }

    @GetMapping("/getallemp")
    public List<Employee> emp()
    {
        return service.getallemp();
    }

    @GetMapping("/Get/{id}")
    public Optional<Employee> get(@PathVariable long id)
    {
        return service.getemp(id);
    }

    @PostMapping("/update")
    public String update(@RequestBody Employee data)
    {
        service.update(data);
        return "Updated";
    }
}
