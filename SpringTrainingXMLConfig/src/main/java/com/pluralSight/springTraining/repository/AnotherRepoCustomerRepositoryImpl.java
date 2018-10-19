/*
 * 2018
 */
package com.pluralSight.springTraining.repository;

import com.pluralSight.springTraining.model.Customer;

import java.util.ArrayList;
import java.util.List;

/**
 * Exists only to demonstrate that Spring enables implementing against contract not necessarily against a certain service provider
 */
public class AnotherRepoCustomerRepositoryImpl implements CustomerRepository {

    @Override
    public List<Customer> findAll() {
        List<Customer> customers = new ArrayList<>();

        Customer customer = new Customer();
        customer.setFirstName("Jack");
        customer.setLastName("Black");

        customers.add(customer);

        return customers;
    }
}
