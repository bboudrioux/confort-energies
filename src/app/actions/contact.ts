'use server'

import { EMAIL, PHONE } from '@/lib/utils'

type ContactState = { success?: boolean; error?: string } | null

export async function sendContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const prestation = formData.get('prestation') as string
  const message = formData.get('message') as string
  const consent = formData.get('consent')

  if (!name || !phone || !email || !message || !consent) {
    return { error: 'Veuillez remplir tous les champs obligatoires.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Adresse email invalide.' }
  }

  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    const res = await fetch(`${siteUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, prestation, message }),
    })
    if (!res.ok) throw new Error()
    return { success: true }
  } catch {
    return { error: `Une erreur est survenue. Appelez-nous au ${PHONE}.` }
  }
}
