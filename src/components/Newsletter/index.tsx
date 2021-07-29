import {useState, FormEvent} from 'react'
import Image from 'next/image'
import * as S from './styles'

import {Input, Button} from '../'

type newsletterProps = {}

type statusProps = {
  type: 'initial' | 'success' | 'error' | 'loading'
  msg?: string
}

export function Newsletter({}: newsletterProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<statusProps>({type: 'initial'})

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (name.trim() === '' || email.trim() === '') {
      return
    }

    setStatus({type: 'loading'})

    const res = await fetch(
      'https://api.jungledevs.com/api/v1/challenge-newsletter/',
      {
        body: JSON.stringify({
          name,
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )

    const result = await res.json()

    if (!(result.detail === 'Ok.')) {
      setStatus({type: 'error', msg: 'Something went wrong. Try again later.'})
      return
    }

    setStatus({type: 'success', msg: 'Great! Confirm your email'})
    cleanupInputs()
  }

  function cleanupInputs() {
    setName('')
    setEmail('')
  }

  function render() {
    switch (status.type) {
      case 'success': {
        return (
          <div className="d--flex ai--center jc--center">
            <Image
              src="/img/icons/Success.svg"
              alt="Success Icon"
              width={24}
              height={24}
            />
            <span className="fw--500 ml--xxsmall">{status.msg}</span>
          </div>
        )
      }
      case 'error': {
        return (
          <div className="d--flex ai--center jc--center">
            <Image
              src="/img/icons/Error.svg"
              alt="Error Icon"
              width={24}
              height={24}
            />
            <span className="fw--500 ml--xxsmall">{status.msg}</span>
          </div>
        )
      }
      default: {
        return (
          <>
            <Input
              type="text"
              placeholder="Your Name"
              className="mr--xsmall mrb--xxsmall"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="mr--xsmall mb--xxsmall"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Button type="submit">
              {status.type === 'loading' ? 'Sending...' : 'Send'}
            </Button>
          </>
        )
      }
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit} aria-label="form">
      {render()}
    </S.Wrapper>
  )
}
