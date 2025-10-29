/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Services;

import com.example.penitenciaria.Entity.Delito;
import com.example.penitenciaria.Entity.Interno;
import com.example.penitenciaria.Entity.Penitenciaria;
import com.example.penitenciaria.Repositorio.RepositorioDelito;
import com.example.penitenciaria.Repositorio.RepositorioInterno;
import com.example.penitenciaria.Repositorio.RepositorioPenitenciaria;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author damian
 */

@Service
public class ServiceInterno {
    @Autowired
    private RepositorioInterno r;
    
    @Autowired
    private RepositorioPenitenciaria rp;
    
    @Autowired
    private RepositorioDelito rd;
    
    public List<Interno> listar(){
        return r.findAll();
    }
    
    public void eliminar(Long id){
        r.deleteById(id);
    }
    
    public Interno guardar(Interno interno){
        Interno internoAsignado = asignarPenitenciaria(interno);
        internoAsignado = asignarDelito(interno);
        
        return r.save(internoAsignado);
    }
    
    public Interno asignarPenitenciaria(Interno interno){
        Long id = null;
        //verifico si el id provenientes no son nulos
        if(interno.getIdPenitenciaria() != null && interno.getIdPenitenciaria().getIdPenitenciaria() != null ){
            id = interno.getIdPenitenciaria().getIdPenitenciaria();
        }
        
        if(id != null){
            final Long finalId= id;
            Penitenciaria p = rp.findById(id).orElseThrow(() -> new RuntimeException("Error al encontrar penitenciaria: " + finalId));
            interno.setIdPenitenciaria(p);
        }
        return interno;
    }
    
    
    public Interno asignarDelito(Interno interno){
        Long id = null;
        //verifico si el id provenientes no son nulos
        if(interno.getIdDelito() != null && interno.getIdDelito().getId() != null ){
            id = interno.getIdDelito().getId();
        }
        
        if(id != null){
            final Long finalId= id;
            Delito d = rd.findById(id).orElseThrow(() -> new RuntimeException("Error al encontrar penitenciaria: " + finalId));
            interno.setIdDelito(d);
        }
        return interno;
    }
    
    
    public Optional<Interno> porId(Long id){
        return r.findById(id);
    }
    
}
