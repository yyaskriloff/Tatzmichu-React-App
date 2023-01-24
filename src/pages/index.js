import Navbar from '../components/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import useToggleState from '../hooks/useToggleState'
import Button from '../components/Button'
import Header from '../layout/Header'
import { H1, H2, H3, Text, SmallText } from '../components/text'
import Signs from '../layout/Signs'
import Image from '../components/Image'


const navLinkStyles = "py-4 text-lg xl:mx-8"


export default function Home() {
  const [navbar, toggleNavbar] = useToggleState()
  return (
    <>
      <Head>
        <title>Tatzmichu.org</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar open={navbar} toggleNav={toggleNavbar}>
        <Link className={navLinkStyles} href="/">Home</Link>
        <Link className={navLinkStyles} href="#about">About</Link>
        <Link className={navLinkStyles} href="#proccess">Proccess</Link>
        <Link className={navLinkStyles} href="#contact">Contact</Link>
        <Link className={navLinkStyles} href="/donate"><Button>Donate</Button></Link>
      </Navbar>
      <Header img="whats it called">
        <H1>Strengthening Our Roots</H1>
        <H1 light >Strengthening Our Future</H1>
        <Text className="my-7">Subsidizing therapy costs for seminary
          girls in Israel</Text>
      </Header>
      <Signs />
    </>
  )
}
