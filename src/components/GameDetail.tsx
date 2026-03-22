import { useParams } from "react-router-dom"

export const GameDetail = () => {
  const { gameID } = useParams<{ gameID: string }>()

  return (
    <div>Match : {gameID}</div>
  )
}
