import { createHmac } from 'crypto'
import { cookies } from 'next/headers'

const SECRET = process.env.ADMIN_SECRET ?? 'monogrit-secret-key-change-me'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'admin1234'

function sign(payload: string): string {
  return createHmac('sha256', SECRET).update(payload).digest('hex')
}

export function createSessionToken(): string {
  const payload = `admin.${Date.now()}`
  const sig = sign(payload)
  return Buffer.from(`${payload}.${sig}`).toString('base64url')
}

export function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64url').toString()
    const lastDot = decoded.lastIndexOf('.')
    if (lastDot === -1) return false
    const payload = decoded.slice(0, lastDot)
    const sig = decoded.slice(lastDot + 1)
    return sign(payload) === sig && payload.startsWith('admin.')
  } catch {
    return false
  }
}

export function checkAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}

export function isAdminAuthenticated(): boolean {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('admin_session')?.value
    if (!token) return false
    return verifySessionToken(token)
  } catch {
    return false
  }
}
