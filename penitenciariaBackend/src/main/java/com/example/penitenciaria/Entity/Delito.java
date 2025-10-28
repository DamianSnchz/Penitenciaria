package com.example.penitenciaria.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "delitos")
public class Delito {

    @Id
    @Column(name = "idDelito", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDelito;

    @Column(name = "delDelito", length = 30, nullable = false)
    private String descripcion;

    @Column(name = "delJuez", length = 50, nullable = false)
    private String juez;

    @Column(name = "delFechDet", nullable = false)
    private LocalDate fechaDetencion;

    @Column(name = "delFechIniCondena", nullable = false)
    private LocalDate fechaInicioCondena;

    @Column(name = "delEstado", length = 8, nullable = false)
    private String estado = "activo";

    @Column(name = "delDuracion", nullable = false)
    private Long duracion; // En días, meses o años según tu modelo lógico

    // ===== CONSTRUCTORES =====
    public Delito() {}

    public Delito(Long id, String descripcion, String juez, LocalDate fechaDetencion,
                  LocalDate fechaInicioCondena, String estado, Long duracion) {
        this.idDelito = idDelito;
        this.descripcion = descripcion;
        this.juez = juez;
        this.fechaDetencion = fechaDetencion;
        this.fechaInicioCondena = fechaInicioCondena;
        this.estado = estado;
        this.duracion = duracion;
    }

    // ===== GETTERS Y SETTERS =====
    public Long getId() { return idDelito; }
    public void setId(Long id) { this.idDelito = id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getJuez() { return juez; }
    public void setJuez(String juez) { this.juez = juez; }

    public LocalDate getFechaDetencion() { return fechaDetencion; }
    public void setFechaDetencion(LocalDate fechaDetencion) { this.fechaDetencion = fechaDetencion; }

    public LocalDate getFechaInicioCondena() { return fechaInicioCondena; }
    public void setFechaInicioCondena(LocalDate fechaInicioCondena) { this.fechaInicioCondena = fechaInicioCondena; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public Long getDuracion() { return duracion; }
    public void setDuracion(Long duracion) { this.duracion = duracion; }
}