/*
 * 2018
 */
package com.pluralSight.springTraining.repository;

import com.pluralSight.springTraining.model.Customer;

import java.util.List;

/**
 * All Customer repository actions can be run against this interface
 */
public interface CustomerRepository {
    List<Customer> findAll();
}
