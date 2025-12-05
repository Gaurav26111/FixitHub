package org.fixitHub.FixItHub.dto;

import lombok.Data;

@Data
public class ComplainRequestDTO {
    private String title;
    private String requestedDepartment;
    private String description;
    private String studentId;
}
