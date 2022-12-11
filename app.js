const autosImportados=require("./autos");
//console.log(autosImportados)
const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patenteAuto) {
        let autoEncontrado = this.autos.find(function(auto) {
            return auto.patente == patenteAuto
        })
        return autoEncontrado ? autoEncontrado : null
    },
    venderAuto: function (patenteAuto) {
        let autoEncontrado = this.buscarAuto(patente)
        autoEncontrado ? autoEncontrado.vendido = true : ""
    },
    autosParaLaVenta: function (){
        let autoParaLaVenta = this.autos.filter(function(auto) {
            return !(auto.vendido)
        })
        return autoParaLaVenta
    },
    autosNuevos: function() {
        let autoNuevo = this.autosParaLaVenta().filter(function(auto) {
            return auto.km < 100
        })
        return autoNuevo
        
    },
    listaDeVentas: function(){
        let autoVendidos = this.autos.filter(function(auto){
            return auto.vendido;    
        })
        let preciosAutosVendidos = autoVendidos.map(function(auto){
            return auto.precio;
        });
       return preciosAutosVendidos
    },
    totalDeVentas: function(){
        let preciosAutosVendidos = this.listaDeVentas()
        let totalDeVentas = preciosAutosVendidos.reduce(function(suma,precio){
            return suma + precio;
        },O)
        return totalDeVentas
    },
    autosQuePuedeComprar: function(persona){
        let paraLaVenta = this.autosParaLaVenta();
        let autosComprar = paraLaVenta.filter(function(auto){
           let valorCuota = auto.precio/auto.cuotas;
           return ((persona.capacidadDePagoEnCuotas > valorCuota) && (persona.capacidadDePagoTotal > auto.precio));
           //return this.puedeComprar(auto, persona);
        })
        return autosComprar;
     }
  }