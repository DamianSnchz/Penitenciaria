/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.DTO;

/**
 *
 * @author damian
 */
public class InformeIntXPenXDel {
    private String penNom;
    private String delDelito;
    private String nombre;

    public InformeIntXPenXDel(String penNom, String delDelito, String nombre) {
        this.penNom = penNom;
        this.delDelito = delDelito;
        this.nombre = nombre;
    }

    
    
    
    
    /**
     * @return the penNom
     */
    public String getPenNom() {
        return penNom;
    }

    /**
     * @param penNom the penNom to set
     */
    public void setPenNom(String penNom) {
        this.penNom = penNom;
    }

    /**
     * @return the delDelito
     */
    public String getDelDelito() {
        return delDelito;
    }

    /**
     * @param delDelito the delDelito to set
     */
    public void setDelDelito(String delDelito) {
        this.delDelito = delDelito;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param intNom the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
