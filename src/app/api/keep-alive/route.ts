import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Called by the Vercel cron in vercel.json. A tiny read keeps the free-tier
// Supabase project from being auto-paused for inactivity.
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  // Vercel sends "Authorization: Bearer <CRON_SECRET>" when CRON_SECRET is set.
  const secret = process.env.CRON_SECRET
  if (secret && req.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { error } = await supabase.from('bookings').select('id', { head: true, count: 'exact' })
  if (error) {
    console.error('Keep-alive Supabase error:', error.message)
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true, at: new Date().toISOString() })
}
