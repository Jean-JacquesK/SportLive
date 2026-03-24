import { useState } from "react"
import { SPORTS } from "../config/sports"
import type { Sport } from "../types/sports"
import { SportContext } from "../context/SportContext"

export function SportProvider({ children }: { children: React.ReactNode }) {
  const [selectedSport, setSelectedSport] = useState<Sport>(SPORTS[0])
  const [filter, setFilter] = useState<FilterValue>("ALL")

  return (
    <SportContext.Provider value={{ selectedSport, setSelectedSport, filter, setFilter }}>
      {children}
    </SportContext.Provider>
  )
}