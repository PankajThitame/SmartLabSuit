package com.nivpune.SmartLabSuit.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity // Enables method-level security annotations (@PreAuthorize etc.)
public class SecurityConfig {

    // PasswordEncoder bean — required for encoding passwords
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // AuthenticationManager bean — you can inject this if needed
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    // SecurityFilterChain replaces WebSecurityConfigurerAdapter in newer Spring Boot versions
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for simplicity; enable in production with proper config
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")      // Only ADMIN role can access /admin/**
                .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN") // USER or ADMIN role for /user/**
                .requestMatchers("/", "/login", "/register", "/public/**").permitAll() // Public access to these paths
                .anyRequest().authenticated()  // All other requests require authentication
            )
            .formLogin(form -> form
                .loginPage("/login")        // Your custom login page URL (create a controller and page)
                .defaultSuccessUrl("/", true) // Redirect after successful login
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout")
                .permitAll()
            );

        return http.build();
    }
}

