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
    private String intNombre;
    private String intApellido;

    public InformeIntXPenXDel(String penNom, String delDelito, String intNombre, String intApellido) {
        this.penNom = penNom;
        this.delDelito = delDelito;
        this.intNombre = intNombre;
        this.intApellido = intApellido;
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
     * @return the intNombre
     */
    public String getIntNombre() {
        return intNombre;
    }

    /**
     * @param intNom the intNombre to set
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
}
