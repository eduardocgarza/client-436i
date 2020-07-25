import { useState } from "react"
import IStudent from "../types/IStudent"
import { matchesTestData } from "../data/matchesTestData"

export default function useMatches() {
  const [matches, setMatches] = useState<IStudent[]>(matchesTestData)
  return { matches, setMatches }
}