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

    @Column(name = "penDireccion", nullable = false, length = 50)
    private String penDireccion;

    @Column(name = "penCapacidad", nullable = false)
    private Integer penCapacidad;

    @Column(name = "penTipo", nullable = false, length = 7)
    private String penTipo;
    
    @Column(name = "penLocalidad", nullable = false)
    private String penLocalidad;
    
    @Column(name = "penEstado", nullable = false, length = 8)
    private String penEstado = "activo";

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

    public Penitenciaria(Long idPenitenciaria, String penNom, String penDireccion, Integer penCapacidad, String penTipo) {
        this.idPenitenciaria = idPenitenciaria;
        this.penNom = penNom;
        this.penDireccion = penDireccion;
        this.penCapacidad = penCapacidad;
        this.penTipo = penTipo;
    }

    // toString(), equals() y hashCode() si lo necesitás

    /**
     * @return the penEstado
     */
    public String getPenEstado() {
        return penEstado;
    }

    /**
     * @param penEstado the penEstado to set
     */
    public void setPenEstado(String penEstado) {
        this.penEstado = penEstado;
    }

    /**
     * @return the penLocalidad
     */
    public String getPenLocalidad() {
        return penLocalidad;
    }

    /**
     * @param penLocalidad the penLocalidad to set
     */
    public void setPenLocalidad(String penLocalidad) {
        this.penLocalidad = penLocalidad;
    }
}

