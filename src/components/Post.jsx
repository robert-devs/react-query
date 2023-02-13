import React from 'react'
import { useQuery } from 'react-query'

const fetchData = async () => {
  const response = await fetch('https://random.dog/woof.json')
  return response.json()
}

const Post = () => {
  const { status, data, error } = useQuery('posts', fetchData)

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>Error: {error.message},try again</p>
  }
  return (
    <div>
      <ul>
        <img src={data.url} alt="dogs" />
      </ul>
    </div>
  )
}

export default Post
