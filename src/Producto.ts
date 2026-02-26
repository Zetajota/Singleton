export class Producto {
  constructor(
    public id: number,
    public nombre: string,
    public categoria: "Cerveza" | "Singani" | "Vino" | "Otros",
    public stock: number,
    public precio: number, // Precio en Bolivianos (Bs.)
  ) {}
}