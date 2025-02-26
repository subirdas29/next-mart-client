'use client'

import { useUser } from "@/context/UserContext"

const HomePage = () => {
  const user = useUser()
  console.log(user)
  return (
    <div>
     
    </div>
  )
}

export default HomePage
