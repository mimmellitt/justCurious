/*
 * 2018
 */
package com.pluralSight.springTraining.service;

import com.pluralSight.springTraining.model.Customer;

import java.util.List;

/**
 * All Customer repository service requests can be run against this interface
 */
public interface CustomerService {
    List<Customer> findAll();
}
