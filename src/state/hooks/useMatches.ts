import { useState } from "react"
import IStudent from "../../models/server/IStudent"

export default function useMatches() {
  const [matches, setMatches] = useState<IStudent[]>([])
  return { matches, setMatches }
}