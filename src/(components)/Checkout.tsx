'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

interface CheckoutProps{
  wordCount:number, 
  factor:number, 
  essayType:string
}

console.log("stripproms", stripePromise)

export default function Checkout({ wordCount, factor, essayType }: CheckoutProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSecret = async () => {
      setLoading(true)
      try {
        const amount = Math.round(wordCount * factor * 100) // 💡 Stripe expects cents

        const res = await fetch('/api/create-session', {
          method: 'POST',
          body: JSON.stringify({ amount, essayType }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await res.json()
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        } else {
          console.error("Missing client secret from backend response", data)
        }
      } catch (error) {
        console.error("Failed to fetch client secret:", error)
      } finally {
        setLoading(false)
      }
    }

    if (wordCount > 0 && factor > 0) {
      fetchSecret()
    }
  }, [wordCount, factor, essayType])

  if (loading) return <p>Loading checkout...</p>
  if (!clientSecret) return null

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
