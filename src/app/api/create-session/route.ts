import { NextResponse } from 'next/server'
import { fetchClientSecret } from '../stripe'

export async function POST(req: Request) {
  const body = await req.json()
  try {
    const clientSecret = await fetchClientSecret(body)
    return NextResponse.json({ clientSecret })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
