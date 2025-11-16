package com.example.penitenciaria.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.penitenciaria.Entity.Penitenciaria;
import com.example.penitenciaria.Services.ServicePenitenciaria;

@RestController
@RequestMapping("/api/penitenciaria")
@CrossOrigin(origins = "*") // Para permitir llamadas desde el frontend
public class ControllerPenitenciaria {

    @Autowired
    private ServicePenitenciaria service;

    // Listar todas
    @GetMapping
    public List<Penitenciaria> listar() {
        return service.listar();
    }

    // Buscar por ID
    @GetMapping("/{id}")
    public Optional<Penitenciaria> obtenerPorId(@PathVariable Long id) {
        return service.porId(id);
    }

    // Crear nueva
    @PostMapping
    public Penitenciaria guardar(@RequestBody Penitenciaria penitenciaria) {
        return service.guardar(penitenciaria);
    }

    // Eliminar por ID
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }

    // Actualizar (opcional)
    @PutMapping("/{id}")
    public void editar(@PathVariable Long id, @RequestBody Penitenciaria penitenciaria) {
        penitenciaria.setIdPenitenciaria(id); // asegurarse de que se actualiza la entidad correcta
        service.guardar(penitenciaria);
    }
}
