'use server'
import { api } from '../api'

type Props = {
  valueRoom: number
  schedule: string
  idClass: string | string[]
  scheduleSend: string
  token?: string
}

export async function registerClassAllocate({
  valueRoom,
  schedule,
  idClass,
  scheduleSend,
  token,
}: Props) {
  await api.post(
    'class/allocate/register',
    {
      valueRoom,
      schedule,
      idClass,
      scheduleSend,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )
}
