'use server'
import { api } from '../api'

type Props = {
  nameSector: string
  course: number
  token?: string
}

export async function createSector({ nameSector, course, token }: Props) {
  await api.post(
    '/sector/create',
    {
      nameSector,
      course,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
