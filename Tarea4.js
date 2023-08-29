/**
 * Crear una clase padre
 * Crear una clase que herede de la clase padre
 * Ambas clases deben tener minimo 2 metodos
 * Deben recibir objetos
 * Los objetos recibidos deben tener otro objeto como propiedad
 * Mostrar resultados
 */

class Vehiculo{
    constructor(caracteristicas){
        this.tipo = caracteristicas.tipo;
        this.placa = caracteristicas.placa;
        this.matricula = caracteristicas.matricula;
        this.modelo = caracteristicas.modelo;
        this.cilindraje = caracteristicas.motor.cilindraje;
    }

    arrancar(){
        return `El ${this.tipo} con placa ${this.placa} arranco`;
    }

    detener(){
        return `El ${this.tipo} con placa ${this.placa} se ha detenido`;
    }
}

class Carro extends Vehiculo{
    constructor(datos){
        let datosDos = {
            tipo: datos.tipo,
            placa: datos.placa,
            matricula: datos.matricula,
            modelo: datos.modelo,
            motor: datos.motor.cilidraje
        }
        super(datosDos);
    }

    reversar(){
        
        if (this.tipo !== 'moto') {
            return `El ${this.tipo} con placa ${this.placa} este reversando`;
        }else{
            return `El ${this.tipo} no puede reversar`
        }
    }

    encenderLuces(){
        return `El ${this.tipo} encendio las luces`;
    }
}

const carro = new Carro(
    {
        tipo: 'Carro',
        placa: 'HDV423',
        matricula: 'Envigado',
        modelo: 2016,
        motor: {
            cilidraje: 1200,
            combustion: 'gasolina',
            embrague: 'Manual'
        },
        soat: true
    }
)

console.log(carro.arrancar());
console.log(carro.detener());
console.log(carro.reversar());
console.log(carro.encenderLuces());