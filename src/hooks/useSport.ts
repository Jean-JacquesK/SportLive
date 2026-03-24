import { useContext } from "react";
import { SportContext } from "../context/SportContext";

// Hook custom pour consommer le contexte
export function useSport() {
  return useContext(SportContext)
}