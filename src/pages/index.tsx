import Image from 'next/image'
import {Header, Nav, Container, Button, Split} from 'components'

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
    </div>
  )
}
