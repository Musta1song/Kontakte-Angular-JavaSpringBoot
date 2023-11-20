package com.example.contact;

import java.util.List;

import org.hibernate.mapping.Table;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRep extends JpaRepository<Contact, Long> {
}
