'use client'

import Image from 'next/image'
import { useQuery, useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import gql from 'graphql-tag'
const query = gql``

export default function Home() {
  const { data } = useQuery(
    query,
    {
      variables: {
        url: '/'
      },
      context: {
        headers: {
          'Accept': '*/*',
        }
      },
      ssr: true,
    }
  )
  return (
    <div>
      data: {data && JSON.stringify(Array.from(Object.keys(data.url)))}
    </div>
  )
}
