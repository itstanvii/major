import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import type { Store } from "../model/store.model"

export interface CartItem extends Store {
  quantity: number
  userId: string
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItems: CartItem[] = []
  private cartSubject = new BehaviorSubject<CartItem[]>([])
  public cart$ = this.cartSubject.asObservable()

  constructor() {
    this.loadCartFromStorage()
  }

  addToCart(product: Store, userId: string): void {
    const existingItem = this.cartItems.find((item) => item.id === product.id && item.userId === userId)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      const cartItem: CartItem = {
        ...product,
        quantity: 1,
        userId: userId,
      }
      this.cartItems.push(cartItem)
    }

    this.saveCartToStorage()
    this.cartSubject.next(this.getCartForUser(userId))
  }

  removeFromCart(productId: number, userId: string): void {
    this.cartItems = this.cartItems.filter((item) => !(item.id === productId && item.userId === userId))
    this.saveCartToStorage()
    this.cartSubject.next(this.getCartForUser(userId))
  }

  updateQuantity(productId: number, quantity: number, userId: string): void {
    const item = this.cartItems.find((item) => item.id === productId && item.userId === userId)

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId, userId)
      } else {
        item.quantity = quantity
        this.saveCartToStorage()
        this.cartSubject.next(this.getCartForUser(userId))
      }
    }
  }

  getCartForUser(userId: string): CartItem[] {
    return this.cartItems.filter((item) => item.userId === userId)
  }

  getCartTotal(userId: string): number {
    return this.getCartForUser(userId).reduce((total, item) => {
      return total + Number.parseFloat(item.price || "0") * item.quantity
    }, 0)
  }

  getCartItemCount(userId: string): number {
    return this.getCartForUser(userId).reduce((count, item) => count + item.quantity, 0)
  }

  clearCart(userId: string): void {
    this.cartItems = this.cartItems.filter((item) => item.userId !== userId)
    this.saveCartToStorage()
    this.cartSubject.next([])
  }

  isInCart(productId: number, userId: string): boolean {
    return this.cartItems.some((item) => item.id === productId && item.userId === userId)
  }

  private saveCartToStorage(): void {
    localStorage.setItem("fitverse_cart", JSON.stringify(this.cartItems))
  }

  private loadCartFromStorage(): void {
    const stored = localStorage.getItem("fitverse_cart")
    if (stored) {
      this.cartItems = JSON.parse(stored)
    }
  }
}
