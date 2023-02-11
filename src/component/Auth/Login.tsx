import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import {idState, pwState} from '@/recoil/atoms';

function Login(){
  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useRecoilState(pwState);

  const handleInputId = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
    setId(e.target.value);
  };

  const handleInputPassword = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
    setPassword(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const handleLogin = () => {
    // axios 통신
    axios.post('/api/v1/login', {
      email: id,
      password
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then((res) => {
      if (res.status === 200) {
        window.location.href = "/main";
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return(
    <>
      <h3>로그인 페이지</h3>
      <form>
        {/* 아이디 관련 */}
        <input type="email" className="form-control was-validate" id="id" placeholder="name@example.com" name="name" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" title="이메일 주소를 입력하세요." onChange={handleInputId}/>
        <br/>

        {/* 비밀번호 관련 */}
        <input type="password" className="form-control was-validate" id="password" placeholder="Password" name="pwd" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPassword}/>
        <a href='/forgotpw' className="small text-end" style={{textAlign:"center", float:"right", fontWeight: "bold", fontSize: "0.7rem"}}>비밀번호를 잊으셨나요?</a>
        <br/>
        
        {/* 로그인 관련 */}
        <button type="submit" onClick={handleLogin}>
          로그인
        </button>
      </form>

      <span style={{fontSize: "1rem"}}>
        회원이 아니신가요? &nbsp;
        <Link to="/signup" className="fw-bold" style={{fontSize: "1rem"}}>
          회원가입
        </Link>
      </span>
    </>
  )
}

export default Login;