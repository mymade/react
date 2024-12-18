import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    let post = "강남 우1동 맛집"
    let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
    // a는 usestate에 넣은 값, b는 state 변경을 도와주는 함수이다.
    // 위의 문법은 let [a, c] = [0, 1] 와 같은 문법이다.
    // 위에서 오른쪽의 값 상태는 ['남자 코트 추천',''] < 상태라고 볼 수 있다.
    // 변수와 state의 차이 -> 일반 변수는 갑자기 변경되면 html에 반영이 되지 않는다.
    // 반면 state 쓰던 html은 자동 재렌더링이 된다.
    let [모달창안열림,모달창열림] = useState([false,false,false]);
    let mapArray = [1,2,3].map(function(){
      return '111112211'
    })

    let [liked, setliked] = useState([false,false,false])

    console.log(mapArray)

    console.log('실행')

    function titleChange(){
      글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
      setCount(1)
    }

    function postFilter(){
      let new글제목 = [...글제목]
      new글제목 = new글제목.sort()
      글제목변경(new글제목)
    }

    function openModal(i){
      const new모달창 = [...모달창안열림]
      new모달창[i] = !new모달창[i]
      모달창열림(new모달창)
    }

    function likedBtn(i){
      const new좋아요 = [...liked]
      new좋아요[i] = !new좋아요[i]
      setliked(new좋아요[i])
      console.log(new좋아요[i])
    }

  return (
    <>
      <div className='App'>
        <div className="black-dev">
          <h4>블로그임</h4>
        </div>
        <button onClick={postFilter}>정렬 버튼</button>
        {
          글제목.map((a,i)=>{
            return(
              <div className="list">
                <div className='d-flex'> 
                  <h4>{ 글제목[i] }</h4>
                  <button className='more-btn' onClick={()=>{openModal(i)}}>더보기</button>
                </div>
                <button className='like-btn' onClick={()=>{likedBtn(i)}}>좋아요
                    {
                      liked[i] ? <i class="bi bi-hand-thumbs-up-fill"></i> : <i class="bi bi-hand-thumbs-up"></i>
                    }
                </button>

                {모달창안열림[i] ? <Modal></Modal> : null}
              </div>
             )
          })
        }
              
      </div>
    </>
  )
}



function Modal(){
  return(
    <>
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}


export default App
