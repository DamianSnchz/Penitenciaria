/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.penitenciaria.Repositorio;

import com.example.penitenciaria.DTO.UsuarioDTO;
import com.example.penitenciaria.Entity.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author damian
 */
public interface RepositorioUsuario extends JpaRepository<Usuario, Long>{
    
    @Query("SELECT new com.example.penitenciaria.DTO.UsuarioDTO(u.usuUser, u.usuRol) FROM Usuario u WHERE u.usuUser = :name AND u.usuEstado = 'activo'")
    public Optional<UsuarioDTO> buscarPorName(String name);
    
    @Query("SELECT u FROM Usuario u WHERE u.usuUser = :name AND u.usuEstado = 'activo'")
    public Optional<Usuario> validarUsuario(String name);
    
    public List<Usuario> findByUsuEstado(String estado);
    
}
