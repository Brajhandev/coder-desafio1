import { Product } from "./Product.js";

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // validación del code
    const codeFind = this.products.find((product) => product.code === code);
    if (codeFind) {
      return `el producto ${title} ingresado con el codigo ${code} ya existe`;
    }
    // validar todos los campos obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return "Todos los campos son obligatorios, verifique que esta ingresando todos";
    }

    const product = new Product(
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );

    this.products.push(product);
    return `producto ${title} ingresado correctamente`;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return `el producto de id ${id} no se encuentra`;
    }
    return product;
  }
}

const product1 = new ProductManager();

console.log("INGRESANDO PRIMER PRODUCTO...");
console.log(
  product1.addProduct(
    "Gaseosa Coca cola",
    "Gaseosa cocacola de 500ml",
    50,
    "url",
    "coc-005",
    50
  )
);

console.log("INGRESANDO SEGUNDA PRODUCTO...(code repetido)");
console.log(
  product1.addProduct(
    "Gaseosa Pepsi cola",
    "Gaseosa pepsicola de 1lt",
    150,
    "url",
    "coc-005",
    20
  )
);

console.log("INGRESANDO TERCER PRODUCTO...(campos vacios)");
console.log(
  product1.addProduct("Gaseosa Fanta", "", 250, "url", "fan-001", 20)
);

console.log("=====TODOS LOS PRODUCTOS======");
console.log(product1.getProducts());

console.log("BUSCANDO PRODUCTO DE ID 1");
console.log(product1.getProductById(1));

console.log("BUSCANDO PRODUCTO DE ID 5");
console.log(product1.getProductById(5));
