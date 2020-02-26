var Reserva = function(horario, cantidadPersonas, precioUnitario, codigo) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioUnitario = precioUnitario;
    this.codigo = codigo;
}

Reserva.prototype.calcularPrecioBase = function() {
    return this.cantidadPersonas * this.precioUnitario
}


Reserva.prototype.descuentoGrupos = function(cantidad){
    var precioBase = this.calcularPrecioBase();
    if(cantidad >= 4 && cantidad <= 6)
        return precioBase * 0.05;
    if(cantidad >=7 && cantidad <= 8)
        return precioBase * 0.10;
    if(cantidad > 8)
        return precioBase * 0.15;
    
    return 0;    
}

Reserva.prototype.descuentoCodigo = function(codigo){
    var precioBase = this.calcularPrecioBase();
    switch(codigo) {    
        case 'DES15':      
            return precioBase * 0.15;
                     
        case 'DES200': 
            return 200 ;
         
        case 'DES1': 
            return this.precioUnitario;
         
        default:    
            return 0;
      }
}

Reserva.prototype.adicionalHorario = function(horarioDeReserva){
    var precioBase = this.calcularPrecioBase();
    if(horarioDeReserva >= 13 && horarioDeReserva <= 14 || horarioDeReserva >= 20 && horarioDeReserva <= 21)
        return precioBase * 0.05
    else
        return 0;    
}

Reserva.prototype.adicionalFindeSemana = function(diaDeReserva){
    var precioBase = this.calcularPrecioBase();
    if(diaDeReserva === 0  || diaDeReserva === 5 || diaDeReserva === 6)
        return precioBase * 0.10
    else return 0;    
}

Reserva.prototype.calcularPrecioFinal = function() {
    var precioBase = this.calcularPrecioBase();
    var descuentoTotal = this.descuentoGrupos(this.cantidadPersonas) + this.descuentoCodigo(this.codigo)
    var adicionalTotal = this.adicionalHorario(this.horario.getHours()) + this.adicionalFindeSemana(this.horario.getDay());
    var precioFinal = precioBase + adicionalTotal - descuentoTotal ;
    return precioFinal;
}