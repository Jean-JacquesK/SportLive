import { SPORTS } from "../config/sports"
import { useGames } from "../hooks/useGames"
import GameCard from "../components/GameCard"
import { mapStatus } from "../utils/mapStatus"
import { SportSelector } from "../components/SportSelector"
import { FilterBar } from "../components/FilterBar"
import { useMemo } from "react"
import { useSport } from "../hooks/useSport"

const Home = () => {
  const { selectedSport, setSelectedSport, filter, setFilter } = useSport()

  const { games, loading, error } = useGames(selectedSport)
  
//   const filteredGames = filter === "ALL" ? games : games.filter(game =>  mapStatus(game.status.type.state) === filter )
  const filteredGames = useMemo(() => {
    if (filter === "ALL") return games
    return games.filter(game => mapStatus(game.status.type.state) === filter)
  }, [games, filter])

  // 3. Affichage
  if (error) return <p>{error}</p>

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-20">SportLive</h1>
      <div className="relative">
        <SportSelector sports={SPORTS} selected={selectedSport} onSelect={setSelectedSport} />

        <FilterBar filter={filter} onChange={setFilter} />

        {loading && <p className="flex flex-col justify-center items-center">Loading games...</p>}

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          {filteredGames.map(game => {
            const competitors = game.competitions[0].competitors
            const homeTeam = competitors.find(c => c.homeAway === "home")
            const awayTeam = competitors.find(c => c.homeAway === "away")

            const status = mapStatus(game.status.type.state)

            return (
              <GameCard key={game.id}
                gameID= {game.id}
                homeTeam={{ name: homeTeam?.team.displayName || "Home", score: homeTeam ? Number(homeTeam.score) : null }}
                awayTeam={{ name: awayTeam?.team.displayName || "Away", score: awayTeam ? Number(awayTeam.score) : null }}
                status={status}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home