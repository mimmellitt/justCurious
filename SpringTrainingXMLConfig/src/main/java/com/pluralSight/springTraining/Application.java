/*
 * 2018
 */
package com.pluralSight.springTraining;

import com.pluralSight.springTraining.service.CustomerService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Simple application runner
 */
public class Application {

    public static void main(String[] args) {

        // create instance of customer service tier (business logic)
        // CustomerService service = new CustomerServiceImpl();

        // create Customer Service via Spring support
        ApplicationContext appContext = new ClassPathXmlApplicationContext("applicationContext.xml");

        // always use interfaces not implementations
        CustomerService service = appContext.getBean("customerService", CustomerService.class);
        System.out.println(service.findAll().get(0).getFirstName());
    }
}
