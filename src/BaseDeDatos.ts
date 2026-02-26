import { Producto } from "./Producto";

export class BaseDeDatos {
    private static instancia: BaseDeDatos | null = null;
    private tasaCambio: number = 6.96; 
    private historialLog: string[] = [];
    private inventario: Producto[] = [
        new Producto(1, "Paceña 620ml", "Cerveza", 100, 15),
        new Producto(6, "Singani Los Parrales", "Singani", 15, 120),
        new Producto(10, "Kohlberg Stelar", "Vino", 20, 85)
    ];

    private constructor() {
        this.registrarLog("SISTEMA: Conexión a la Base de Datos Central iniciada.");
    }

    public static obtenerInstancia(): BaseDeDatos {
        if (!BaseDeDatos.instancia) {
            BaseDeDatos.instancia = new BaseDeDatos();
        }
        return BaseDeDatos.instancia;
    }

    private registrarLog(mensaje: string): void {
        const hora = new Date().toLocaleTimeString('en-US', { hour12: false });
        // OJO: Solo lo guardamos en memoria, no hacemos console.log aquí
        this.historialLog.push(` [AUDITORÍA ${hora}] ${mensaje}`);
    }

    public actualizarTasaCambio(nuevaTasa: number): void {
        this.tasaCambio = nuevaTasa;
        this.registrarLog(`GERENCIA: Tasa de cambio global actualizada a ${nuevaTasa} Bs.`);
    }

    // Método para demostrar la Configuración Dinámica
    public mostrarPrecioEnDolares(id: number): void {
        const p = this.inventario.find(prod => prod.id === id);
        if (p) {
            const precioUSD = (p.precio / this.tasaCambio).toFixed(2);
            console.log(`   [${p.nombre}] Precio Oficial: ${p.precio} Bs. | Al cambio: $${precioUSD} USD`);
        }
    }

    public venderProducto(id: number, modulo: string): void {
        const p = this.inventario.find(prod => prod.id === id);
        
        if (p && p.stock > 0) {
            const stockInicial = p.stock; 
            p.stock--; 
            const stockFinal = p.stock;           
            const precioUSD = (p.precio / this.tasaCambio).toFixed(2);           
            this.registrarLog(`VENTA (${modulo}): ${p.nombre} vendido a $${precioUSD} USD. [Stock: ${stockInicial} -> ${stockFinal}]`);
            console.log(`    Éxito: ${modulo} vendió 1 ${p.nombre}.`);
        } else {
            this.registrarLog(` ERROR (${modulo}.): Intento de venta de ID ${id} fallido (Stock Agotado).`);
        }
    }

    public mostrarHistorial(): void {
        console.log("\n=======================================================");
        console.log("   REPORTE DE AUDITORÍA CENTRALIZADA (EL LOGGER)");
        console.log("=======================================================");
        this.historialLog.forEach(linea => console.log(linea));
    }
}