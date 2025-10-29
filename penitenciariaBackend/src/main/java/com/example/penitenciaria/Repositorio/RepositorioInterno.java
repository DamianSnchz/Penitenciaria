/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.penitenciaria.Repositorio;

import com.example.penitenciaria.Entity.Interno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author damian
 */
@Repository
public interface RepositorioInterno extends JpaRepository<Interno, Long>{
       
}
