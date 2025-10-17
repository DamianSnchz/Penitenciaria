package com.example.penitenciaria.Repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.penitenciaria.Entity.Penitenciaria;

@Repository
public interface RepositorioPenitenciaria extends JpaRepository<Penitenciaria, Long>{
    
}
