/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.DTO;

import java.time.LocalDate;

/**
 *
 * @author damian
 */
public class InformeIntXProfesion {
    private String intProfesion;
    private String intNombre;
    private  String intApellido;
    private String intDni;
    private LocalDate intFechNac;

    public InformeIntXProfesion(String intProfesion, String intNombre, String intApellido, String intDni, LocalDate intFechNac) {
        this.intProfesion = intProfesion;
        this.intNombre = intNombre;
        this.intApellido = intApellido;
        this.intDni = intDni;
        this.intFechNac = intFechNac;
    }

    
    
    
    /**
     * @return the intProfesion
     */
    public String getIntProfesion() {
        return intProfesion;
    }

    /**
     * @param intProfesion the intProfesion to set
     */
    public void setIntProfesion(String intProfesion) {
        this.intProfesion = intProfesion;
    }

    /**
     * @return the intNombre
     */
    public String getIntNombre() {
        return intNombre;
    }

    /**
     * @param intNombre the intNombre to set
     */
    public void setIntNombre(String intNombre) {
        this.intNombre = intNombre;
    }

    /**
     * @return the intApellido
     */
    public String getIntApellido() {
        return intApellido;
    }

    /**
     * @param intApellido the intApellido to set
     */
    public void setIntApellido(String intApellido) {
        this.intApellido = intApellido;
    }

    /**
     * @return the intDni
     */
    public String getIntDni() {
        return intDni;
    }

    /**
     * @param intDni the intDni to set
     */
    public void setIntDni(String intDni) {
        this.intDni = intDni;
    }

    /**
     * @return the intFechNac
     */
    public LocalDate getIntFechNac() {
        return intFechNac;
    }

    /**
     * @param intFechNac the intFechNac to set
     */
    public void setIntFechNac(LocalDate intFechNac) {
        this.intFechNac = intFechNac;
    }
    
}
