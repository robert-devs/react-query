import './App.css'
// import { useQuery } from 'react-query'
// import axios from 'axios'
import Post from './components/Post'

function App() {
  // const { isLoading, error, data } = useQuery('Dogs', () =>
    // axios('https://random.dog/woof.json'),
  // )
  // if (error) return <h3>Error :{error.message},try again</h3>
  // if (isLoading) return <h3>Loading</h3>
  // console.log(data)
  return (
    <div>
      {/* <img src={data.data.url} alt="dogs" /> */}
      <Post/>
    </div>
  )
}

export default App
