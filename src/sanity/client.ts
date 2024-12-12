import { createClient, type QueryParams } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-12-12",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN
  // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 560, 
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, 
      tags, 
    },
  })
}
// 2022-03-07