package com.example.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.contact.Contact;
import com.example.contact.ContactRep;

@SpringBootApplication
 public class ContactApplication {

	public static void main(String[] args) {

		SpringApplication.run(ContactApplication.class, args);
	}
}
