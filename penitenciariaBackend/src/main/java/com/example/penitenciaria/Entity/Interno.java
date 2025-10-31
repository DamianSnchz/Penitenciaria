package com.example.penitenciaria.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "internos")
public class Interno {

    @Id
    @Column(name = "legajo", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long legajo;

    @Column(name = "intNombre", length = 50, nullable = false)
    private String intNombre;

    @Column(name = "intApellido", length = 50, nullable = false)
    private String intApellido;
    
    @Column(name = "intTipo", length = 4, nullable = false)
    private String intTipo;

    @Column(name = "intDni", unique = true, nullable = false)
    private String intDni;

    @Column(name = "intSexo", length = 1, nullable = false)
    private String intSexo;

    @Column(name = "intNacionalidad", length = 30, nullable = false)
    private String intNacionalidad;

    @Column(name = "intAlias", length = 30, nullable = false)
    private String intAlias;

    @Column(name = "intFechNac", nullable = false)
    private LocalDate intFechNac;

    @Column(name = "intDptoNac", length = 30, nullable = false)
    private String intDptoNac;

    @Column(name = "intPciaNac", length = 30, nullable = false)
    private String intPciaNac;

    @Column(name = "intDomicilio", length = 30, nullable = false)
    private String intDomicilio;

    @Column(name = "intEstadoCivil", length = 10, nullable = false)
    private String intEstadoCivil;

    @Column(name = "intProfesion", length = 30, nullable = false)
    private String intProfesion;

    @ManyToOne
    @JoinColumn(name = "idPenitenciaria", nullable = false)
    private Penitenciaria idPenitenciaria;

    @ManyToOne
    @JoinColumn(name = "idDelito", nullable = false)
    private Delito idDelito;

    @Column(name = "intEstado", length = 8, nullable = false)
    private String intEstado = "activo";

    // ===== CONSTRUCTORES =====
    public Interno() {
    }

    public Interno(Long legajo, String nombre, String apellido, String tipo, String dni, String sexo, String nacionalidad,
            String alias, LocalDate fechaNacimiento, String departamentoNacimiento, String provinciaNacimiento,
            String domicilio, String estadoCivil, String profesion, Penitenciaria idPenitenciaria,
            Delito idDelito, String estado) {
        this.legajo = legajo;
        this.intNombre = nombre;
        this.intApellido = apellido;
        this.intTipo = tipo;
        this.intDni = dni;
        this.intSexo = sexo;
        this.intNacionalidad = nacionalidad;
        this.intAlias = alias;
        this.intFechNac = fechaNacimiento;
        this.intDptoNac = departamentoNacimiento;
        this.intPciaNac = provinciaNacimiento;
        this.intDomicilio = domicilio;
        this.intEstadoCivil = estadoCivil;
        this.intProfesion = profesion;
        this.idPenitenciaria = idPenitenciaria;
        this.idDelito = idDelito;
        this.intEstado = estado;
    }

    // ===== GETTERS Y SETTERS =====
    public Long getLegajo() {
        return legajo;
    }

    public void setLegajo(Long legajo) {
        this.legajo = legajo;
    }

    public String getIntNombre() {
        return intNombre;
    }

    public void setIntNombre(String intNombre) {
        this.intNombre = intNombre;
    }
    
    public String getIntApellido() {
        return intApellido;
    }

    public void setIntApellido(String intApellido) {
        this.intApellido = intApellido;
    }


    public String getIntTipo() {
        return intTipo;
    }

    public void setIntTipo(String intTipo) {
        this.intTipo = intTipo;
    }

    public String getIntDni() {
        return intDni;
    }

    public void setIntDni(String intDni) {
        this.intDni = intDni;
    }

    public String getIntSexo() {
        return intSexo;
    }

    public void setIntSexo(String intSexo) {
        this.intSexo = intSexo;
    }

    public String getIntNacionalidad() {
        return intNacionalidad;
    }

    public void setIntNacionalidad(String intNacionalidad) {
        this.intNacionalidad = intNacionalidad;
    }

    public String getIntAlias() {
        return intAlias;
    }

    public void setIntAlias(String intAlias) {
        this.intAlias = intAlias;
    }

    public LocalDate getIntFechNac() {
        return intFechNac;
    }

    public void setIntFechNac(LocalDate intFechNac) {
        this.intFechNac = intFechNac;
    }

    public String getIntDptoNac() {
        return intDptoNac;
    }

    public void setIntDptoNac(String intDptoNac) {
        this.intDptoNac = intDptoNac;
    }

    public String getIntPciaNac() {
        return intPciaNac;
    }

    public void setIntPciaNac(String intPciaNac) {
        this.intPciaNac = intPciaNac;
    }

    public String getIntDomicilio() {
        return intDomicilio;
    }

    public void setIntDomicilio(String intDomicilio) {
        this.intDomicilio = intDomicilio;
    }

    public String getIntEstadoCivil() {
        return intEstadoCivil;
    }

    public void setIntEstadoCivil(String intEstadoCivil) {
        this.intEstadoCivil = intEstadoCivil;
    }

    public String getIntProfesion() {
        return intProfesion;
    }

    public void setIntProfesion(String intProfesion) {
        this.intProfesion = intProfesion;
    }

    public Penitenciaria getIdPenitenciaria() {
        return idPenitenciaria;
    }

    public void setIdPenitenciaria(Penitenciaria idPenitenciaria) {
        this.idPenitenciaria = idPenitenciaria;
    }

    public Delito getIdDelito() {
        return idDelito;
    }

    public void setIdDelito(Delito idDelito) {
        this.idDelito = idDelito;
    }

    public String getIntEstado() {
        return intEstado;
    }

    public void setIntEstado(String intEstado) {
        this.intEstado = intEstado;
    }
}
