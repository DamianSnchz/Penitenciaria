/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Services;

import com.example.penitenciaria.Entity.Condena;
import com.example.penitenciaria.Repositorio.RepositorioCondena;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author damian
 */
@Service
public class ServiceCondena {
    
    @Autowired
    RepositorioCondena repositorio;
    
    @Transactional(readOnly = true)
    public List<Condena> listar(){
        return repositorio.findAll();
    }
    
    @Transactional(readOnly = true)
    public Optional<Condena> porId(Long id){
        return repositorio.findById(id);
    }
    
    @Transactional
    public Condena guardar(Condena condena){
        return repositorio.save(condena);
    }
    
    @Transactional
    public void eliminar(Long id){
        porId(id).ifPresent(condena -> {
            condena.setConEstado("inactivo");
            repositorio.save(condena);
        });
    }
    
    @Transactional
    public void eliminarPorInterno(Long legajo){
        Optional<Condena> condena = repositorio.buscarPorLegajo(legajo);
        condena.ifPresent(element -> {
                element.setConEstado("inactivo");
                repositorio.save(element);
        });
    }
    
    
    public LocalDate calcularFinCondena(Integer duracion, LocalDate fechaInicio){
        if(duracion == null || fechaInicio == null){
            //si no existe ninguno para evitar errores retorno null
            return null;
        }
        //retorno una fecha dependiendo la duracion
        return fechaInicio.plusYears(duracion);
    }
    
    public void limiteDuracion(){
    
    }
}
