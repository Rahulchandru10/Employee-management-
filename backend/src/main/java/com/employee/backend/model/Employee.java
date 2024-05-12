package com.employee.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
@Entity
@Table(name = "emp")
public class Employee {

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", contact=" + contact +
                ", position='" + position + '\'' +
                ", department='" + department + '\'' +
                '}';
    }

    public Employee() {
        super();
    }

    public Employee(int id, String name, int age, String contact, String position, String department) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.position = position;
        this.department = department;
    }

    @Id
    private int id;
    private String name;
    private int age;
    private String contact;
    private String position;
    private String department;
}
