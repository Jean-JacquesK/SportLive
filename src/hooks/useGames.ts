import { useEffect, useState } from 'react'
import type { Sport } from '../types/sports'
import type { Game } from '../types/game'

type UseGamesReturn = {
  games: Game[]
  loading: boolean
  error: string | null
}

type ScoreboardResponse = {
  events?: Game[]
}

export function useGames(sport: Sport): UseGamesReturn {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchGames = async () => {
      try {
        setLoading(true)
        setError(null)

        const baseUrl = import.meta.env.VITE_SPORT_LIVE_API_URL
        if (!baseUrl) {
          throw new Error('VITE_SPORT_LIVE_API_URL is not defined')
        }

        const url = `${baseUrl}/${sport.sport}/${sport.league}/scoreboard`
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`)
        }

        const data = (await response.json()) as ScoreboardResponse
        setGames(data.events ?? [])
        setLoading(false)
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }

        const message = err instanceof Error ? err.message : 'Failed to fetch games'
        setError(message)
        setLoading(false)
      }
    }

    fetchGames()

    return () => {
      controller.abort()
    }
  }, [sport])

  return { games, loading, error }
}
