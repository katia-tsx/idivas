// Types
interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  discount?: number
  [key: string]: any
}

interface CartItem extends Product {
  quantity: number
  size: string
}

type FavoriteItem = Product

// Initialize storage with default values if they don't exist
export const initializeStorage = () => {
  if (typeof window === "undefined") return // Skip on server-side

  // Initialize cart
  if (!localStorage.getItem("idivas-cart")) {
    localStorage.setItem("idivas-cart", JSON.stringify([]))
  }

  // Initialize favorites
  if (!localStorage.getItem("idivas-favorites")) {
    localStorage.setItem("idivas-favorites", JSON.stringify([]))
  }

  // Initialize viewed products
  if (!localStorage.getItem("idivas-viewed")) {
    localStorage.setItem("idivas-viewed", JSON.stringify([]))
  }
}

// Cart Functions
export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return []

  const cart = localStorage.getItem("idivas-cart")
  return cart ? JSON.parse(cart) : []
}

export const addToCart = (product: Product, size: string, quantity: number) => {
  if (typeof window === "undefined") return

  const cart = getCart()

  // Check if product with same size already exists in cart
  const existingItemIndex = cart.findIndex((item) => item.id === product.id && item.size === size)

  if (existingItemIndex !== -1) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += quantity
  } else {
    // Add new item if it doesn't exist
    cart.push({
      ...product,
      size,
      quantity,
    })
  }

  localStorage.setItem("idivas-cart", JSON.stringify(cart))
}

export const updateCartItemQuantity = (productId: number, size: string, quantity: number) => {
  if (typeof window === "undefined") return

  const cart = getCart()

  const itemIndex = cart.findIndex((item) => item.id === productId && item.size === size)

  if (itemIndex !== -1) {
    cart[itemIndex].quantity = quantity
    localStorage.setItem("idivas-cart", JSON.stringify(cart))
  }
}

export const removeFromCart = (productId: number, size: string) => {
  if (typeof window === "undefined") return

  const cart = getCart()

  const updatedCart = cart.filter((item) => !(item.id === productId && item.size === size))

  localStorage.setItem("idivas-cart", JSON.stringify(updatedCart))
}

export const clearCart = () => {
  if (typeof window === "undefined") return

  localStorage.removeItem("idivas-cart")
}

export const getCartTotal = (): number => {
  const cart = getCart()

  return cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

export const getCartItemCount = (): number => {
  const cart = getCart()

  return cart.reduce((count, item) => {
    return count + item.quantity
  }, 0)
}

// Favorites Functions
export const getFavorites = (): Product[] => {
  if (typeof window === "undefined") return []

  const favorites = localStorage.getItem("idivas-favorites")
  return favorites ? JSON.parse(favorites) : []
}

export const addToFavorites = (product: Product) => {
  if (typeof window === "undefined") return

  const favorites = getFavorites()

  // Check if product already exists in favorites
  if (!favorites.some((item) => item.id === product.id)) {
    favorites.push(product)
    localStorage.setItem("idivas-favorites", JSON.stringify(favorites))
  }
}

export const removeFromFavorites = (productId: number) => {
  if (typeof window === "undefined") return

  const favorites = getFavorites()

  const updatedFavorites = favorites.filter((item) => item.id !== productId)

  localStorage.setItem("idivas-favorites", JSON.stringify(updatedFavorites))
}

export const isInFavorites = (productId: number): boolean => {
  if (typeof window === "undefined") return false

  const favorites = getFavorites()

  return favorites.some((item) => item.id === productId)
}

// Recently Viewed Functions
export const getRecentlyViewed = (): Product[] => {
  if (typeof window === "undefined") return []

  const recentlyViewed = localStorage.getItem("idivas-recently-viewed")
  return recentlyViewed ? JSON.parse(recentlyViewed) : []
}

export const addToRecentlyViewed = (product: Product) => {
  if (typeof window === "undefined") return

  const recentlyViewed = getRecentlyViewed()

  // Remove product if it already exists (to move it to the front)
  const filteredItems = recentlyViewed.filter((item) => item.id !== product.id)

  // Add product to the beginning of the array
  filteredItems.unshift(product)

  // Keep only the last 10 items
  const limitedItems = filteredItems.slice(0, 10)

  localStorage.setItem("idivas-recently-viewed", JSON.stringify(limitedItems))
}

// User preference utils
export const setUserPreference = (key: string, value: any): void => {
  if (typeof window === "undefined") return

  try {
    sessionStorage.setItem(`idivas-pref-${key}`, JSON.stringify(value))
  } catch (error) {
    console.error("Error saving user preference:", error)
  }
}

export const getUserPreference = (key: string, defaultValue: any = null): any => {
  if (typeof window === "undefined") return defaultValue

  try {
    const value = sessionStorage.getItem(`idivas-pref-${key}`)
    return value ? JSON.parse(value) : defaultValue
  } catch (error) {
    console.error("Error retrieving user preference:", error)
    return defaultValue
  }
}

// Initialize storage when imported (client-side only)
if (typeof window !== "undefined") {
  initializeStorage()
}

