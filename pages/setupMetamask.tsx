import type { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../components/NavBar'

const setupMetaMask: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>The Beginners Journey into Web3</h1>
      <Link href='/'>Hello</Link>

    </div>
  )
}

export default setupMetaMask
