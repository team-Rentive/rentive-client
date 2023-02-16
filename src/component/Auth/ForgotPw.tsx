import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { emailState } from '@/recoil/atoms'

function ForgotPw(){
  const [email, setEmail] = useRecoilState(emailState);

  const handleId = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
    setEmail(e.target.value);
  };

  const onClickForgot = () => {
    axios.put('/api/v1/sendAuthMail', {
      email,
    },
    {
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return(
    <>
      <h3>비밀번호 찾기 페이지</h3>
      <form>
        {/* 이메일 관련 */}
        <input type="email" className="form-control was-validate" id="id" placeholder="name@example.com" name="name" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" title="이메일을 입력하세요."onChange={handleId}/>
        <br/>

        {/* 비밀번호 찾기 관련 */}
        <button type="submit" onClick={onClickForgot}>
          비밀번호 찾기
        </button>
      </form>
      
      <span style={{fontSize: "1rem"}}>
        비밀번호가 기억나셨나요? &nbsp;
        <Link to="/login" className="fw-bold" style={{fontSize: "1rem"}}>
          로그인
          </Link>
      </span>
    </>
  )
}

export default ForgotPw;