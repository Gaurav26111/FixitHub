package org.fixitHub.FixItHub.controller;

import org.fixitHub.FixItHub.entity.Department;
import org.fixitHub.FixItHub.entity.DepartmentUser;
import org.fixitHub.FixItHub.repository.DepartmentRepository;
import org.fixitHub.FixItHub.repository.DepartmentUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/department")
@CrossOrigin(origins = "http://localhost:5173")
public class DepartmentUserController {

        @Autowired
        private DepartmentUserRepository departmentUserRepository;

        @Autowired
        private DepartmentRepository departmentRepository;

    @PostMapping("/registerDepartment")
    public ResponseEntity<?> registerDepartment(@RequestBody Map<String, String> req) {

        try {
            Long departmentId = Long.parseLong(req.get("departmentId"));
            Department department = departmentRepository.findById(departmentId)
                    .orElse(null);

            if (department == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Invalid Department ID"));
            }

            DepartmentUser user = new DepartmentUser();
            user.setName(req.get("name"));
            user.setAdharNumber(Long.parseLong(req.get("adharNumber")));
            user.setMobile(Long.parseLong(req.get("mobile")));
            user.setEmail(req.get("email"));
            user.setPassword(req.get("password"));
            user.setDepartment(department);

            DepartmentUser saved = departmentUserRepository.save(user);

            return ResponseEntity.ok(saved);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid Data Format"));
        }
    }

        @PostMapping("/loginDepartment")
        public Object login(@RequestBody Map<String, String> loginData) {

            String email = loginData.get("email");
            String password = loginData.get("password");

            DepartmentUser user = departmentUserRepository.findByEmail(email);

            if (user != null && user.getPassword().equals(password)) {
                return Map.of(
                        "message", "Login Success",
                        "userId", user.getId(),
                        "name", user.getName(),
                        "departmentId", user.getDepartment().getId(),
                        "departmentName", user.getDepartment().getDepartmentName()
                );
            }

            return "Login Failed";
        }

}
