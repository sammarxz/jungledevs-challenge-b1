import Image from 'next/image'
import Link from 'next/link'
import {Header, Nav, Container, Button, Split, Avatar} from 'components'

export default function Home() {
  return (
    <div>
      <Header color="secondary" bgImage="/img/photos/local-nanny-share.png">
        <>
          <Nav />
          <Container size="large">
            <Split>
              <div className="">
                <h1 className="fw--500 mb--xsmall mw--600">
                  Easily create or join a local nanny share with Hapu
                </h1>
                <p className="fs--medium mb--large">
                  Hapu is Airbnb for nanny share. Share your home, nanny and
                  costs and create new flexible, affordable solutions in
                  childcare.
                </p>
                <div className="mt--small d--flex ai--center">
                  <Button
                    icon={
                      <Image
                        src="/img/icons/Play.svg"
                        alt="Play Icon"
                        width={16}
                        height={20}
                      />
                    }
                  />
                  <span className="fw--500 td--underline pl--xsmall c--pointer">
                    See hapu in action (27 seconds)
                  </span>
                </div>
              </div>
              <div className="ta--center">
                <span className="hide--mb">
                  <Image
                    src="/img/screens/hapu-card-connection.png"
                    alt="Hapu Connection System"
                    width={356}
                    height={330}
                    layout="fixed"
                  />
                </span>
              </div>
            </Split>
          </Container>
        </>
      </Header>
      <section className="d--flex ai--center jc--center wrap bg--white bt--1 bb--1 bc--lightGray pt--large pb--large ta--center fw--500">
        <Avatar
          image="/img/users/sarah.png"
          alt="Sarah"
          hasBoxShadow
          className="mr--xsmall"
        />
        <Link href="#">
          <a className="c--secondary td--underline">
            Sarah’s day care available now in North Sydney
          </a>
        </Link>
        <time className="ml--xxsmall">
          Wednesday, Thursday, Friday - 7:30 - 5:30
        </time>
      </section>
    </div>
  )
}
