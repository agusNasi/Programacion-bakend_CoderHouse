class ProductManager {
    static code = 0;

    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, stock) {
        ProductManager.code++;
        const newProduct = {
            id: ProductManager.code,
            title,
            description,
            price,
            thumbnail,
            stock
        };
        this.products.push(newProduct);
    }

    getProductByID(productId) {
        const verifyProduct = this.products.find(product => product.id === productId);
        if (!verifyProduct) {
            console.error("Not found");
            return
        } else {
            console.log(verifyProduct);
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct('Cafe', 'Infusion', 500, 'url', 20);

console.log(productManager.getProducts());

productManager.getProductByID(2);
