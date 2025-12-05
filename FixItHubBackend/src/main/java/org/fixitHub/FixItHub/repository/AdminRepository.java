package org.fixitHub.FixItHub.repository;

import org.fixitHub.FixItHub.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    public Admin findByEmail(String email);
    public Optional<Admin> findById(Long id);
}
