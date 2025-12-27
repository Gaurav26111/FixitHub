package org.fixitHub.FixItHub.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.fixitHub.FixItHub.entity.Student;
import org.fixitHub.FixItHub.repository.StudentRepository;
import org.fixitHub.FixItHub.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/register")
    public Student studentRegister(@RequestBody Student student) {
        return studentService.createStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudent() {
        return studentService.getAllStudents();
    }

    @PostMapping("/login")
    public Object login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Student student = studentRepository.findByEmail(email);

        if (student != null && student.getPassword().equals(password)) {
            return student;
        }
        return "Login Failed: Invalid credentials!";
    }

    @PostMapping("/logout")
    public String logout(){
        return "logout successful";
    }
}
