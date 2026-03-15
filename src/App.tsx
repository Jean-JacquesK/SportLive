import { useState } from "react"
import { SPORTS } from "./config/sports"
import { useGames } from "./hooks/useGames"
import GameCard from "./components/GameCard"
import { mapStatus } from "./utils/mapStatus"

function App() {
  // 1. State pour le sport sélectionné (par défaut : le premier sport)
  const [selectedSport] = useState(SPORTS[0])

  // 2. Appel du hook
  const { games, loading, error } = useGames(selectedSport)

  // 3. Affichage
  if (loading) return <p>Chargement...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-4">
      {games.map(game => {
        const competitors = game.competitions[0].competitors
        const homeTeam = competitors.find(c => c.homeAway === "home")
        const awayTeam = competitors.find(c => c.homeAway === "away")

        const status = mapStatus(game.status.type.state)

        return (
          <GameCard key={game.id}
            homeTeam={{ name: homeTeam?.team.displayName || "Home", score: homeTeam ? Number(homeTeam.score) : null }}
            awayTeam={{ name: awayTeam?.team.displayName || "Away", score: awayTeam ? Number(awayTeam.score) : null }}
            status={status}
          />
        )
      })}
    </div>
  )
}

export default App
