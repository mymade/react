import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [count, setCount] = useState(0)
    let post = "강남 우동 맛집"
    let [a,b] = useState('남자 코트 추천')
    // a는 usestate에 넣은 값, b는 state 변경을 도와주는 함수이다.

  return (
    <>
      <div className='App'>
        <div className="black-dev">
          <h4>블로그임</h4>
        </div>
        <div className="list">
          <h4>{a}</h4>
          <p className='date'>2월 17일 발행</p>
        </div>
      </div>
    </>
  )
}

export default App
