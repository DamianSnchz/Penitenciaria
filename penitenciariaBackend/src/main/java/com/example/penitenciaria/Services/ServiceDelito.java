/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Services;

import com.example.penitenciaria.Entity.Delito;
import com.example.penitenciaria.Repositorio.RepositorioDelito;
import java.util.List;
import javax.management.RuntimeErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author damian
 */
@Service
public class ServiceDelito {
    @Autowired
    RepositorioDelito repositorio;
    
    public List<Delito> listar(){
        return repositorio.findAll();
    }
    
    public void eliminar(Long id){
        Delito delito = repositorio.findById(id).orElseThrow(()-> new RuntimeException("Error al encontrar la penitenciaria: " + id));
        
        if(delito != null){
            delito.setDelEstado("inactivo");
            repositorio.save(delito);
        }
    }
    
    public Delito porId(Long id){
        return repositorio.findById(id).orElseThrow(() -> new RuntimeException("Delito no encontrado: " + id));
    }
    
    public Delito guardar(Delito delito){
        return repositorio.save(delito);
    }
    
}
