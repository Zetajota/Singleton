export declare class BaseDeDatos {
    private static instancia;
    private inventario;
    private constructor();
    static obtenerInstancia(): BaseDeDatos;
    verStock(idProducto: number): void;
    venderProducto(idProducto: number): void;
}
//# sourceMappingURL=BaseDeDatos.d.ts.map