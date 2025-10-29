/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Controller;

import com.example.penitenciaria.Entity.Interno;
import com.example.penitenciaria.Services.ServiceInterno;
import com.example.penitenciaria.Services.ServicePenitenciaria;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author damian
 */
@Controller
@RequestMapping("/api/interno")
@CrossOrigin(origins = "*")
public class ControllerInterno {
    
    @Autowired
    private ServiceInterno servicio;
    
    @GetMapping
    public List<Interno> listar(){
        return servicio.listar();
    }
    
    @GetMapping("/¨{id}")
    public Optional<Interno> porId(@PathVariable Long id){
        return servicio.porId(id);
    }
    
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        servicio.eliminar(id);
    }
    
    @PostMapping
    public Interno guardar(@RequestBody Interno interno){
        return servicio.guardar(interno);
    }
    
    
    @PutMapping("{id}")
    public void editar(@PathVariable Long id, @RequestBody Interno interno){
        interno.setLegajo(id); //nos aseguramos de que edite el registro correcto
        servicio.guardar(interno);
    }
}
