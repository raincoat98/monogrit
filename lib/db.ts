import fs from 'fs'
import path from 'path'

export type ConsultStatus = 'new' | 'contacted' | 'consulted' | 'enrolled' | 'cancelled'

export interface Consultation {
  id: string
  name: string
  phone: string
  email: string
  country: string
  program: string
  message: string
  status: ConsultStatus
  createdAt: string
  updatedAt: string
}

const DB_PATH = path.join(process.cwd(), 'data', 'consultations.json')

function ensureDb() {
  const dir = path.dirname(DB_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, '[]', 'utf8')
}

export function readAll(): Consultation[] {
  ensureDb()
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
  } catch {
    return []
  }
}

function writeAll(data: Consultation[]) {
  ensureDb()
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
}

export function insertConsultation(
  item: Pick<Consultation, 'name' | 'phone' | 'email' | 'country' | 'program' | 'message'>
): Consultation {
  const all = readAll()
  const now = new Date().toISOString()
  const newItem: Consultation = {
    ...item,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    status: 'new',
    createdAt: now,
    updatedAt: now,
  }
  all.unshift(newItem)
  writeAll(all)
  return newItem
}

export function updateConsultationStatus(id: string, status: ConsultStatus): boolean {
  const all = readAll()
  const idx = all.findIndex((c) => c.id === id)
  if (idx === -1) return false
  all[idx].status = status
  all[idx].updatedAt = new Date().toISOString()
  writeAll(all)
  return true
}

export function deleteConsultation(id: string): boolean {
  const all = readAll()
  const filtered = all.filter((c) => c.id !== id)
  if (filtered.length === all.length) return false
  writeAll(filtered)
  return true
}
