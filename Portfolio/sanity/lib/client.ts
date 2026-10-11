import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

export const getWriteClient = (token?: string) => {
  const writeToken = token || process.env.SANITY_API_WRITE_TOKEN
  if (!writeToken) {
    throw new Error('Missing SANITY_API_WRITE_TOKEN environment variable')
  }
  return client.withConfig({
    token: writeToken,
    useCdn: false,
  })
}
