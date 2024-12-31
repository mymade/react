import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState([0, 0, 0])
    // let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])

    // 리액트는 코드를 순차적으로 실행하므로 useState 안에 실행될 변수는 그 앞에 위치해야 한다.



    const moreData = [
      { key:"0", title:"남자 코트 추천", sub:"코트 나라", detail:"상세 내용1", date:"2024-12-20",},
      {key:"1", title:"강남 우동 맛집", sub:"진우동", detail:"상세 내용2", date:"2024-12-21"},
      {key:"2", title:"파이썬 독학", sub:"코딩애플", detail:"상세 내용3", date:"2024-12-22"}
    ]

    

    const [데이터, set데이터] = useState(() => {
      const savedData = localStorage.getItem('데이터');
      return savedData ? JSON.parse(savedData) : moreData;
    });
    
    


    const [글제목,글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집","파이썬 독학"])

    // a는 usestate에 넣은 값, b는 state 변경을 도와주는 함수이다.
    // 위의 문법은 let [a, c] = [0, 1] 와 같은 문법이다.
    // 위에서 오른쪽의 값 상태는 ['남자 코트 추천',''] < 상태라고 볼 수 있다.
    // 변수와 state의 차이 -> 일반 변수는 갑자기 변경되면 html에 반영이 되지 않는다.
    // 반면 state 쓰던 html은 자동 재렌더링이 된다.
    let [모달창안열림,모달창열림] = useState([false,false,false]);
    let mapArray = [1,2,3].map(function(){
      return '111112211'
    })
    let [버튼명, set버튼명] = useState([false, false, false])



    let [liked, setliked] = useState([false,false,false])

    console.log(mapArray)

    const [issort, setSort] = useState(true)


    // function postFilter(){
    //   let new글제목 = [...글제목]
    //   new글제목.sort()
    //   글제목변경(new글제목)

    //   let new데이터=[...데이터]
    //   new데이터 = new데이터.sort()
    //   set데이터(new데이터)
      
    // }


    function postFilter(){

      let new데이터=[...데이터]
      new데이터.sort((a, b) => {
        if (a.title < b.title) return issort ? -1 : 1;  // a.sub이 b.sub보다 앞이면
        if (a.title > b.title) return issort ? 1 : -1;   // b.sub이 a.sub보다 앞이면
        return 0; // 같은 경우는 변경하지 않음
      });
      set데이터(new데이터);
      setSort(!issort)

    }

    let [ 입력값, 입력값변경] = useState()

    function addPost(input){
        const 새데이터 = {
          key : String(데이터.length),
          title : 입력값,
        }
        const 추가데이터 = [ ... 데이터, 새데이터]
        set데이터(추가데이터)
      }
  
  // 원시깂깂
  let go = "이름"    
  let newGo = [...go]
  newGo = "이름ㅋ"
  console.log(newGo)

  // 얕은 복사
  let no = { title: "제목입니다", detail: "정보입니다", date: { year: "2025" } };

  // 깊은 복사 (직접 구현한 방법)
  let newNo = JSON.parse(JSON.stringify(no));  // 깊은 복사
  // JSON.stringity(변수명) 이 메서드는 (변수명) 객체를 json 문자열로 변환한다. 
  
  newNo.date.year = "2026";  // newNo에서 year를 수정
  
  console.log(no.date.year);    // "2025"  (no는 영향을 받지 않음)
  console.log(newNo.date.year); // "2026"  (newNo만 수정됨)
  
  

    function openModal(i){
      const new모달창 = [...모달창안열림]
      new모달창[i] = !new모달창[i]
      모달창열림(new모달창)
      
      const new버튼 = [...버튼명]
      new버튼[i] = !new버튼[i]
      set버튼명(new버튼)

    }

    function likedBtn(i){
      const new좋아요 = [...liked]
      new좋아요[i] = !new좋아요[i]
      setliked(new좋아요)

      setCount(prevCount => {
        const newCount = [...prevCount];
        newCount[i] = newCount[i] === 0 ? 1 : 0;  // 각 인덱스 값 토글
        return newCount;
      });
    }

    function moreBtn(i){
      console.log("왜않되")
      let new데이터 = [...데이터];
      new데이터[i] = {...new데이터[i], title: new데이터[i].title == "남자 코트 추천" ? "여자코트추천" : "남자코트ㅇ추천"}// 예시로 값 변경
      // new데이터[i] = {...new데이터[i], title: "제목임"};
      set데이터(new데이터)
    }

  return (
    <>
      <div className='App'>
        <div className="black-dev">
          <h4>블로그임</h4>
        </div>
        <div className='submit-box'>
            <input type="text" onChange={(e)=>{
              입력값변경(e.target.value)
              console.log(입력값)
            }} placeholder='이곳에 내용을 입력해주세요' />
            <button className='submit-btn' onClick={addPost}>전송</button>
        </div>
        <div className='sort-btn' >
          <button onClick={postFilter}>
            <i className={"bi bi-sort-alpha-down" + (issort == false ? " d-none" : "")}> 정렬 버튼</i>
            <i className={"bi bi-sort-alpha-down-alt" + (issort == true ? " d-none" : "")}> 정렬 버튼</i>
            </button>
        </div>
        {
          데이터.map((a,i)=>{
            return(
              <div className="list" key={a.i}>
                <div className='d-flex'> 
                  <h4>{ a.title }</h4>
                  <button className='more-btn' onClick={()=>{openModal(i)}}>{버튼명[i] == false ? "더보기":"닫기"}</button>
                </div>
                <button className='like-btn' onClick={()=>{likedBtn(i)}}>좋아요 {count[i]}
                    {
                      liked[i] ? <i className="bi bi-hand-thumbs-up-fill"></i> : <i className="bi bi-hand-thumbs-up"></i>
                    }
                </button>

                {모달창안열림[i] ? <Modal 클릭={()=>{moreBtn(i)}}  작명={[데이터[i]]}></Modal> : null}
              </div>
             )
          })
        }
         
      </div>
    </>
  )
}



function Modal(props){
  return(
    <>
      {
        props.작명.map((a)=>{
          return(
            <div className="modal" key={a.key}>
                <h4>{a.sub}</h4>
                <p>{a.date}</p>
                <p>{a.detail}</p>
                <button onClick={()=>{props.클릭()}} >글 수정</button>
            </div>
          )
        })
      }
    </>
  )
}


export default App
