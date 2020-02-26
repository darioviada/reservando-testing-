var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(horario=> horario != horarioReservado);
    console.log(this.horarios);
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.sumatoria= function (numeros){
    return  numeros.reduce((acumulador, valor) => acumulador + valor);
    
}

Restaurant.prototype.promedio= function (numeros){
    var promedio = this.sumatoria(numeros) / numeros.length;
    return Math.round(promedio * 10) / 10;
    
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return this.promedio(this.calificaciones);
    }

}