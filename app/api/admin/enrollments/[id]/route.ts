import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'
import { updateConsultationStatus, deleteConsultation, type ConsultStatus } from '@/lib/db'

const VALID_STATUSES: ConsultStatus[] = ['new', 'contacted', 'consulted', 'enrolled', 'cancelled']

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { status } = await req.json()
  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: '유효하지 않은 상태입니다.' }, { status: 400 })
  }
  const ok = updateConsultationStatus(params.id, status)
  return ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ error: '항목을 찾을 수 없습니다.' }, { status: 404 })
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const ok = deleteConsultation(params.id)
  return ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ error: '항목을 찾을 수 없습니다.' }, { status: 404 })
}
