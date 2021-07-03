/*Modules*/
const util = require('util');
const { listeners } = require('cluster');
const sleep = util.promisify(setTimeout);

/*Controller*/
class Auto {
    constructor () {
       this.automovil = [
            {
                id: 1,
                modelo: 'Gran cherokee',
                motor: 'v8',
                transmision: 'Automática de ocho velocidades',
                tanques: 1,
                ruedas: 4,
                puertas: 4,
                ventanas: 5,
                asientos: 5,
                carroceria: 'monocaso',
                color: 'blanca',
                completed: false
            },
            {
                id: 2,
                modelo: 'Corolla',
                motor: 'v6',
                transmision: 'Automática de seis velocidades',
                tanques: 1,
                ruedas: 4,
                puertas: 4,
                ventanas: 4,
                asientos: 5,
                carroceria: 'compacto',
                color: 'negro',
                completed: false
            }

        ];
    };
    /*Registrar*/ 
    async addAuto(body) {
        try {
            if( body.model && body.seat && body.engine && body.horn && body.steeringWheel && body.tire && body.battery && body.door && body.window && body.transm && body.tan) {
                await sleep(3000);
                const newAuto = body;
                newAuto.id = this.automovil.length + 1;
                newAuto.completed = false;
                console.log('Vehículo registrado');
                return this.automovil.push(newAuto);
            } else console.log('No se pueden registrar los datos');
        } catch (err) {
            console.log(err);
        }; 
    };
    /*Montaje del auto*/
    async start() {
        try {
        let auto = await this.allAuto();
        for(let i = 0; i < auto.length; i++) {
            if(auto[i].completed == false){
                /*motor*/
                console.time('llevando el tiempo');
                await this.motor(i);
                console.timeEnd('finalizo el tiempo');
                /*transmision*/
                console.time('llevando el tiempo');
                await this.transmision(i);
                console.timeEnd('finalizo el tiempo');
                /*tanques*/
                console.time('llevando el tiempo');
                await this.tanques(i);
                console.timeEnd('finalizo el tiempo');
                /*ruedas*/
                console.time('llevando el tiempo');
                await this.ruedas(i);
                console.timeEnd('finalizo el tiempo');
                /*puertas*/
                console.time('llevando el tiempo');
                await this.puertas(i);
                console.timeEnd('finalizo el tiempo');
                /*ventanas*/
                console.time('llevando el tiempo');
                await this.ventanas(i);
                console.timeEnd('finalizo el tiempo');
                /*asientos*/
                console.time('llevando el tiempo');
                await this.asientos(i);
                console.timeEnd('finalizo el tiempo');
                /*carroceria*/
                console.time('llevando el tiempo');
                await this.carroceria(i);
                console.timeEnd('finalizo el tiempo');
                /*color*/
                console.time('llevando el tiempo');
                await this.color(i);
                console.timeEnd('finalizo el tiempo');
                /*Completado*/
                console.log('Vehículo creado:', auto[i].model);
                auto[i].completed = true;
            };
        };
    } catch (err) {
        console.log(err)
        };
    };
    async motor(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.loh('Creando el motor del Auto') ;
            await sleep(3000) ;
            console.log('Tipo de motor del Auto:', auto.motor) ;
        } catch (err) {
            console.log(err)
        };
    };
    async transmision(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando transmisión del Auto') ;
            await sleep(2000) ;
            console.log('Tipo de transmisión del Auto:', auto.transmision) ;
        } catch (err) {
            console.log(err)
        };
    };
    async tanques(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando tanques del Auto') ;
            await sleep(2000) ;
            console.log('Cantidad de tanques del Auto:', auto.tanques) ;
        } catch (err) {
            console.log(err)
        };
    };
    async ruedas(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando ruedas del Auto') ;
            await sleep(2000) ;
            console.log('Cantidad de ruedas del Auto:', auto.ruedas) ;
        } catch (err) {
            console.log(err)
        };
    };
    async puertas(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando puertas del Auto') ;
            await sleep(2000) ;
            console.log('Cantidad de puertas del Auto:', auto.puertas) ;
        } catch (err) {
            console.log(err);
        };
    };
    async ventanas(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando ventanas del Auto') ;
            await sleep(2000) ;
            console.log('Cantidad de ventanas del Auto:', auto.ventanas) ;
        } catch (err) {
            console.log(err);
        };
    };
    async asientos(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando asientos del Auto') ;
            await sleep(2000) ;
            console.log('Cantidad de asientos del Auto:', auto.asientos) ;
        } catch (err) {
            console.log(err);
        };
    };
    async carroceria(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando carroceria del Auto') ;
            await sleep(3000) ;
            console.log('Tipo de carroceria del Auto:', auto.carroceria) ;
        } catch (err) {
            console.log(err);
        };
    };
    async color(i) {
        try {
            let auto = await this.allAuto();
            auto = auto[i];
            console.log('Creando color del auto') ;
            await sleep(2000) ;
            console.log('Color del Auto:', auto.color) ;
        } catch (err) {
            console.log(err);
        };
    };
    async allAuto() {
        await sleep(2000);
        return this.automovil;
    };
};

module.exports = Auto ;