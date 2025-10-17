package com.example.penitenciaria.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "penitenciaria")
public class Penitenciaria {

    @Id
    @Column(name = "idPenitenciaria", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPenitenciaria;

    @Column(name = "penNom", nullable = false, unique = true, length = 50)
    private String penNom;

    @Column(name = "penPcia", nullable = false, length = 30)
    private String penPcia;

    @Column(name = "penDireccion", nullable = false, length = 50)
    private String penDireccion;

    @Column(name = "penCapacidad", nullable = false)
    private Integer penCapacidad;

    @Column(name = "penTipo", nullable = false, length = 7)
    private String penTipo;

    // Getters y Setters

    public Long getIdPenitenciaria() {
        return idPenitenciaria;
    }

    public void setIdPenitenciaria(Long idPenitenciaria) {
        this.idPenitenciaria = idPenitenciaria;
    }

    public String getPenNom() {
        return penNom;
    }

    public void setPenNom(String penNom) {
        this.penNom = penNom;
    }

    public String getPenPcia() {
        return penPcia;
    }

    public void setPenPcia(String penPcia) {
        this.penPcia = penPcia;
    }

    public String getPenDireccion() {
        return penDireccion;
    }

    public void setPenDireccion(String penDireccion) {
        this.penDireccion = penDireccion;
    }

    public Integer getPenCapacidad() {
        return penCapacidad;
    }

    public void setPenCapacidad(Integer penCapacidad) {
        this.penCapacidad = penCapacidad;
    }

    public String getPenTipo() {
        return penTipo;
    }

    public void setPenTipo(String penTipo) {
        this.penTipo = penTipo;
    }

    // Opcional: constructor vacío y con parámetros

    public Penitenciaria() {
    }

    public Penitenciaria(Long idPenitenciaria, String penNom, String penPcia, String penDireccion, Integer penCapacidad, String penTipo) {
        this.idPenitenciaria = idPenitenciaria;
        this.penNom = penNom;
        this.penPcia = penPcia;
        this.penDireccion = penDireccion;
        this.penCapacidad = penCapacidad;
        this.penTipo = penTipo;
    }

    // toString(), equals() y hashCode() si lo necesitás
}

