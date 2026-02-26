"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDeDatos = void 0;
const Producto_1 = require("./Producto");
class BaseDeDatos {
    static instancia = null;
    tasaCambio = 6.96;
    historialLog = [];
    inventario = [
        new Producto_1.Producto(1, "Paceña 620ml", "Cerveza", 100, 15),
        new Producto_1.Producto(6, "Singani Los Parrales", "Singani", 15, 120),
        new Producto_1.Producto(10, "Kohlberg Stelar", "Vino", 20, 85)
    ];
    constructor() {
        this.registrarLog("SISTEMA: Conexión a la Base de Datos Central iniciada.");
    }
    static obtenerInstancia() {
        if (!BaseDeDatos.instancia) {
            BaseDeDatos.instancia = new BaseDeDatos();
        }
        return BaseDeDatos.instancia;
    }
    registrarLog(mensaje) {
        const hora = new Date().toLocaleTimeString('en-US', { hour12: false });
        // OJO: Solo lo guardamos en memoria, no hacemos console.log aquí
        this.historialLog.push(` [AUDITORÍA ${hora}] ${mensaje}`);
    }
    actualizarTasaCambio(nuevaTasa) {
        this.tasaCambio = nuevaTasa;
        this.registrarLog(`GERENCIA: Tasa de cambio global actualizada a ${nuevaTasa} Bs.`);
    }
    // Método para demostrar la Configuración Dinámica
    mostrarPrecioEnDolares(id) {
        const p = this.inventario.find(prod => prod.id === id);
        if (p) {
            const precioUSD = (p.precio / this.tasaCambio).toFixed(2);
            console.log(`   [${p.nombre}] Precio Oficial: ${p.precio} Bs. | Al cambio: $${precioUSD} USD`);
        }
    }
    venderProducto(id, modulo) {
        const p = this.inventario.find(prod => prod.id === id);
        if (p && p.stock > 0) {
            const stockInicial = p.stock;
            p.stock--;
            const stockFinal = p.stock;
            const precioUSD = (p.precio / this.tasaCambio).toFixed(2);
            this.registrarLog(`VENTA (${modulo}): ${p.nombre} vendido a $${precioUSD} USD. [Stock: ${stockInicial} -> ${stockFinal}]`);
            console.log(`    Éxito: ${modulo} vendió 1 ${p.nombre}.`);
        }
        else {
            this.registrarLog(` ERROR (${modulo}.): Intento de venta de ID ${id} fallido (Stock Agotado).`);
        }
    }
    mostrarHistorial() {
        console.log("\n=======================================================");
        console.log("   REPORTE DE AUDITORÍA CENTRALIZADA (EL LOGGER)");
        console.log("=======================================================");
        this.historialLog.forEach(linea => console.log(linea));
    }
}
exports.BaseDeDatos = BaseDeDatos;
//# sourceMappingURL=BaseDeDatos.js.map