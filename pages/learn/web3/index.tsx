import type { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../../components/NavBar'

const index: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>The Beginners Journey into Web3</h1>
      <Link href='/learn/web3/setupMetamask'>Hello</Link>

    </div>
  )
}

export default index
