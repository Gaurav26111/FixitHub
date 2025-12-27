package org.fixitHub.FixItHub.controller;

import org.fixitHub.FixItHub.entity.*;
import org.fixitHub.FixItHub.repository.AdminRepository;
import org.fixitHub.FixItHub.repository.ComplainRepository;
import org.fixitHub.FixItHub.repository.DepartmentRepository;
import org.fixitHub.FixItHub.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private ComplainRepository complainRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @PostMapping("/register")
    public void registerAdmin(@RequestBody Admin admin){
        adminService.register(admin);
    }

    @GetMapping
    public List<Admin> getAllAdmin(){
        return adminService.getAllAdmin();
    }
    @PostMapping("/login")
    public Object login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Admin admin = adminRepository.findByEmail(email);

        if (admin != null && admin.getPassword().equals(password)) {
            return admin;
        }
        return "Login Failed: Invalid credentials!";
    }

    @PostMapping("/logout")
    public String logout(){
        return "logout successful";
    }

    @GetMapping("/pending")
    public List<Complain> getPendingComplaints() {
        return complainRepository.findByStatus(ComplainStatus.PENDING);
    }

    @GetMapping("/getAll")
    public List<Complain> getAllComplaints(){
        return  complainRepository.findAll();
    }
    @PutMapping("/forward/{id}")
    public String forwardComplaint(@PathVariable Long id, @RequestParam Long departmentId, @RequestParam Long adminId) {

        Complain complain = complainRepository.findById(id).orElse(null);
        if (complain == null) return "Complaint Not Found";

        Admin admin = adminRepository.findById(adminId).orElse(null);
        Department dept = departmentRepository.findById(departmentId).orElse(null);

        complain.setAssignedDepartment(dept);
        complain.setForwardedBy(admin);
        complain.setStatus(ComplainStatus.FORWARDED);

        complainRepository.save(complain);
        return "Complaint forwarded successfully!";
    }


}
