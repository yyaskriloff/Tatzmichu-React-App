import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Head from 'next/head'
import useToggleState from '../hooks/useToggleState'
import Button from '@/components/Button'
import Header from '@/layout/Header'
import { H1, Text } from '@/components/text'
import Signs from '@/layout/Signs'
import OneStudent from '@/layout/OneStudent'
import About from '@/layout/About'
import Chance from '@/layout/Chance'
import Endorsment from '@/layout/Endorsment'
import Process from '@/layout/Process'
import Staff from '@/layout/Staff'
import Contact from '@/layout/Contact'


const navLinkStyles = "my-7 text-lg xl:mx-8"

export default function Home() {
  const [navbar, toggleNavbar] = useToggleState()
  return (
    <>
      <Head>
        <title>Tatzmichu.org</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Paytone+One&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar open={navbar} toggleNav={toggleNavbar}>
        <Link className={navLinkStyles} href="/"><Text>Home</Text></Link>
        <Link className={navLinkStyles} href="#about"><Text>About</Text></Link>
        <Link className={navLinkStyles} href="#proccess"><Text>Proccess</Text></Link>
        <Link className={navLinkStyles} href="#contact"><Text>Contact</Text></Link>
        <Link className={navLinkStyles} href="/donate"><Button>Donate</Button></Link>
      </Navbar>
      <Header img="whats it called">
        <H1>Strengthening Our Roots</H1>
        <H1 className="mb-7 mt-2" light >Strengthening Our Future</H1>
        <Text >Subsidizing therapy costs for seminary
          girls in Israel</Text>
      </Header>
      <main>
        <Signs />
        <OneStudent />
        <About />
        <Chance />
        <Endorsment />
        <Process />
        <Staff />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}
