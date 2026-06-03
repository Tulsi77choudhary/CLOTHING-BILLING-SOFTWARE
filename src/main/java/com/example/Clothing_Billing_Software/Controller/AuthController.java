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
            registeredUser.setPassword(null);
            return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);

        } catch (IllegalArgumentException | IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred during registration. Please try again later.");
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws UserException {
        User user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(new AuthResponse(token, "Login Success", user));
    }
}

