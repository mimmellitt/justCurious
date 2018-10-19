/*
 * 2018
 */

package com.pluralSight.springTraining.model;

/**
 * Standard DTO for customer objects.
 */

public class Customer {
    private String firstName;
    private String lastName;

    // Spring uses default no-args constructor
    public Customer() {

    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }
}
