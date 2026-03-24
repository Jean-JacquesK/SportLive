import { createContext } from "react"
import { SPORTS } from "../config/sports"
import type { Sport } from "../types/sports"

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
