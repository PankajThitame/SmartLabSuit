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
        .csrf(csrf -> csrf.disable())
        .cors() // ⬅️ Important for CORS
        .and()
        .authorizeHttpRequests(auth -> auth
    .requestMatchers("/api/users/login", "/register", "/api/public/**").permitAll()
    .anyRequest().authenticated()
)
.formLogin(form -> form.disable())

        .formLogin(form -> form.disable()) // ⬅️ DISABLE form login to avoid redirect
        .logout(logout -> logout
            .logoutUrl("/api/users/logout")
            .logoutSuccessUrl("/api/users/login?logout")
            .permitAll()
        );

    return http.build();
}

}

