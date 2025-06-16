'use server';

import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
});

export async function fetchClientSecret(data) {
  const origin = (await headers()).get('origin');
  const { amount, essayType } = data

  if (!amount || amount <= 0) {
    throw new Error('Invalid price amount')
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${essayType} Editing`,
          },
          unit_amount: Math.round(amount * 100), // convert dollars to cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  })

  return session.client_secret;
}
