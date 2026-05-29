import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, phone, email, prestation, message } = await req.json()

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    const contactEmail = process.env.CONTACT_EMAIL ?? EMAIL

    await resend.emails.send({
      from: 'Confort & Énergies <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `Nouvelle demande de contact — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1c261f;">
          <div style="background: #17351f; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nouvelle demande de contact</h1>
          </div>
          <div style="background: #f7f4ed; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e8df; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #68756d; font-size: 13px; width: 140px;">Nom</td>
                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #68756d; font-size: 13px;">Téléphone</td>
                <td style="padding: 8px 0; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #68756d; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${email}" style="color: #2e6b3f;">${email}</a></td>
              </tr>
              ${prestation ? `
              <tr>
                <td style="padding: 8px 0; color: #68756d; font-size: 13px;">Prestation</td>
                <td style="padding: 8px 0; font-weight: 600;">${prestation}</td>
              </tr>` : ''}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e8df; margin: 20px 0;" />
            <p style="color: #68756d; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e5e8df; margin: 24px 0;" />
            <a href="mailto:${email}?subject=Re: votre demande&body=Bonjour ${name}," style="display: inline-block; background: #c97b2e; color: white; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: 600; font-size: 14px;">
              Répondre à ${name}
            </a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[CONTACT] Resend error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
