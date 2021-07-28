import Image from 'next/image'
import Link from 'next/link'
import {
  Header,
  Nav,
  Container,
  Button,
  Split,
  Avatar,
  Section,
  Divider,
  Footer,
} from 'components'

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
      <section className="bg--white bt--1 bb--1 bc--midGray pt--small pb--small ta--center fw--500">
        <Container className="d--flex ai--center jc--center wrap">
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
        </Container>
      </section>
      <div className="bg--lightGray">
        <Container>
          <Section>
            <Split invertOrder>
              <div className="">
                <h2 className="mb--small mw--300">
                  Share your home, nanny and costs
                </h2>
                <p className="mb--small">
                  You have a fantastic home, a fantastic nanny and wouldn’t
                  cutting your costs in half be, well, fantastic?! If only it
                  was easy to connect with other parents to share your costs?
                  Well now it is, with Hapu.{' '}
                  <Link href="#">
                    <a className="c--secondary td--underline fw--500">
                      Hapu means tribe
                    </a>
                  </Link>{' '}
                  and it’s our foundational 3 tribal principles that empowers
                  you to create and manage your own tribe. A tribe that together
                  has the power to create new affordable solutions in childcare
                  that work for you and your community.
                </p>
                <Link href="/">
                  <a className="c--secondary td--underline fw--500">
                    Ready to get started?
                  </a>
                </Link>
              </div>
              <Image
                src="/img/screens/hapu-system.png"
                alt="Hapu system dashboard"
                width={584}
                height={392}
              />
            </Split>
          </Section>
          <Divider />
          <Section>
            <Split>
              <Image
                src="/img/screens/hapu-shared-payments.png"
                alt="Hapu system dashboard"
                width={456}
                height={336}
              />
              <div className="">
                <h2 className="mb--small mw--300">
                  Share your home, nanny and costs
                </h2>
                <p className="mb--small">
                  Sometimes it’s hard enough just sharing a restaurant bill. Try
                  sharing that bill week in, week out and you might encounter
                  more than a few snares. But not with Hapu. Simply set your
                  rates and our automated payment system takes care of the rest.
                  You need never talk money or who owes what.
                </p>
                <Link href="/">
                  <a className="c--secondary td--underline fw--500">
                    Read how Bridget’s share (without Hapu) ended over $15
                  </a>
                </Link>
              </div>
            </Split>
          </Section>
          <Divider />
          <Section className="ta--center">
            <h2 className="mb--small">A framework built for the long term</h2>
            <p className="mw--800 mx--auto mb--small">
              Childcare is for the long term. And you need a framework you can
              count on that gives your share long term viability and success.
              That’s why we’ve defined Hapu around our three tribal principles;
              clearly defined process, transparency over money and equality of
              participation.
            </p>
            <Link href="#">
              <a className="c--secondary td--underline fw--500">
                Read how Hapu’s tribal background defines our app
              </a>
            </Link>
            <div className="hide--mb mt--xlarge">
              <Image
                src="/img/screens/hapu-billing-story.png"
                alt="Hapu Billing History System"
                width={984}
                height={392}
              />
            </div>
          </Section>
          <Divider />
          <Section className="ta--center">
            <div className="mb--small">
              <Image
                src="/img/illustras/nanny-share-daily-diario.png"
                alt="Illustration of Nanny share daily diario"
                width={216}
                height={96}
              />
            </div>
            <h2 className="mb--small">Coming soon: Nanny Share Daily Diary!</h2>
            <p className="mw--800 mx--auto mb--0">
              With the Hapu daily diary your nanny will be able to update you
              and your sharers with photos and commentary of the day. You and
              sharers will receive notifications and you’ll be able to login to
              view the daily adventures fo your little ones. We can’t wait!
            </p>
          </Section>
        </Container>
      </div>
      <Section className="bg--white ta--center">
        <Container>
          <h2 className="mb--small">Become a nanny share host</h2>
          <p className="mb--medium">Takes less than 5 minutes to get started</p>
          <Button
            color="secondary"
            icon={
              <Image
                src="/img/icons/Calendar.svg"
                alt="Calendar Icon"
                width={30}
                height={30}
              />
            }
          >
            Create Your Nanny Share
            <span className="d--block fs--xsmall fw--400">
              Takes less than 5 minutes
            </span>
          </Button>
          <br />
          <Link href="#">
            <a className="c--secondary td--underline fw--500 d--inline-block mt--small">
              Or browse local nanny-shares
            </a>
          </Link>
        </Container>
      </Section>
      <Container>
        <Footer />
      </Container>
    </div>
  )
}
