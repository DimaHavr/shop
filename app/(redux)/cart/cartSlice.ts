/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  color: string
}

export interface CartState {
  items: CartItem[]
  showCart: boolean
  totalPrice: number
  totalQuantities: number
}

const initialState: CartState = {
  items: [],
  showCart: false,
  totalPrice: 0,
  totalQuantities: 0,
}

const calculateTotalPriceAndQuantities = (items: CartItem[]) => {
  let totalPrice = 0
  let totalQuantities = 0

  for (const item of items) {
    totalPrice += item.price * item.quantity
    totalQuantities += item.quantity
  }

  return { totalPrice, totalQuantities }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      )

      if (existingItem) {
        // If the item already exists in the cart, create a new array with updated quantity
        state.items = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        )
      } else {
        // Otherwise, add it to the cart
        state.items.push(action.payload)
      }

      state.showCart = true // Set showCart to true when an item is added

      // Update totalPrice and totalQuantities
      const { totalPrice, totalQuantities } = calculateTotalPriceAndQuantities(
        state.items,
      )
      state.totalPrice = totalPrice
      state.totalQuantities = totalQuantities
    },
    removeItem: (state, action: PayloadAction<number>) => {
      // Remove an item from the cart by its ID
      const index = state.items.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.items.splice(index, 1)
      }

      // Check if the cart is empty after removing an item and hide the cart
      state.showCart = state.items.length > 0

      // Update totalPrice and totalQuantities
      const { totalPrice, totalQuantities } = calculateTotalPriceAndQuantities(
        state.items,
      )
      state.totalPrice = totalPrice
      state.totalQuantities = totalQuantities
    },
    clearCart: state => {
      // Clear the entire cart
      state.items = []
      state.showCart = false

      // Update totalPrice and totalQuantities
      state.totalPrice = 0
      state.totalQuantities = 0
    },
    toggleCartItemQuantity: (state, action: PayloadAction<number>) => {
      // Toggle the quantity of an item in the cart by its ID
      const itemToToggle = state.items.find(item => item.id === action.payload)
      if (itemToToggle) {
        itemToToggle.quantity = itemToToggle.quantity === 1 ? 0 : 1
      }
      const { totalPrice, totalQuantities } = calculateTotalPriceAndQuantities(
        state.items,
      )
      state.totalPrice = totalPrice
      state.totalQuantities = totalQuantities
    },
    decQty: (state, action: PayloadAction<number>) => {
      // Decrease the quantity of an item in the cart by its ID
      const itemToDecrement = state.items.find(
        item => item.id === action.payload,
      )
      if (itemToDecrement && itemToDecrement.quantity > 0) {
        itemToDecrement.quantity = -1
      }
    },
    incQty: (state, action: PayloadAction<number>) => {
      // Increase the quantity of an item in the cart by its ID
      const itemToIncrement = state.items.find(
        item => item.id === action.payload,
      )
      if (itemToIncrement) {
        itemToIncrement.quantity = +1
      }
    },
    setQty: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>,
    ) => {
      // Set the quantity of an item in the cart by its ID
      const { itemId, quantity } = action.payload
      const itemToSetQty = state.items.find(item => item.id === itemId)
      if (itemToSetQty) {
        itemToSetQty.quantity = quantity
      }
    },
    setColor: (
      state,
      action: PayloadAction<{ itemId: number; color: string }>,
    ) => {
      // Set the color of an item in the cart by its ID
      const { itemId, color } = action.payload
      const itemToSetColor = state.items.find(item => item.id === itemId)
      if (itemToSetColor) {
        itemToSetColor.color = color
      }
    },
    setSize: (
      state,
      action: PayloadAction<{ itemId: number; size: string }>,
    ) => {
      // Set the size of an item in the cart by its ID
      const { itemId, size } = action.payload
      const itemToSetSize = state.items.find(item => item.id === itemId)
      if (itemToSetSize) {
        itemToSetSize.size = size
      }
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    },
    setTotalQuantities: (state, action: PayloadAction<number>) => {
      state.totalQuantities = action.payload
    },
  },
})

const persistConfig = {
  key: 'cart',
  storage,
  blacklist: ['showCart'],
}

export const {
  addItem,
  removeItem,
  clearCart,
  setShowCart,
  toggleCartItemQuantity,
  decQty,
  incQty,
  setQty,
  setColor,
  setSize,
  setTotalPrice,
  setTotalQuantities,
} = cartSlice.actions

export const persistedCartSlice = persistReducer(
  persistConfig,
  cartSlice.reducer,
)
