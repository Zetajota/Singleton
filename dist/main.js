"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDeDatos_1 = require("./BaseDeDatos");
console.log("\n=== INICIANDO SISTEMA DE VENTAS ===");
const pcCajero1 = BaseDeDatos_1.BaseDeDatos.obtenerInstancia();
const pcCajero2 = BaseDeDatos_1.BaseDeDatos.obtenerInstancia();
const pcGerencia = BaseDeDatos_1.BaseDeDatos.obtenerInstancia();
console.log(`[VERIFICACIÓN] ¿pcCajero1 y pcGerencia comparten memoria?: ${pcCajero1 === pcGerencia}\n`);
// ESTADO INICIAL
console.log("--- CONSULTA DE PRECIOS (TASA OFICIAL) ---");
pcCajero1.mostrarPrecioEnDolares(6);
// ACTUALIZACIÓN GLOBAL
console.log("\n--- ACTUALIZACIÓN DE SISTEMA ---");
pcGerencia.actualizarTasaCambio(7.50);
console.log("\n--- NUEVA CONSULTA DE PRECIOS ---");
pcCajero2.mostrarPrecioEnDolares(6);
// TRANSACCIONES 
console.log("\n--- REGISTRANDO TRANSACCIONES ---");
pcCajero1.venderProducto(1, "Caja 1");
pcCajero2.venderProducto(10, "Caja 2");
pcCajero1.venderProducto(6, "Caja 1");
// AUDITORÍA 
pcGerencia.mostrarHistorial();
//# sourceMappingURL=main.js.map