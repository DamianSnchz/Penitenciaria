/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Controller;

import com.example.penitenciaria.Entity.Delito;
import com.example.penitenciaria.Services.ServiceDelito;
import java.util.List;
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
@RequestMapping("/api/delito")
@CrossOrigin(origins = "*")
public class ControllerDelito {
    
    @Autowired
    ServiceDelito servicio;
    
    @GetMapping
    public List<Delito> listar(){
        return servicio.listar();
    }
    
    @PostMapping
    public void guardar(@RequestBody Delito delito){
        servicio.guardar(delito);
    }
    
    
    @PutMapping("/{id}")
    public void editar(@PathVariable Long id, @RequestBody Delito delito){
        delito.setIdDelito(id);
        servicio.guardar(delito);
    }
    
    @GetMapping("/{id}")
    public Delito porId(@PathVariable Long id){
        return servicio.porId(id);
    }
    
}
