import Image from 'next/image'

import {Logo} from 'components/Logo'
import {Button} from 'components/Button'

export default function Home() {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <Logo type="normal" />
      <Button
        color="secondary"
        icon={
          <Image
            src="/img/icons/Calendar.svg"
            alt="calender icon"
            width={32}
            height={32}
          />
        }
      >
        Become a Nanny Share Host
        <span className="d--block fs--small">Takes less than 5 minutes</span>
      </Button>
      <Button
        icon={
          <Image
            src="/img/icons/Play.svg"
            alt="play icon"
            width={16}
            height={20}
          />
        }
        onClick={() => console.log('hello')}
      />
      <h1 className="fw--700">
        Hello fucking
        <br />
        World
      </h1>
    </div>
  )
}
