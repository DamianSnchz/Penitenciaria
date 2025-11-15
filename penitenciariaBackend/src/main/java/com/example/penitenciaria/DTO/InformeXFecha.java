/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.penitenciaria.DTO;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

/**
 *
 * @author damian
 */
public class InformeXFecha {
    private String penitenciaria;
    private String delito;
    private String name;
    private String dni;
    private double porcentaje;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private LocalDate fechaActual;
    private LocalDate fechaIngresada;
    private String apellido;

    //constructor para obtener los datos de la BD
    public InformeXFecha(String penitenciaria, String delito, String name, String apellido, String dni, LocalDate fechaInicio, LocalDate fechaFin) {
        this.penitenciaria = penitenciaria;
        this.delito = delito;
        this.name = name;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.fechaActual  = null;
        this.porcentaje = 0;
        this.fechaIngresada = null;
    }
    
    //generar los calculos
    public void generarInforme(LocalDate fechaIngresada) {
        this.fechaActual  = LocalDate.now();
        this.fechaIngresada = fechaIngresada;
        this.porcentaje = calcularPorcentaje();
    }
    
    
    
    
    //funcion para calcular el porcentaje de la condena complida
    public double calcularPorcentaje(){
        //obtengo la diferencia en meses de la fecha inicio de condena y la fecha fin de condena;
        //para poder usar la regla de 3 simples
        long difMeses1 = diferenciaMeses(fechaInicio, fechaFin);
        //obtengo la dif. en meses de la fecha actual y la fecha consultada
        long difMeses2 = diferenciaMeses(fechaActual, fechaIngresada);
        return calcular(difMeses1, difMeses2);
    }
    
    
    // calculo el porcentaje
    public double calcular(long num1, long num2) { 
        if (num1 == 0) {
            return 0.0; // Evitar división por cero
        }

        // Convierte a double para la división
        double x = (double) num2 * 100.0;
        return x / (double) num1;
    }
    
    
    //me retorna la diferencia en meses entre dos fechas
    public long diferenciaMeses(LocalDate fechaInicio, LocalDate fechaFin){
        if(fechaInicio == null || fechaFin == null){
            return 0;
        }
        return ChronoUnit.MONTHS.between(fechaInicio, fechaFin);
    }
    /**
     * @return the penitenciaria
     */
    public String getPenitenciaria() {
        return penitenciaria;
    }

    /**
     * @param penitenciaria the penitenciaria to set
     */
    public void setPenitenciaria(String penitenciaria) {
        this.penitenciaria = penitenciaria;
    }

    /**
     * @return the delito
     */
    public String getDelito() {
        return delito;
    }

    /**
     * @param delito the delito to set
     */
    public void setDelito(String delito) {
        this.delito = delito;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the dni
     */
    public String getDni() {
        return dni;
    }

    /**
     * @param dni the dni to set
     */
    public void setDni(String dni) {
        this.dni = dni;
    }

    /**
     * @return the porcentaje
     */
    public double getPorcentaje() {
        return porcentaje;
    }

    /**
     * @param porcentaje the porcentaje to set
     */
    public void setPorcentaje(double porcentaje) {
        this.porcentaje = porcentaje;
    }

    /**
     * @return the fechaInicio
     */
    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    /**
     * @param fechaInicio the fechaInicio to set
     */
    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    /**
     * @return the fechaFin
     */
    public LocalDate getFechaFin() {
        return fechaFin;
    }

    /**
     * @param fechaFin the fechaFin to set
     */
    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    /**
     * @return the fechaActual
     */
    public LocalDate getFechaActual() {
        return fechaActual;
    }

    /**
     * @param fechaActual the fechaActual to set
     */
    public void setFechaActual(LocalDate fechaActual) {
        this.fechaActual = fechaActual;
    }

    /**
     * @return the fechaIngresada
     */
    public LocalDate getFechaIngresada() {
        return fechaIngresada;
    }

    /**
     * @param fechaIngresada the fechaIngresada to set
     */
    public void setFechaIngresada(LocalDate fechaIngresada) {
        this.fechaIngresada = fechaIngresada;
    }

    /**
     * @return the apellido
     */
    public String getApellido() {
        return apellido;
    }

    /**
     * @param apellido the apellido to set
     */
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
}
