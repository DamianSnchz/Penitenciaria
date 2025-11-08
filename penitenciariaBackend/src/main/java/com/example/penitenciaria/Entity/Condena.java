package com.example.penitenciaria.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "condenas")
public class Condena {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCondena")
    private Long idCondena;

    // 🔗 FK hacia Delito
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idDelito", nullable = false)
    private Delito idDelito;

    // 🔗 FK hacia Interno
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "legajo", nullable = false)
    private Interno legajo;

    @Column(name = "conDuracion", columnDefinition = "INT DEFAULT 0")
    private Integer conDuracion = 0;

    @Temporal(TemporalType.DATE)
    @Column(name = "conFechFinCon")
    private LocalDate conFechFinCon;

    @Column(name = "conMotRedPena", length = 200)
    private String conMotRedPena;

    @Column(name = "conTiempoRedCond")
    private Integer conTiempoRedCond;

    @Column(name = "conEstado", length = 8, nullable = false)
    private String conEstado = "activo";

    @Temporal(TemporalType.DATE)
    @Column(name = "conFechIniCon")
    private LocalDate conFechIniCon;

    // 🔸 Constructores
    public Condena() {
    }

    public Condena(Long idCondena, Delito delito, Interno interno) {
        this.idCondena = idCondena;
        this.idDelito = delito;
        this.legajo = interno;
    }

    // 🔸 Getters y setters
    public Long getIdCondena() {
        return idCondena;
    }

    public void setIdCondena(Long idCondena) {
        this.idCondena = idCondena;
    }

    public Delito getIdDelito() {
        return idDelito;
    }

    public void setIdDelito(Delito idDelito) {
        this.idDelito = idDelito;
    }

    public Interno getLegajo() {
        return legajo;
    }

    public void setLegajo(Interno legajo) {
        this.legajo = legajo;
    }

    public Integer getConDuracion() {
        return conDuracion;
    }

    public void setConDuracion(Integer conDuracion) {
        this.conDuracion = conDuracion;
    }

    public LocalDate getConFechFinCon() {
        return conFechFinCon;
    }

    public void setConFechFinCon(LocalDate conFechFinCon) {
        this.conFechFinCon = conFechFinCon;
    }

    public String getConMotRedPena() {
        return conMotRedPena;
    }

    public void setConMotRedPena(String conMotRedPena) {
        this.conMotRedPena = conMotRedPena;
    }

    public Integer getConTiempoRedCond() {
        return conTiempoRedCond;
    }

    public void setConTiempoRedCond(Integer conTiempoRedCond) {
        this.conTiempoRedCond = conTiempoRedCond;
    }

    public String getConEstado() {
        return conEstado;
    }

    public void setConEstado(String conEstado) {
        this.conEstado = conEstado;
    }

    public LocalDate getConFechIniCon() {
        return conFechIniCon;
    }

    public void setConFechIniCon(LocalDate conFechIniCon) {
        this.conFechIniCon = conFechIniCon;
    }
}
