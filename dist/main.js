"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDeDatos_1 = require("./BaseDeDatos");
console.log("=== BIENVENIDOS A LICORERÍA EL BARRIL ===\n");
// 1. Se conecta el módulo de la Tienda Web
console.log(" Modulo Web conectándose...");
const conexionWeb = BaseDeDatos_1.BaseDeDatos.obtenerInstancia();
// 2. Se conecta el módulo de la Caja Física
console.log(" Modulo Caja conectándose...");
const conexionCaja = BaseDeDatos_1.BaseDeDatos.obtenerInstancia();
// COMPROBACIÓN FÍSICA: ¿Son exactamente la misma conexión?
console.log(`\n¿Ambos módulos usan la misma conexión? ${conexionWeb === conexionCaja}`);
console.log("--------------------------------------------------\n");
// LA HISTORIA EN ACCIÓN:
// La web revisa el stock y ve que queda 1 Whisky
console.log(" Cliente en la Web revisa el stock:");
conexionWeb.verStock(1);
// La web lo compra y baja el stock
console.log("\n Cliente en la Web hace la compra:");
conexionWeb.venderProducto(1);
// Inmediatamente después, el cajero en la tienda física intenta vender el mismo Whisky
console.log("\n Cliente en la tienda fisica pide el mismo Whisky.");
console.log(" El cajero intenta procesar la venta:");
conexionCaja.venderProducto(1);
console.log("\n Stock final consultado por el cajero:");
conexionCaja.verStock(1);
//# sourceMappingURL=main.js.map