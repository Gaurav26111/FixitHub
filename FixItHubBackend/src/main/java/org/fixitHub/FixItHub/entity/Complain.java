package org.fixitHub.FixItHub.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@Entity
@Table(name = "complain")
public class Complain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(nullable = false)
    private String title;

    @NonNull
    @Column(nullable = false)
    private String requestedDepartment;

    @NonNull
    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "student_id") // foreign key in complain table
    private Student student;


    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department assignedDepartment; // Assigned department

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin forwardedBy; // Which admin processed/forwarded

    // Complaint current status
    @Enumerated(EnumType.STRING)
    private ComplainStatus status = ComplainStatus.PENDING;

}
