import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import useToggleState from '../hooks/useToggleState'
const navLinkStyles = "py-4 text-lg xl:mx-8"
export default function Home() {
  const [navbar, toggleNavbar] = useToggleState()
  return (
    <>
      <Head>
        <title>Tatzmichu.org</title>
      </Head>
      <Navbar open={navbar} toggleNav={toggleNavbar}>
        <Link className={navLinkStyles} href="/">Home</Link>
        <Link className={navLinkStyles} href="#about">About</Link>
        <Link className={navLinkStyles} href="#proccess">Proccess</Link>
        <Link className={navLinkStyles} href="#contact">Contact</Link>
        <Link className={navLinkStyles} href="/donate"><button className="bg-light-green py-2 px-12 rounded-3xl">Donate</button></Link>
      </Navbar>
    </>
  )
}
