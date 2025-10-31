/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Services;

import com.example.penitenciaria.Entity.Condena;
import com.example.penitenciaria.Repositorio.RepositorioCondena;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author damian
 */
@Service
public class ServiceCondena {
    
    @Autowired
    RepositorioCondena repositorio;
    
    public List<Condena> listar(){
        return repositorio.findAll();
    }
    
    public Optional<Condena> porId(Long id){
        return repositorio.findById(id);
    }
    
    public Condena guardar(Condena condena){
        return repositorio.save(condena);
    }
    
    public void eliminar(Long id){
        porId(id).ifPresent(condena -> {
            condena.setConEstado("inactivo");
            repositorio.save(condena);
        });
    }
    
}
