package com.example.Clothing_Billing_Software.Controller;

import com.example.Clothing_Billing_Software.Config.JwtUtil;
import com.example.Clothing_Billing_Software.DTO.AuthResponse;
import com.example.Clothing_Billing_Software.DTO.LoginRequest;
import com.example.Clothing_Billing_Software.DTO.UserRegisterDto;
import com.example.Clothing_Billing_Software.Entity.User;
import com.example.Clothing_Billing_Software.Service.UserService;
import com.example.Clothing_Billing_Software.exception.UserException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegisterDto registerDto) {
        try {
            User registeredUser = userService.registerUser(registerDto);
            registeredUser.setPassword(null); // Safety protection line
            return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);

        } catch (IllegalArgumentException | IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred during registration. Please try again later.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // 1. Service Layer se user authenticate karein
            User user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());

            // 2. JWT Token generate karein
            String token = jwtUtil.generateToken(user.getEmail());

            AuthResponse responsePayload = new AuthResponse(
                    token,
                    user.getRole(),
                    "Login Success! Welcome to Dashboard.",
                    user
            );

            return ResponseEntity.ok(responsePayload);

        } catch (UserException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Something went wrong during login verification.");
        }
    }
}

