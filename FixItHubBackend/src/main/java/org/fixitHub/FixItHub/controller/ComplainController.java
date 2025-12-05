package org.fixitHub.FixItHub.controller;

import org.fixitHub.FixItHub.dto.ComplainRequestDTO;
import org.fixitHub.FixItHub.entity.Complain;
import org.fixitHub.FixItHub.entity.Student;
import org.fixitHub.FixItHub.repository.ComplainRepository;
import org.fixitHub.FixItHub.repository.DepartmentRepository;
import org.fixitHub.FixItHub.repository.StudentRepository;
import org.fixitHub.FixItHub.service.ComplainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/complain")
@CrossOrigin(origins = "http://localhost:5173")
public class ComplainController {

    @Autowired
    private ComplainService complainService;
    @Autowired
    private ComplainRepository complainRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @PostMapping("/add")
    public String addComplaint(@RequestBody ComplainRequestDTO request) {

        Student student = studentRepository.findByStudentId(request.getStudentId());

        if (student == null) {
            return "Invalid Student ID. Please login/register first!";
        }

        Complain complain = new Complain();
        complain.setTitle(request.getTitle());
        complain.setRequestedDepartment(request.getRequestedDepartment());
        complain.setDescription(request.getDescription());
        complain.setStudent(student); // mapping student ✔
        complain.setAssignedDepartment(departmentRepository.findByDepartmentName(request.getRequestedDepartment()));

        complainRepository.save(complain);
        return "Complaint Registered Successfully!";
    }

    @GetMapping
    public List<Complain> getAllComplain(){
        return complainService.getAllComplain();
    }
    @GetMapping("/getComplainById/{id}")
    public Optional<Complain> getComplain(@PathVariable Long id){
        return complainRepository.findById(id);
    }
}
