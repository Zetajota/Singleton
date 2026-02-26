"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDeDatos = void 0;
const Producto_1 = require("./Producto");
class BaseDeDatos {
    // 1. EL ESCONDITE: Variable estática privada para guardar la única instancia
    static instancia = null;
    // Nuestro inventario de prueba (¡Ojo! Solo queda 1 Whisky)
    inventario = [
        new Producto_1.Producto(1, "Whisky Johnnie Walker Black", 1),
        new Producto_1.Producto(2, "Cerveza Pacena", 50)
    ];
    // 2. EL CANDADO: Constructor privado. Nadie puede hacer "new" desde afuera.
    constructor() {
        console.log(" SISTEMA Abriendo conexión maestra a la Base de Datos...\n");
    }
    // 3. EL PORTERO: Punto de acceso global (Lazy Instantiation)
    static obtenerInstancia() {
        if (BaseDeDatos.instancia === null) {
            BaseDeDatos.instancia = new BaseDeDatos();
        }
        return BaseDeDatos.instancia;
    }
    // --- Métodos de negocio de la licorería ---
    verStock(idProducto) {
        const producto = this.inventario.find(p => p.id === idProducto);
        if (producto) {
            console.log(` Stock de ${producto.nombre}: ${producto.stock} unidades.`);
        }
    }
    venderProducto(idProducto) {
        const producto = this.inventario.find(p => p.id === idProducto);
        if (producto && producto.stock > 0) {
            producto.stock -= 1;
            console.log(` Venta exitosa: Se vendió un ${producto.nombre}.`);
        }
        else {
            console.log(` Error: No hay stock suficiente para el producto ${idProducto}.`);
        }
    }
}
exports.BaseDeDatos = BaseDeDatos;
//# sourceMappingURL=BaseDeDatos.js.map