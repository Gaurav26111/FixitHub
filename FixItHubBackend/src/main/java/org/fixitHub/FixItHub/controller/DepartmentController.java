package org.fixitHub.FixItHub.controller;


import org.fixitHub.FixItHub.entity.Complain;
import org.fixitHub.FixItHub.entity.ComplainStatus;
import org.fixitHub.FixItHub.entity.Department;
import org.fixitHub.FixItHub.repository.ComplainRepository;
import org.fixitHub.FixItHub.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/department")
@CrossOrigin(origins = "http://localhost:5173")
public class DepartmentController {

    @Autowired
    private ComplainRepository complainRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @PutMapping("/assigned/{departmentId}")
    public ResponseEntity<List<Complain>> getDepartmentComplaints(@PathVariable Long departmentId) {

        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new RuntimeException("Department not found"));

        List<Complain> complaints = complainRepository.findByAssignedDepartment(department)
                .stream()
                .filter(c -> c.getStatus() == ComplainStatus.FORWARDED)
                .toList();

        return ResponseEntity.ok(complaints);
    }

    @PutMapping("/assign/{id}")
    public String assignComplaint(@PathVariable Long id) {
        Complain complain = complainRepository.findById(id).orElse(null);
        if (complain == null) return "Not Found";

        complain.setStatus(ComplainStatus.IN_PROGRESS);
        complainRepository.save(complain);

        return "Complaint assigned successfully!";
    }

    @PutMapping("/inprogress/{departmentId}")
    public ResponseEntity<List<Complain>> getInProgressComplaints(@PathVariable Long departmentId) {

        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new RuntimeException("Department not found"));

        List<Complain> complaints = complainRepository.findByAssignedDepartment(department)
                .stream()
                .filter(c -> c.getStatus() == ComplainStatus.IN_PROGRESS)
                .toList();

        return ResponseEntity.ok(complaints);
    }

    @PutMapping("/resolve/{id}")
    public String resolveComplaint(@PathVariable Long id) {
        Complain complain = complainRepository.findById(id).orElse(null);
        if (complain == null) return "Not Found";

        complain.setStatus(ComplainStatus.RESOLVED);
        complainRepository.save(complain);

        return "Complaint marked as resolved!";
    }
}
