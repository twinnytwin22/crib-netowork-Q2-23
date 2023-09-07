import { NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
export async function POST(req: Request) {
  try {
    if (req.method === 'POST') {
      const payload = await req?.text()
      if (!payload) {
        return NextResponse.json({ error: 'Payload is empty', status: 406 })
      }
      const headersList = req.headers
      const signatureHeader =  headersList.get(SIGNATURE_HEADER_NAME) || '' as string
      const signature = Array.isArray(signatureHeader)
      ? signatureHeader[0]
      : signatureHeader

      if (!signature) {
        return NextResponse.json({ error: 'No Signature', status: 401, headers: JSON.stringify(headersList) })
      }

      const secret = process.env.SANITY_WEBHOOK_SECRET?.trim()
      if (!secret) {
        return NextResponse.json({ error: 'Webhook secret not set', status: 401 })
      }

      if (!isValidSignature(payload, signature, secret)) {
        return NextResponse.json({ error: 'Invalid Signature', status: 401 })
      }

      return NextResponse.json({
        success: 'Sanity Webhook is working',
        status: 200
      })
    } else {
      return NextResponse.json({
        error: 'Method not allowed, or working, please update and try again',
        status: 405
      })
    }
  } catch (error) {
    // Handle any unexpected errors here
    console.error('Error in webhook processing:', error)
    return NextResponse.json({
      error: 'Internal server error',
      status: 500
    })
  }
}
