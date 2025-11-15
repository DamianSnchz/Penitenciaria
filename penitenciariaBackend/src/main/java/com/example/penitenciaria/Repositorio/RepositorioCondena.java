/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.penitenciaria.Repositorio;

import com.example.penitenciaria.DTO.InformeXFecha;
import com.example.penitenciaria.Entity.Condena;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author damian
 */
@Repository
public interface RepositorioCondena extends JpaRepository<Condena, Long>{
    
    @Query("SELECT c FROM Condena c WHERE c.legajo.legajo = :legajo")
    public Optional<Condena> buscarPorLegajo(Long legajo);
    
    @Query("SELECT new com.example.penitenciaria.DTO.InformeXFecha(c.legajo.idPenitenciaria.penNom, c.idDelito.delDelito, c.legajo.intNombre,c.legajo.intApellido, c.legajo.intDni, c.conFechIniCon, c.conFechFinCon) FROM Condena c WHERE c.conEstado = 'activo'")
    public List<InformeXFecha> informeXFecha();
}
