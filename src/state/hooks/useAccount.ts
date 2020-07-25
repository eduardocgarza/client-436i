import { useState } from "react"
import { IAccount, INITIAL_ACCOUNT } from "../types/IAccount"

export default function useAccount() {
  const [account, setAccount] = useState<IAccount>(INITIAL_ACCOUNT)
  return { account, setAccount }
}