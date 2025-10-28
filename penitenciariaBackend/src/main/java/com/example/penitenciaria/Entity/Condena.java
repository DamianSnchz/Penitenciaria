package com.example.penitenciaria.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "condenas")
public class Condena {

    @Id
    @Column(name = "idCondena")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCondena;

    @ManyToOne
    @JoinColumn(name = "idDelito", nullable = false)
    private Delito delito;

    @ManyToOne
    @JoinColumn(name = "legajo", nullable = false)
    private Interno interno;

    @Column(name = "duracion", nullable = false)
    private Integer duracion = 0;

    @Column(name = "fechaFinCondena")
    private LocalDate fechaFinCondena;

    @Column(name = "motRedPena", length = 200)
    private String motivoReduccionPena;

    @Column(name = "tiempoRedCond")
    private Long tiempoReduccionCond;

    @Column(name = "estado", length = 8, nullable = false)
    private String estado = "activo";

    // ===== CONSTRUCTORES =====
    public Condena() {}

    public Condena(Long idCondena, Delito delito, Interno interno, Integer duracion,
                   LocalDate fechaFinCondena, String motivoReduccionPena,
                   Long tiempoReduccionCond, String estado) {
        this.idCondena = idCondena;
        this.delito = delito;
        this.interno = interno;
        this.duracion = duracion;
        this.fechaFinCondena = fechaFinCondena;
        this.motivoReduccionPena = motivoReduccionPena;
        this.tiempoReduccionCond = tiempoReduccionCond;
        this.estado = estado;
    }

    // ===== GETTERS Y SETTERS =====
    public Long getIdCondena() { return idCondena; }
    public void setIdCondena(Long idCondena) { this.idCondena = idCondena; }

    public Delito getDelito() { return delito; }
    public void setDelito(Delito delito) { this.delito = delito; }

    public Interno getInterno() { return interno; }
    public void setInterno(Interno interno) { this.interno = interno; }

    public Integer getDuracion() { return duracion; }
    public void setDuracion(Integer duracion) { this.duracion = duracion; }

    public LocalDate getFechaFinCondena() { return fechaFinCondena; }
    public void setFechaFinCondena(LocalDate fechaFinCondena) { this.fechaFinCondena = fechaFinCondena; }

    public String getMotivoReduccionPena() { return motivoReduccionPena; }
    public void setMotivoReduccionPena(String motivoReduccionPena) { this.motivoReduccionPena = motivoReduccionPena; }

    public Long getTiempoReduccionCond() { return tiempoReduccionCond; }
    public void setTiempoReduccionCond(Long tiempoReduccionCond) { this.tiempoReduccionCond = tiempoReduccionCond; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}