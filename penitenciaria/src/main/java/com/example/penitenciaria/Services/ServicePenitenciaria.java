package com.example.penitenciaria.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.penitenciaria.Entity.Penitenciaria;
import com.example.penitenciaria.Repositorio.RepositorioPenitenciaria;

@Service
public class ServicePenitenciaria {

    //enlazo mi atributo
    @Autowired
    private RepositorioPenitenciaria p;

    public List<Penitenciaria> listar(){
        return p.findAll();
    }

    public Optional<Penitenciaria> porId(Long id){
        return p.findById(id);
    }

    public Penitenciaria guardar(Penitenciaria penitenciaria){
        return p.save(penitenciaria);
    }

    public void eliminar(Long id){
        p.deleteById(id);
    }
        
}
