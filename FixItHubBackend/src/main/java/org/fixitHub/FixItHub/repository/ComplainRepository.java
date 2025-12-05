package org.fixitHub.FixItHub.repository;

import org.fixitHub.FixItHub.entity.Complain;
import org.fixitHub.FixItHub.entity.ComplainStatus;
import org.fixitHub.FixItHub.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import java.util.List;

public interface ComplainRepository extends JpaRepository<Complain, Long> {
    List<Complain> findByStatus(ComplainStatus complainStatus);
    public Optional<Complain> findById(Long id);
    public List<Complain> findByAssignedDepartment(Department department);

    List<Complain> findByAssignedDepartmentAndStatus(Department department, ComplainStatus complainStatus);
}
