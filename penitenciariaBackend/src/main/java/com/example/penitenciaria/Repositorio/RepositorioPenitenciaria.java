package com.example.penitenciaria.Repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.penitenciaria.Entity.Penitenciaria;
import java.util.List;

@Repository
public interface RepositorioPenitenciaria extends JpaRepository<Penitenciaria, Long>{
    
    public List<Penitenciaria> findByPenEstado(String estado);
}
