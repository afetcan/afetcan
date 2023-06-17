export interface Earthquake {
  id: number
  date: string
  latitude: number
  longitude: number
  depth: {
    value: number
    unit: string
  }
  type: string
  magnitude: number
  location: string
}
