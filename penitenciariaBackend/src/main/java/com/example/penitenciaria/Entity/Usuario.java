/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

/**
 * Entidad JPA que mapea la tabla 'usuarios' de la base de datos.
 */
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "usuUser", nullable = false, length = 30)
    private String usuUser;

    @Column(name = "usuRol", nullable = false, length = 50)
    private String usuRol;

    @Column(name = "usuPassword", nullable = false, length = 64)
    private String usuPassword;

    // Se inicializa con el valor por defecto "activo"
    @Column(name = "usuEstado", nullable = false, length = 8)
    private String usuEstado = "activo";

    // 🔸 Constructores
    
    /**
     * Constructor vacío requerido por JPA.
     */
    public Usuario() {
    }

    /**
     * Constructor para crear un nuevo usuario (sin ID).
     */
    public Usuario(String usuUser, String usuRol, String usuPassword) {
        this.usuUser = usuUser;
        this.usuRol = usuRol;
        this.usuPassword = usuPassword;
        this.usuEstado = "activo"; // Asegura el estado por defecto
    }

    // 🔸 Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsuUser() {
        return usuUser;
    }

    public void setUsuUser(String usuUser) {
        this.usuUser = usuUser;
    }

    public String getUsuRol() {
        return usuRol;
    }

    public void setUsuRol(String usuRol) {
        this.usuRol = usuRol;
    }

    public String getUsuPassword() {
        return usuPassword;
    }

    public void setUsuPassword(String usuPassword) {
        this.usuPassword = usuPassword;
    }

    public String getUsuEstado() {
        return usuEstado;
    }

    public void setUsuEstado(String usuEstado) {
        this.usuEstado = usuEstado;
    }
}