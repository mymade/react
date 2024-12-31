import { useState } from 'react'
import './App.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
    
    // 달력
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
      setDate(newDate);  // 선택된 날짜 상태 업데이트
    };


    // 게시물 관리

    const moreData = [
      // { key:"0", break:"남자 코트 추천", sub:"코트 나라", detail:"상세 내용1", date:"2024-12-20",},
      // {key:"1", break:"강남 우동 맛집", sub:"진우동", detail:"상세 내용2", date:"2024-12-21"},
      // {key:"2", break:"파이썬 독학", sub:"코딩애플", detail:"상세 내용3", date:"2024-12-22"}
      { key:"0", title:"남자 코트 추천", sub:"코트 나라", detail:"상세 내용1", date:"2024-12-20",},
      {key:"1", title:"강남 우동 맛집", sub:"진우동", detail:"상세 내용2", date:"2024-12-21"},
      {key:"2", title:"파이썬 독학", sub:"코딩애플", detail:"상세 내용3", date:"2024-12-22"}
    ]

    const [데이터, set데이터] = useState(moreData)

      // 인풋 데이터 추가
        let [ 메뉴명, 메뉴명변경] = useState()
        let [ 입력값, 입력값변경] = useState()

        function addPost(input){
            const 새데이터 = {
              key : String(데이터.length),
              title : 입력값,
            }
            const 추가데이터 = [ ... 데이터, 새데이터]
            set데이터(추가데이터)
          }
      
    

    // 모달창 관리
    let [모달창안열림,모달창열림] = useState([false,false,false]);

      // 모달창 실행 함수
      function openModal(i){
        const new모달창 = [...모달창안열림]
        new모달창[i] = !new모달창[i]
        모달창열림(new모달창)
        
        const new버튼 = [...버튼명]
        new버튼[i] = !new버튼[i]
        set버튼명(new버튼)
      }

    // 더보기 버튼
    let [버튼명, set버튼명] = useState([false, false, false])


    // 좋아요 버튼 & 숫자
    let [liked, setliked] = useState([false,false,false])
    const [count, setCount] = useState([0, 0, 0])

      // 좋아요 실행 함수
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


    // 정렬 관리 및 실행
    const [issort, setSort] = useState(true)

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


  return (
    <>
      <div className='App'>
        <div className="black-dev">
          <h4>오늘의 밥🍙</h4>
        </div>
        <div className="d-flex justify-content-center">
          {/* <Calendar></Calendar> */}
        </div>
        <div className='submit-box'>
            <input type="text" onChange={(e)=>{
              입력값변경(e.target.value)
              console.log(입력값)
            }} placeholder='이곳에 내용을 입력해주세요' />
            <button className='submit-btn' onClick={addPost}>전송</button>
        </div>
        
        <form action="" className='menus' style={{display:'flex', flexDirection:'column'}}>
          <h3>오늘은 뭘 먹었나요? <i class="bi bi-search"></i></h3>
            <div>
              <label htmlFor="">아침</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">점심</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="">저녁</label>
              <input type="text" />
            </div>
        
        </form>


        <div className='sort-btn' >
          <button onClick={postFilter}>
            <i className={"bi bi-sort-alpha-down" + (issort == false ? " d-none" : "")}> 정렬 버튼</i>
            <i className={"bi bi-sort-alpha-down-alt" + (issort == true ? " d-none" : "")}> 정렬 버튼</i>
            </button>
        </div>
        {
          데이터.map((a,i)=>{
            return(
              <div className="list" key={a.key}>
                <div className='d-flex'> 
                  <h4>{ a.title }</h4>
                  <button className='more-btn' onClick={()=>{openModal(i)}}>{버튼명[i] == false ? "more":"닫기"}</button>
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
                <div className="imgbox">
                  <img src="" alt="" />
                </div>
                <button onClick={()=>{props.클릭()}} >글 수정</button>
            </div>
          )
        })
      }
    </>
  )
}


export default App
