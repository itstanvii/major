import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import type { Store } from "../model/store.model"

export interface WishlistItem extends Store {
  userId: string
  dateAdded: Date
}

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  private wishlistItems: WishlistItem[] = []
  private wishlistSubject = new BehaviorSubject<WishlistItem[]>([])
  public wishlist$ = this.wishlistSubject.asObservable()

  constructor() {
    this.loadWishlistFromStorage()
  }

  addToWishlist(product: Store, userId: string): void {
    const existingItem = this.wishlistItems.find((item) => item.id === product.id && item.userId === userId)

    if (!existingItem) {
      const wishlistItem: WishlistItem = {
        ...product,
        userId: userId,
        dateAdded: new Date(),
      }
      this.wishlistItems.push(wishlistItem)
      this.saveWishlistToStorage()
      this.wishlistSubject.next(this.getWishlistForUser(userId))
    }
  }

  removeFromWishlist(productId: number, userId: string): void {
    this.wishlistItems = this.wishlistItems.filter((item) => !(item.id === productId && item.userId === userId))
    this.saveWishlistToStorage()
    this.wishlistSubject.next(this.getWishlistForUser(userId))
  }

  getWishlistForUser(userId: string): WishlistItem[] {
    return this.wishlistItems.filter((item) => item.userId === userId)
  }

  getWishlistItemCount(userId: string): number {
    return this.getWishlistForUser(userId).length
  }

  clearWishlist(userId: string): void {
    this.wishlistItems = this.wishlistItems.filter((item) => item.userId !== userId)
    this.saveWishlistToStorage()
    this.wishlistSubject.next([])
  }

  isInWishlist(productId: number, userId: string): boolean {
    return this.wishlistItems.some((item) => item.id === productId && item.userId === userId)
  }

  moveToCart(productId: number, userId: string, cartService: any): void {
    const item = this.wishlistItems.find((item) => item.id === productId && item.userId === userId)

    if (item) {
      cartService.addToCart(item, userId)
      this.removeFromWishlist(productId, userId)
    }
  }

  private saveWishlistToStorage(): void {
    localStorage.setItem("fitverse_wishlist", JSON.stringify(this.wishlistItems))
  }

  private loadWishlistFromStorage(): void {
    const stored = localStorage.getItem("fitverse_wishlist")
    if (stored) {
      this.wishlistItems = JSON.parse(stored)
    }
  }
}
