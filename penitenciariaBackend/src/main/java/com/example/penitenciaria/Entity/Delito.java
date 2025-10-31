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
    private String delDelito;

    @Column(name = "delJuez", length = 50, nullable = false)
    private String delJuez;

    @Column(name = "delFechDet", nullable = false)
    private LocalDate delFechDet;

    @Column(name = "delFechIniCondena", nullable = false)
    private LocalDate delFechIniCondena;

    @Column(name = "delEstado", length = 8, nullable = false)
    private String delEstado = "activo";

    @Column(name = "delDuracion", nullable = false)
    private Long delDuracion; // En días, meses o años según tu modelo lógico

    // ===== CONSTRUCTORES =====
    public Delito() {
    }

    public Delito(Long idDelito, String delito, String juez, LocalDate fechaDetencion,
            LocalDate fechaInicioCondena, String estado, Long duracion) {
        this.idDelito = idDelito;
        this.delDelito = delito;
        this.delJuez = juez;
        this.delFechDet = fechaDetencion;
        this.delFechIniCondena = fechaInicioCondena;
        this.delEstado = estado;
        this.delDuracion = duracion;
    }

    // ===== GETTERS Y SETTERS =====
    public Long getIdDelito() {
        return idDelito;
    }

    public void setIdDelito(Long idDelito) {
        this.idDelito = idDelito;
    }

    public String getDelDelito() {
        return delDelito;
    }

    public void setDelDelito(String delDelito) {
        this.delDelito = delDelito;
    }

    public String getDelJuez() {
        return delJuez;
    }

    public void setDelJuez(String delJuez) {
        this.delJuez = delJuez;
    }

    public LocalDate getDelFechDet() {
        return delFechDet;
    }

    public void setDelFechDet(LocalDate delFechDet) {
        this.delFechDet = delFechDet;
    }

    public LocalDate getDelFechIniCondena() {
        return delFechIniCondena;
    }

    public void setDelFechIniCondena(LocalDate delFechIniCondena) {
        this.delFechIniCondena = delFechIniCondena;
    }

    public String getDelEstado() {
        return delEstado;
    }

    public void setDelEstado(String delEstado) {
        this.delEstado = delEstado;
    }

    public Long getDelDuracion() {
        return delDuracion;
    }

    public void setDelDuracion(Long delDuracion) {
        this.delDuracion = delDuracion;
    }
}
