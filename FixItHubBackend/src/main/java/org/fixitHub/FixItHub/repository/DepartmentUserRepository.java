package org.fixitHub.FixItHub.repository;

import org.fixitHub.FixItHub.entity.DepartmentUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentUserRepository extends JpaRepository<DepartmentUser, Long> {
    public DepartmentUser findByEmail(String email);
    public Optional<DepartmentUser> findById(Long id);
}
