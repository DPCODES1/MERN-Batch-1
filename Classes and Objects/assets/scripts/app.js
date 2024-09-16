// const ProductList = {
//    product:[
//     {name:"PS5",price:"45000",description:"Gaming monster",imageUrl:"https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"}
//    ],
//    render() {
//      const div= document.getElementById("app")
//      const produl = document.createElement("ul")
//      produl.className = "product-list"
//      for(const data of this.product) {
//       const prodLi = document.createElement("li")
//       prodLi.className = "product-item"
//       prodLi.innerHTML = `
//          <div>
//            <img src="${data.imageUrl}"/>
//            <div class="product-item__content">
//            <h2>${data.name}</h2>
//            <h3>${data.price}</h3>
//            <p>${data.description}</p>
//            <button>Add to Cart</button>
//            </div>
//          </div>
//       `
//       produl.append(prodLi)
//      }
//      div.append(produl)
//    }
// }

// ProductList.render()

class ProductData {
  constructor(name, description, price, imageUrl) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

class Component {
  constructor(hook) {
    this.hook = hook;
    this.render();
  }

  createRootEl(tag, classes, attri) {
    const rootEl = document.createElement(tag);
    if (classes) {
      rootEl.classList.add(classes);
    }
    if (attri && attri.length > 0) {
      for (const attr of attr) {
        rootEl.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hook).append(rootEl);
    return rootEl;
  }
}

class Cart extends Component {
  items = [];
  
  constructor(id) {
    super(id);
  }

  orderHandler() {
    console.log(this.items)
    console.log("Ordering")
  }

  render() {
    const cartEle = this.createRootEl("section", "cart");
    console.log(cartEle);
    cartEle.innerHTML = `
        <h2>Total:0</h2>
        <button>Order Now</button>
      `;
    this.cartBtn = cartEle.querySelector("button")
    this.cartBtn.addEventListener("click",()=> (this.orderHandler()))
    this.totalEle = cartEle.querySelector("h2");
  }

  get total() {
    return this.items.reduce((pre, cur) => {
      return pre + cur.price;
    },0);
  }

  addToCart(prod) {
    this.items.push(prod);
    this.totalEle.innerHTML = `<h2>Total:${this.total}</h2>`;
  }
}

class Shop extends Component {
  constructor() {
    super();
  }

  render() {
    this.cart = new Cart("app");
    new ProductList("app");
  }
}

class renderSingleProduct {
  constructor(data, ul) {
    this.prod = data;
    this.el = ul;
  }
  renderSingle() {
    const root = document.getElementById("app");
    const prodLi = document.createElement("li");
    prodLi.className = "product-item";

    prodLi.innerHTML = `
                 <div>
                   <img src="${this.prod.imageUrl}"/>
                   <div class="product-item__content">
                   <h2>${this.prod.name}</h2>
                   <h3>${this.prod.price}</h3>
                   <p>${this.prod.description}</p>
                   <button>Add to Cart</button>
                   </div>
                 </div>
              `;

    const btn = prodLi.querySelector("button");
    btn.addEventListener("click", ()=> {
      App.addProdToCart(this.prod)
    });
    this.el.append(prodLi);
    root.append(this.el);
  }
}

class ProductList extends Component {
  constructor(id) {
    super(id);
  }

  fetchProducts() {
    return (this.products = [
      new ProductData(
        "PS5",
        "Monster Console",
        40000,
        "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
      ),
      new ProductData(
        "PS4",
        "Monster Console",
        30000,
        "https://m.media-amazon.com/images/I/8176J0BnOVL._AC_UF1000,1000_QL80_.jpg"
      ),
    ]);
  }

  render() {
    const ul = this.createRootEl("ul", "product-list");
    ul.id = "produl";
    for (const data of this.fetchProducts()) {
      new renderSingleProduct(data, ul).renderSingle();
    }
  }
}

class App {
  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProdToCart(prod) {
    console.log(this.cart)
    this.cart.addToCart(prod);
  }
}

App.init();
