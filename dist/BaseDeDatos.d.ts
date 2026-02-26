export declare class BaseDeDatos {
    private static instancia;
    private tasaCambio;
    private historialLog;
    private inventario;
    private constructor();
    static obtenerInstancia(): BaseDeDatos;
    private registrarLog;
    actualizarTasaCambio(nuevaTasa: number): void;
    mostrarPrecioEnDolares(id: number): void;
    venderProducto(id: number, modulo: string): void;
    mostrarHistorial(): void;
}
//# sourceMappingURL=BaseDeDatos.d.ts.map