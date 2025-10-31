/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Controller;

import com.example.penitenciaria.Entity.Condena;
import com.example.penitenciaria.Services.ServiceCondena;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author damian
*/

@RestController
@CrossOrigin(origins = "*")
@RequestMapping
public class ControllerCondena {
    
    @Autowired
    ServiceCondena servicio;
    
    @GetMapping
    public List<Condena> listar(){
        return servicio.listar();
    }
    
    @GetMapping("/{id}")
    public Optional<Condena> porId(@PathVariable Long id){
        return servicio.porId(id);
    }
    
    @PutMapping("/{id}")
    public void editar(@PathVariable Long id, @RequestBody Condena condena){
        condena.setIdCondena(id);
        servicio.guardar(condena);
    }
    
    @PostMapping
    public Condena guardar(@RequestBody Condena condena){
        return servicio.guardar(condena);
    }
    
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        servicio.eliminar(id);
    }
    
}
