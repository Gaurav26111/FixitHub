package org.fixitHub.FixItHub.service;

import org.fixitHub.FixItHub.entity.Admin;
import org.fixitHub.FixItHub.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public void register(Admin admin) {
        adminRepository.save(admin);
    }

    public List<Admin> getAllAdmin() {
        return adminRepository.findAll();
    }
}
