// Class Product
class Product {
  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
  }
} // end class Product

// Class Shopping Cart
class Cart extends Product {
  constructor(id, name, price, quantity) {
    super(id, name, price)
    this.quantity = quantity
  }

  totalPrice() {
    return (this.price * this.quantity).toFixed(2)
  } // total price
}

// Shopping Cart Items
class CartItems {
  constructor(items) {
    this.items = items
    return this
  }

  // get total items in cart
  getTotalItems() {
    return this.items.length
  } // total items in the cart

  // add items to cart
  addItems(item) {
    const updated = [...this.items, item]
    return updated.map((el) => el.name)
  }

  // remove items from cart
  removeItems(id) {
    const records = this.items
      .filter((item) => item.id !== id)
      .map((el) => el.name)
    return records
  } // remove items from cart

  // display cart items
  displayCart() {
    return this.items.map((item) => item.name)
  }
} // end class CartItems

// Testing the functionalities
// Create products
const products = [
  {
    id: 1,
    name: 'Shoes',
    price: 45,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Belt',
    price: 25,
    quantity: 4,
  },
  {
    id: 3,
    name: 'Cap',
    price: 15,
    quantity: 6,
  },
  {
    id: 4,
    name: 'Polo',
    price: 40,
    quantity: 8,
  },
  {
    id: 5,
    name: 'Sandals',
    price: 45,
    quantity: 2,
  },
  {
    id: 6,
    name: 'Skirts',
    price: 95,
    quantity: 6,
  },
]

// Create a shopping cart
const shoppingCart = new CartItems(products)

// Add items to the cart
console.log(
  shoppingCart.addItems({
    id: 8,
    name: 'Horse',
    price: 80,
    quantity: 3,
  })
)

// Display the cart
console.log(shoppingCart.displayCart())

// Remove an item from the cart
console.log(shoppingCart.removeItems(5))

console.log(shoppingCart.getTotalItems())
