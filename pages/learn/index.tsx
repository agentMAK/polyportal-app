import type { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../components/NavBar'

const index: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Learn Web3</h1>
      <Link href='/learn/web3'>Introduction of Web3</Link>

    </div>
  )
}

export default index
