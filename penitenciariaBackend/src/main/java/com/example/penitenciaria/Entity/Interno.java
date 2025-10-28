package com.example.penitenciaria.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "internos")
public class Interno {

    @Id
    @Column(name = "legajo", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long legajo;

    @Column(name = "intNomApe", length = 50, nullable = false)
    private String nombreApellido;

    @Column(name = "intTipo", length = 3, nullable = false)
    private String tipo;

    @Column(name = "intDni", unique = true, nullable = false)
    private Integer dni;

    @Column(name = "intSexo", length = 1, nullable = false)
    private String sexo;

    @Column(name = "intNacionalidad", length = 30, nullable = false)
    private String nacionalidad;

    @Column(name = "intAlias", length = 30, nullable = false)
    private String alias;

    @Column(name = "intFechNac", nullable = false)
    private LocalDate fechaNacimiento;

    @Column(name = "intDptoNac", length = 30, nullable = false)
    private String departamentoNacimiento;

    @Column(name = "intPciaNac", length = 30, nullable = false)
    private String provinciaNacimiento;

    @Column(name = "intDomicilio", length = 30, nullable = false)
    private String domicilio;

    @Column(name = "intEstadoCivil", length = 10, nullable = false)
    private String estadoCivil;

    @Column(name = "intProfesion", length = 30, nullable = false)
    private String profesion;

    @ManyToOne
    @JoinColumn(name = "idPenitenciaria", nullable = false)
    private Long idPenitenciaria; // podrías reemplazar por una relación ManyToOne

    @ManyToOne
    @JoinColumn(name = "idDelito", nullable = false)
    private Delito idDelito;

    @Column(name = "intEstado", length = 8, nullable = false)
    private String estado = "activo";

    // ===== CONSTRUCTORES =====
    public Interno() {}

    public Interno(Long legajo, String nombreApellido, String tipo, Integer dni, String sexo, String nacionalidad,
                   String alias, LocalDate fechaNacimiento, String departamentoNacimiento, String provinciaNacimiento,
                   String domicilio, String estadoCivil, String profesion, Long idPenitenciaria,
                   Delito idDelito, String estado) {
        this.legajo = legajo;
        this.nombreApellido = nombreApellido;
        this.tipo = tipo;
        this.dni = dni;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.alias = alias;
        this.fechaNacimiento = fechaNacimiento;
        this.departamentoNacimiento = departamentoNacimiento;
        this.provinciaNacimiento = provinciaNacimiento;
        this.domicilio = domicilio;
        this.estadoCivil = estadoCivil;
        this.profesion = profesion;
        this.idPenitenciaria = idPenitenciaria;
        this.idDelito = idDelito;
        this.estado = estado;
    }

    // ===== GETTERS Y SETTERS =====
    public Long getLegajo() { return legajo; }
    public void setLegajo(Long legajo) { this.legajo = legajo; }

    public String getNombreApellido() { return nombreApellido; }
    public void setNombreApellido(String nombreApellido) { this.nombreApellido = nombreApellido; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public Integer getDni() { return dni; }
    public void setDni(Integer dni) { this.dni = dni; }

    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }

    public String getNacionalidad() { return nacionalidad; }
    public void setNacionalidad(String nacionalidad) { this.nacionalidad = nacionalidad; }

    public String getAlias() { return alias; }
    public void setAlias(String alias) { this.alias = alias; }

    public LocalDate getFechaNacimiento() { return fechaNacimiento; }
    public void setFechaNacimiento(LocalDate fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }

    public String getDepartamentoNacimiento() { return departamentoNacimiento; }
    public void setDepartamentoNacimiento(String departamentoNacimiento) { this.departamentoNacimiento = departamentoNacimiento; }

    public String getProvinciaNacimiento() { return provinciaNacimiento; }
    public void setProvinciaNacimiento(String provinciaNacimiento) { this.provinciaNacimiento = provinciaNacimiento; }

    public String getDomicilio() { return domicilio; }
    public void setDomicilio(String domicilio) { this.domicilio = domicilio; }

    public String getEstadoCivil() { return estadoCivil; }
    public void setEstadoCivil(String estadoCivil) { this.estadoCivil = estadoCivil; }

    public String getProfesion() { return profesion; }
    public void setProfesion(String profesion) { this.profesion = profesion; }

    public Long getIdPenitenciaria() { return idPenitenciaria; }
    public void setIdPenitenciaria(Long idPenitenciaria) { this.idPenitenciaria = idPenitenciaria; }

    public Delito getIdDelito() { return idDelito; }
    public void setIdDelito(Delito idDelito) { this.idDelito = idDelito; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}
