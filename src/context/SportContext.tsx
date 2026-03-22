import { createContext, useContext, useState } from "react"
import { SPORTS } from "../config/sports"
import type { Sport } from "../types/sports"

type FilterValue = "ALL" | "LIVE" | "FINAL" | "UPCOMING"

type SportContextType = {
  selectedSport: Sport
  setSelectedSport: (sport: Sport) => void
  filter: FilterValue
  setFilter: (filter: FilterValue) => void
}

export const SportContext = createContext<SportContextType>({
  selectedSport: SPORTS[0],
  setSelectedSport: () => {},
  filter: "ALL",
  setFilter: () => {}
})

export function SportProvider({ children }: { children: React.ReactNode }) {
  const [selectedSport, setSelectedSport] = useState<Sport>(SPORTS[0])
  const [filter, setFilter] = useState<FilterValue>("ALL")

  return (
    <SportContext.Provider value={{ selectedSport, setSelectedSport, filter, setFilter }}>
      {children}
    </SportContext.Provider>
  )
}

// Hook custom pour consommer le contexte
export function useSport() {
  return useContext(SportContext)
}