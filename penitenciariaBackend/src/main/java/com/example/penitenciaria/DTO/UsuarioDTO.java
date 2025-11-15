/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.DTO;

/**
 *
 * @author damian
 */
public class UsuarioDTO {
    private String usuUser;
    private String usuRol;

    public UsuarioDTO(String usuUser, String usuRol) {
        this.usuUser = usuUser;
        this.usuRol = usuRol;
    }
    
    

    public void setUsuUser(String usuUser) {
        this.usuUser = usuUser;
    }

    public void setUsuRol(String usuRol) {
        this.usuRol = usuRol;
    }
    
    
    public String getUsuUser() {
        return usuUser;
    }

    public String getUsuRol() {
        return usuRol;
    }
    
}
