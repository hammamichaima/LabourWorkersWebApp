package com.example.LabourWorkers.payload.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
public class UserInfoResponse {
    private final String jwt;
    @Setter
    private Long id;
    @Setter
    private String username;
    @Setter
    private String email;
    private final List<String> roles;

    public UserInfoResponse(Long id, String username, String email, List<String> roles, String jwt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.jwt = jwt;
    }

}