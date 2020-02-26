var expect = chai.expect;


describe("Test Reservar horario", function () {
    it("Se le resta un elemento al array cuando se reserva un horario valido", function () {
        var restaurantedeprueba = listadoDeRestaurantes[0];
        var cantidadHorarios = restaurantedeprueba.horarios.length;
        restaurantedeprueba.reservarHorario("13:00");
        var resultado = restaurantedeprueba.horarios.length
        expect(resultado).to.equal(cantidadHorarios - 1);
        
    })
    it("El horario reservado se elimina del array", function () {
        var restaurantedeprueba = listadoDeRestaurantes[0];
        restaurantedeprueba.reservarHorario("13:00");
        resultado = restaurantedeprueba.horarios.indexOf("13:00");
        expect(resultado).to.equal(-1);

        
    })
    it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual", function () {
        var restaurantedeprueba = listadoDeRestaurantes[1];
        var cantidadHorarios = restaurantedeprueba.horarios.length;
        restaurantedeprueba.reservarHorario("16:00");
        var resultado = restaurantedeprueba.horarios.length
        expect(resultado).to.equal(cantidadHorarios);
        
    })
    it("Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual", function () {
        var restaurantedeprueba = listadoDeRestaurantes[1];
        var cantidadHorarios = restaurantedeprueba.horarios.length;
        restaurantedeprueba.reservarHorario();
        var resultado = restaurantedeprueba.horarios.length
        expect(resultado).to.equal(cantidadHorarios);
        
    })

})


describe("Test función obtenerPuntuación()", function () {
    it("Calculo de promedio en forma correcta", function () {
        var restaurantedeprueba = listadoDeRestaurantes[0];
        resultado = restaurantedeprueba.obtenerPuntuacion();
        expect(resultado).to.equal(7.4);
        
    })
    it("Si no tiene calificaciones el puntaje es = 0", function () {
        var restaurantedeprueba = new Restaurant(25, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        resultado = restaurantedeprueba.obtenerPuntuacion();
        expect(resultado).to.equal(0);

        
    })
    
})

describe("Test función calificar()", function () {
    it("La calificacion debe ser mayor a 0 y menor a 10 para agregarse al array", function () {
        var restaurantedeprueba = listadoDeRestaurantes[0];
        cantCalificaciones = restaurantedeprueba.calificaciones.length;
        restaurantedeprueba.calificar(5);
        resultado = restaurantedeprueba.calificaciones.length;
        expect(resultado).to.equal(cantCalificaciones + 1 );
        
    })
    it("Si la calificacion es negativa no ingresa al array", function () {
        var restaurantedeprueba = listadoDeRestaurantes[0];
        cantCalificaciones = restaurantedeprueba.calificaciones.length;
        restaurantedeprueba.calificar(-5);
        resultado = restaurantedeprueba.calificaciones.length;
        expect(resultado).to.equal(cantCalificaciones);
        
    })
    
})

describe("Test función buscarRestaurant()", function () {
    it("Chequear si el id existe en el listado", function () {
        restaurantedeprueba = listadoDeRestaurantes[12]
        resultado = listado.buscarRestaurante(13);
        expect(resultado).to.equal(restaurantedeprueba);
        
    })
    it("Verificar que el id no existe en el listado", function () {
        resultado = listado.buscarRestaurante(30);
        expect(resultado).to.equal("No se ha encontrado ningún restaurant");
        
    })
    
})


describe("Test función obtenerRestaurantes()", function () {
    it("Si el valor recibido es null no se aplica filtro", function () {
        resultado = listado.obtenerRestaurantes(null, null, null)
        expect(resultado).to.equal(listado.restaurantes);
        
    })
    it("Verificar que filtra por ciudad", function () {
        resultado = listado.obtenerRestaurantes(null, "Roma", null);
        expect(resultado.length).to.eql(2);
        console.log(resultado);
        
    })
    
})

describe("Test Reservar", function () {
    it("Calculo del precio base", function () {
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        resultado =  reserva1.calcularPrecioBase();
        expect(resultado).to.equal(2800);
        
    })
    it("Calculo del precio final", function () {
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        resultado =  reserva2.calcularPrecioFinal();
        expect(resultado).to.equal(100);
        
    })
    
    
})