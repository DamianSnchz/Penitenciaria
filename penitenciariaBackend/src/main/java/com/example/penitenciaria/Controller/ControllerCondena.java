/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Controller;

import com.example.penitenciaria.DTO.InformeXFecha;
import com.example.penitenciaria.Entity.Condena;
import com.example.penitenciaria.Services.ServiceCondena;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api/condena")
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
    
    /*@GetMapping("/{id}")
    public ResponseEntity<?> porId(@PathVariable Long id){
        return servicio.porId(id).map(element -> {
            if(element.getConEstado().equals("activo")){
                return ResponseEntity.ok(element);
            }else{
                Map<String, String> msjError = new HashMap<>();
                msjError.put("error", "Usuario inactivo");
                return ResponseEntity.ofNullable(msjError);
            }
        }).orElse(null);
    }*/
    
    @PutMapping("/{id}")
    public void editar(@PathVariable Long id, @RequestBody Condena condena){
        Integer duracion, tiempoReducido;
        duracion = condena.getConDuracion();
        tiempoReducido = condena.getConTiempoRedCond();
        //decremento la duracion con el tiempo reducido
        duracion = duracion - tiempoReducido;
        //me aseguro de que sea la condena correcta
        condena.setIdCondena(id);
        //obtengo la nueva fecha
        LocalDate fecha = servicio.calcularFinCondena(duracion,condena.getConFechIniCon());
        //modifico la duracion
        condena.setConDuracion(duracion);
        //modifico fecha de fin de condena
        condena.setConFechFinCon(fecha);
        //guardo la condena
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
    
    //con RequesParam buscara el valor despues de '?'
    @GetMapping("/fecha")
    public List<InformeXFecha> informeXFecha(@RequestParam("fecha") LocalDate fecha){
        return servicio.informeXFecha(fecha);
    }
    
}
