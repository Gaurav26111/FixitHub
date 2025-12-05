package org.fixitHub.FixItHub.service;

import org.fixitHub.FixItHub.entity.Complain;
import org.fixitHub.FixItHub.repository.ComplainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplainService {

    @Autowired
    private ComplainRepository complainRepository;

    public Complain createComplain(Complain complain) {
        return complainRepository.save(complain);
    }

    public List<Complain> getAllComplain() {
        return complainRepository.findAll();
    }
}
