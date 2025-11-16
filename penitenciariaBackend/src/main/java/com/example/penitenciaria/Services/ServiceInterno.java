/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.Services;

import com.example.penitenciaria.DTO.InformeIntXPenXDel;
import com.example.penitenciaria.DTO.InformeIntXProfesion;
import com.example.penitenciaria.Entity.Condena;
import com.example.penitenciaria.Entity.Delito;
import com.example.penitenciaria.Entity.Interno;
import com.example.penitenciaria.Entity.Penitenciaria;
import com.example.penitenciaria.Repositorio.RepositorioDelito;
import com.example.penitenciaria.Repositorio.RepositorioInterno;
import com.example.penitenciaria.Repositorio.RepositorioPenitenciaria;
import java.time.LocalDate;
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
public class ServiceInterno {

    @Autowired
    private RepositorioInterno r;

    @Autowired
    private RepositorioPenitenciaria rp;

    @Autowired
    private RepositorioDelito rd;
    
    @Autowired
    private ServiceDelito servicioDelito;
    
    @Autowired
    private ServiceCondena servicioCondena;

    public List<Interno> listar() {
        return r.findByIntEstado("activo");
    }

    @Transactional
    public void eliminar(Long id) {
        Interno interno = r.findById(id).orElseThrow(()-> new RuntimeException("Error al encontrar la penitenciaria: " + id));
        
        if(interno != null){
            //doy de baja al interno
            interno.setIntEstado("inactivo");
            r.save(interno);
            //doy de baja al delito vinculado
            servicioDelito.eliminar(interno.getIdDelito().getIdDelito());
            //doy de baja la condena viculada
            servicioCondena.eliminarPorInterno(interno.getLegajo());
        }
    }

    //notacion transactional para que si algo sale mal en el guardado se realice un rollback y nose registra nada en la BD
    @Transactional
    public Interno guardar(Interno interno) {
        Interno internoAsignado = asignarPenitenciaria(interno);
        internoAsignado = asignarDelito(interno);
        //registro el interno en su tabla
        internoAsignado = r.save(internoAsignado);
        //metodo para asignar un registro en la tabla condena
        registrarCondena(internoAsignado, internoAsignado.getIdDelito());
        return internoAsignado;
    }

    public Interno asignarPenitenciaria(Interno interno) {
        Long id = null;
        //verifico si el id provenientes no son nulos
        if (interno.getIdPenitenciaria() != null && interno.getIdPenitenciaria().getIdPenitenciaria() != null) {
            id = interno.getIdPenitenciaria().getIdPenitenciaria();
        }

        if (id != null) {
            final Long finalId = id;
            //si no es nulo busco la penitenciaria en la tabla penitenciaria para asociarlo al interno
            Penitenciaria p = rp.findById(id).orElseThrow(() -> new RuntimeException("Error al encontrar penitenciaria: " + finalId));
            interno.setIdPenitenciaria(p);
        }
        return interno;
    }

    public Interno asignarDelito(Interno interno) {
        Delito delito = interno.getIdDelito();
        System.out.println(delito);
        //verifico si exite el objeto delito
        if (delito != null) {
            //verifico si existe en la tabla
            if (delito.getIdDelito() != null) {
                final Long id = delito.getIdDelito();
                //busco el delito en la tabla delito
                Delito delitoExistente = rd.findById(id).orElseThrow(() -> new RuntimeException("Error al encontrar delito: " + id));
                interno.setIdDelito(delitoExistente);
            }else{
                //si todavia el delito no existe en la tabla lo guardo
                interno.setIdDelito(rd.save(delito));
            }
        }

        return interno;
    }

    public void registrarCondena(Interno interno, Delito delito){
        //creo un objeto con id nulo para que se guarde en la tabla condena
        Condena condena = new Condena(null, delito, interno);
        //agrego la duracion
        condena.setConDuracion(delito.getDelDuracion());
        //agrego fecha inicio condena
        condena.setConFechIniCon(delito.getDelFechIniCondena());
        //calculo la fecha del fin de condena
        LocalDate fechaFinCondena = servicioCondena.calcularFinCondena(delito.getDelDuracion(), delito.getDelFechIniCondena());
        condena.setConFechFinCon(fechaFinCondena);
        //guardo el registro en la tabla
        servicioCondena.guardar(condena);
    }
    
    @Transactional(readOnly = true)
    public Optional<Interno> porId(Long id) {
        return r.findById(id);
    }
    
    
    //Generar informe de cantidad de internos por penitenciaria y por delitos
    @Transactional(readOnly = true)
    public List<InformeIntXPenXDel> informeIntPenDel(){
        return r.informeIntXPenXDel();
    }
     
    //generar informe de internos por profesion
    @Transactional(readOnly = true)
    public List<InformeIntXProfesion> informeIntProfesion(){
        return r.informeIntXProfesion();
    }

}
