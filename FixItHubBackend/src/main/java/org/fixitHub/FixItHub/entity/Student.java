package org.fixitHub.FixItHub.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment in MySQL
    private Long id;

    @NonNull
    @Column(nullable = false)
    private String name;

    private int age;

    @NonNull
    @Column(unique = true, nullable = false)
    private Long mobile;

    @NonNull
    @Column(unique = true, nullable = false)
    private String email;

    @NonNull
    @Column(unique = true, nullable = false)
    private String studentId;

    @NonNull
    @Column(nullable = false)
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Complain> complains;

}
