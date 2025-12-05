package org.fixitHub.FixItHub.repository;

import org.fixitHub.FixItHub.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    public Student findByEmail(String email);
    public Student findByStudentId(String studentId);
}
