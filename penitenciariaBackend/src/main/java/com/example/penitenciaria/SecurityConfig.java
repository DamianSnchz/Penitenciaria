/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * Define el "Bean" del encriptador.
     * Spring usará esto automáticamente cuando se inyecte un 'PasswordEncoder'.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Configura la cadena de filtros de seguridad.
     * ¡MUY IMPORTANTE! Sin esto, Spring Security bloqueará toda tu API.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Deshabilitar CSRF (Cross-Site Request Forgery)
            // Es común para APIs stateless que no usan sesiones/cookies.
            .csrf(csrf -> csrf.disable())
            
            // 2. Configurar las reglas de autorización
            .authorizeHttpRequests(auth -> auth
                // Permite que CUALQUIERA acceda a tu API de login
                .requestMatchers("/api/usuario/login").permitAll()
                
                // Permite el acceso a todas las demás rutas de tu API
                // (Puedes hacerlo más restrictivo después si lo necesitas)
                .requestMatchers("/api/**").permitAll()
                
                // Requiere autenticación para cualquier otra ruta (ej: páginas de admin)
                .anyRequest().authenticated()
            );
            
        return http.build();
    }
}
