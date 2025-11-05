/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.penitenciaria.Repositorio;

import com.example.penitenciaria.DTO.InformeIntXPenXDel;
import com.example.penitenciaria.DTO.InformeIntXProfesion;
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
       
    
    
    @Query("SELECT new com.example.penitenciaria.DTO.InformeIntXPenXDel(p.penNom, d.delDelito, i.intNombre, i.intApellido) FROM Interno i JOIN i.idPenitenciaria p JOIN i.idDelito d WHERE i.intEstado = 'activo' ORDER BY p.penNom, d.delDelito")
    public List<InformeIntXPenXDel> informeIntXPenXDel();
    
    
    
    @Query("SELECT new com.example.penitenciaria.DTO.InformeIntXProfesion(i.intProfesion, i.intNombre, i.intApellido, i.intDni, i.intFechNac) FROM Interno i WHERE i.intEstado = 'activo' AND i.intProfesion IS NOT NULL ORDER BY i.intProfesion")
    public List<InformeIntXProfesion> informeIntXProfesion();
    
}
