import {Header, Container} from 'components'

export default function Home() {
  return (
    <div>
      <Header color="secondary" bgImage="/img/photos/local-nanny-share.png">
        <Container size="large">
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <Container>
            <p className="fs--medium">
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </p>
          </Container>
        </Container>
      </Header>
    </div>
  )
}
