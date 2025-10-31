/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.penitenciaria.Repositorio;

import com.example.penitenciaria.DTO.InformeIntXPenXDel;
import com.example.penitenciaria.Entity.Interno;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author damian
 */
@Repository
public interface RepositorioInterno extends JpaRepository<Interno, Long>{
       
    
    // El sistema deberá realizar un informe de la cantidad de internos 
    //por penitenciaria por delitos
    
    @Query("SELECT new com.example.penitenciaria.DTO.InformeIntXPenXDel(p.penNom, d.delDelito, CONCAT(i.intNombre, ' ', i.intApellido)) FROM Interno i JOIN i.idPenitenciaria p JOIN i.idDelito d WHERE i.intEstado = 'activo' GROUP BY p.penNom, d.delDelito, i.intNombre, i.intApellido")
    public List<InformeIntXPenXDel> informeIntXPenXDel();
    
}
