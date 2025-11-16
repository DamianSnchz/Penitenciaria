/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.penitenciaria.Repositorio;

import com.example.penitenciaria.Entity.Delito;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author damian
 */

@Repository
public interface RepositorioDelito extends JpaRepository<Delito , Long>{
    
    public List<Delito> findByDelEstado(String estado);
}
