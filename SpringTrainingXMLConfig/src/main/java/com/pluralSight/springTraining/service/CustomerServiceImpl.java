/*
 * 2018
 */
package com.pluralSight.springTraining.service;

import com.pluralSight.springTraining.model.Customer;
import com.pluralSight.springTraining.repository.CustomerRepository;
import com.pluralSight.springTraining.repository.HibernateCustomerRepositoryImpl;

import java.util.List;

/**
 * Passes through the access to customer repository
 * Spring helps getting rid of the hardcoded reference to the data access service (i.e. hibernate)
 */
public class CustomerServiceImpl implements CustomerService {

    // the service tier should not have to know that it is using a hibernate implementation
    // abstract this via Spring
    private CustomerRepository customerRepository = new HibernateCustomerRepositoryImpl();

    public CustomerServiceImpl() {}

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public CustomerRepository getCustomerRepository() {
        return customerRepository;
    }

    public void setCustomerRepository(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
}
