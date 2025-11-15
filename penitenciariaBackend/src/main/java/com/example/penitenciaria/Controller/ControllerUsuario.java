/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Controller;

import com.example.penitenciaria.DTO.LoginDTO;
import com.example.penitenciaria.DTO.UsuarioDTO;
import com.example.penitenciaria.Entity.Usuario;
import com.example.penitenciaria.Services.ServicioUsuario;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/api/usuario")
@CrossOrigin("*")
public class ControllerUsuario {
    @Autowired
    ServicioUsuario servicio;
    
    @GetMapping
    public List<Usuario> listar(){
        return servicio.listar();
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> buscarPorName(@RequestBody LoginDTO loginRequest){
        
        //verifico si existe y si las contraseñas coiciden
        boolean verificacion = servicio.validarUsuario(loginRequest.getUser(),loginRequest.getPassword());
        if(verificacion){
            //busco el usuario por nombre
            UsuarioDTO usuario = servicio.buscarPorName(loginRequest.getUser());
            return ResponseEntity.ok(usuario);
        }else{
            // creo un objeto Map para generar un objeto con la clave "error" y su valor ".."
            //con new HashMap<>() creo un "diccionario" vacio y con <String, String> le indico que la clave y el valor es de tipo String
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Usuario o contraseña incorrectos");
            
            //Retorno el objeto Map generado.
            //con "HttpStatus.UNAUTHORIZED" le indico que es un error 401 "error de autorizacion"
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
    
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        servicio.eliminar(id);
    }
    
    @PutMapping
    public void guardar(@RequestBody Usuario usuario){
        servicio.guardar(usuario);
    }
    
    @PostMapping("/{id}")
    public void editar(@PathVariable Long id,@RequestBody Usuario usuario){
        usuario.setId(id);
        servicio.guardar(usuario);
    }
}
