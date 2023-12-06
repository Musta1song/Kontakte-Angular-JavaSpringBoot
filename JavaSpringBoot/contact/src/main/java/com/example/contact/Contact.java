package com.example.contact;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "CONTACTS")
public class Contact {

   @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "firstname")
    private String firstname;
    @Column(name = "lastname")
    private String lastname;

    @Column(name = "phoneNumber")
    private String phoneNumber;


    public Contact(String firstname, String lastname, String phoneNumber) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;

        this.phoneNumber = phoneNumber;
    }

    public long getId() {
        return id;
    }

    public String getFirstname() {return firstname;}

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Contact(){}


}
