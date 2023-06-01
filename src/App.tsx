import './App.css'

import reactLogo from './assets/react.svg'
import { usePostQuery } from './api'
import viteLogo from '/vite.svg'

function App() {
  const { data, isLoading } = usePostQuery()


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Env practice</h1>
      <div className="card">
        {isLoading && <p>Loading...</p>}
        {data && data.map((post) => <p key={post.id}>{post.title}</p>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
