package com.example.contact;

import java.util.*;

import jakarta.persistence.Id;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.contact.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")

public class Controller {

    @Autowired
    private ContactRep contactRep;

    @GetMapping("contacts")
    public List<Contact> getContacts() {
        return this.contactRep.findAll();
    }

    @PostMapping(value = "newContact", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Contact> postContact(@RequestBody Contact contact) {
        Contact _contact = contactRep.save(new Contact(contact.getName(), contact.getPhoneNumber()));
        return new ResponseEntity<>(_contact, HttpStatus.CREATED);
    }

    @DeleteMapping("/contacts/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Contact contact = contactRep.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not found for this id :: " + id));

        contactRep.delete(contact);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

