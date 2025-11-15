/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Services;

import com.example.penitenciaria.DTO.UsuarioDTO;
import com.example.penitenciaria.Entity.Usuario;
import com.example.penitenciaria.Repositorio.RepositorioUsuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author damian
 */
@Service
public class ServicioUsuario {
    @Autowired
    RepositorioUsuario repositorio;
    
    @Autowired
    private PasswordEncoder seguridad;
    
    
    @Transactional(readOnly = true)
    public List<Usuario> listar(){
        return repositorio.findByUsuEstado("activo");
    }
    
    @Transactional(readOnly = true)
    public Optional<Usuario> porId(Long id){
        return repositorio.findById(id);
    }
    
    @Transactional
    public void eliminar(Long id){
        porId(id).ifPresent(usuario -> {
            usuario.setUsuEstado("inactivo");
            repositorio.save(usuario);
        });
    }
    
    @Transactional(readOnly = true)
    public boolean validarUsuario(String user, String password){
        return repositorio.validarUsuario(user)
                .map(element -> {
                    return seguridad.matches(password, element.getUsuPassword());//retorna true si son iguales
                })
                .orElse(false);//retorna false si el elemento no existe
    }
    
    @Transactional(readOnly = true)
    public UsuarioDTO buscarPorName(String user){
        return repositorio.buscarPorName(user)
                .map(element -> {
                    return element;//si el usuario existe devuelvo el objeto
                })
                .orElse(null);//retorna null si no existe
    }
    
    
    
    @Transactional
    public void guardar(Usuario usuario){
        //encriptar contraseña
        String passwordEncriptada = seguridad.encode(usuario.getUsuPassword());
        usuario.setUsuPassword(passwordEncriptada);
        repositorio.save(usuario);
    }
    
    
}
