import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'muhammadismailkpt@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { vehicle, from, to, date, time, passengers, name, phone } = body

    // ── 1. Save to Supabase ──
    const { error: dbError } = await supabase.from('bookings').insert({
      vehicle,
      from_city: from,
      to_destination: to,
      trip_date: date || null,
      trip_time: time || null,
      passengers,
      customer_name: name || null,
      customer_phone: phone || null,
      status: 'pending',
    })
    if (dbError) console.error('Supabase error:', dbError.message)

    // ── 2. Send email via Resend ──
    const { error: emailError } = await resend.emails.send({
      from: 'Saudi Cabs GMC <onboarding@resend.dev>',
      to: [OWNER_EMAIL],
      subject: `🚗 New Booking — ${vehicle} | ${from} → ${to}`,
      html: buildEmail({ vehicle, from, to, date, time, passengers, name, phone }),
    })
    if (emailError) console.error('Resend error:', emailError.message)

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

function buildEmail(d: {
  vehicle: string; from: string; to: string
  date: string; time: string; passengers: string
  name?: string; phone?: string
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;width:140px">${label}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-weight:700;color:#1a1a1a;font-size:14px">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:Arial,sans-serif">
  <div style="max-width:580px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.12)">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0B3D2E,#0F5132);padding:32px;text-align:center">
      <div style="font-size:36px;margin-bottom:10px">🚗</div>
      <h1 style="color:#D4AF37;margin:0;font-size:22px;font-weight:900;letter-spacing:0.5px">New Booking Request</h1>
      <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px">Saudi Cabs GMC — Booking Notification</p>
    </div>

    <!-- Route Banner -->
    <div style="background:#f0f7f4;padding:20px 32px;text-align:center;border-bottom:2px solid #e0ede7">
      <p style="margin:0;font-size:13px;color:#0B3D2E;font-weight:600;letter-spacing:1px;text-transform:uppercase">Route</p>
      <p style="margin:8px 0 0;font-size:22px;font-weight:900;color:#0B3D2E">
        ${d.from} <span style="color:#D4AF37;margin:0 8px">→</span> ${d.to}
      </p>
    </div>

    <!-- Booking Details -->
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      ${row('🚙 Vehicle', d.vehicle)}
      ${row('📅 Date', d.date || 'Not specified')}
      ${row('🕐 Time', d.time || 'Not specified')}
      ${row('👥 Passengers', d.passengers)}
      ${d.name ? row('👤 Name', d.name) : ''}
      ${d.phone ? `<tr>
        <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#666;font-size:14px;width:140px">📞 Phone</td>
        <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:16px;font-weight:900;color:#0B3D2E">
          <a href="tel:${d.phone}" style="color:#0B3D2E;text-decoration:none">${d.phone}</a>
        </td>
      </tr>` : ''}
    </table>

    <!-- CTA -->
    <div style="padding:28px 32px;text-align:center;background:#fafafa">
      ${d.phone ? `
      <a href="https://wa.me/${d.phone.replace(/[^0-9]/g, '')}"
         style="display:inline-block;background:#25D366;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;margin-bottom:12px">
        💬 Reply on WhatsApp
      </a><br>` : ''}
      <a href="tel:+966549317712"
         style="display:inline-block;background:#0B3D2E;color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px">
        📞 Call Driver Line
      </a>
    </div>

    <!-- Footer -->
    <div style="background:#071f17;padding:18px;text-align:center">
      <p style="color:rgba(255,255,255,0.45);margin:0;font-size:12px">
        Saudi Cabs GMC • saudicabsgmc.com • +966 54 931 7712
      </p>
    </div>
  </div>
</body>
</html>`
}
