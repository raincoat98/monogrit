import { NextRequest, NextResponse } from 'next/server'
import { insertConsultation } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, country, program, message } = body

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: '이름과 연락처는 필수입니다.' }, { status: 400 })
    }

    const item = insertConsultation({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() ?? '',
      country: country?.trim() ?? '',
      program: program?.trim() ?? '',
      message: message?.trim() ?? '',
    })

    return NextResponse.json({ ok: true, id: item.id })
  } catch (err) {
    console.error('[consult] error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}
