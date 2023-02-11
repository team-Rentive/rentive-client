import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import {idState, pwState, nameState, ageState} from '@/recoil/atoms'

function Signup(){
    const [id, setInputId] = useRecoilState(idState);
    const [password, setInputPassword] = useRecoilState(pwState);
    const [name, setInputName] = useRecoilState(nameState);
    const [age, setInputAge] = useRecoilState(ageState);

    const handleInputId = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
        setInputId(e.target.value);
    };
    
    const handleInputPassword = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
        setInputPassword(e.target.value);
    };
    
    const handleInputName = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
        setInputName(e.target.value);
    };

    const handleInputAge = (e: { target: { value: string | ((currVal: string) => string); }; }) => {
        setInputAge(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // submit default 제출 막음
        console.log('You clicked submit.');

        axios.post('/api/v1/join', {
            // axios body에 보낼 데이터
            email: id,
            password,
            name,
            age
        },
        {
            // axios header
            headers:{
            withCredentials: true,
            'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            console.log("success");
            console.log(res)
            if(res.status === 200){
            // go to signin page
            window.location.href="/signin"
            }
        })
        .catch((err) => {
            console.log("error");
            console.log(err)
        })
    }
    /*
    const confirmPw = () => {
        const pw = (document.getElementById('Password') as HTMLInputElement).value;
        const rpw = (document.getElementById('rePassword') as HTMLInputElement).value;
    
        if(!pw || !rpw){ // null input
          document.getElementById("signup").disabled = true;
        }
        else if(pw.length < 8 || rpw.length < 8){ // 8자 이하 입력
          document.getElementById("signup").disabled = true; // 제출 금지
          document.getElementById("CheckTrue").style.display="none" // result of confirm print
          document.getElementById("CheckFalse").style.display="none"
          document.getElementById("CheckLength").style.display="block"
          document.getElementById("Password").readOnly= false;
          document.getElementById("rePassword").readOnly= false;
        }
        else if(pw !== rpw){ // not correct
          document.getElementById("signup").disabled = true; // 제출 금지
          document.getElementById("CheckTrue").style.display="none" // result of confirm print
          document.getElementById("CheckFalse").style.display="block"
          document.getElementById("CheckLength").style.display="none"
          document.getElementById("Password").readOnly= false;
          document.getElementById("rePassword").readOnly= false;
        }
        else{
          // alert("비밀번호가 일치합니다");
          document.getElementById("signup").disabled = false; // 회원가입 버튼 활성화(비밀번호 검증이 끝났으므로)
          document.getElementById("CheckTrue").style.display="block" // result of confirm print
          document.getElementById("CheckFalse").style.display="none"
          document.getElementById("CheckLength").style.display="none"
          document.getElementById("Password").readOnly= true; // 비밀번호 입력 수정 불가
          document.getElementById("rePassword").readOnly= true; // 비밀번호 재입력 수정 불가
        }
        return <confirm1/>
    }
    */

    return(
        <>
            <h3>회원가입 페이지</h3>
            <form>
            {/* 아이디 관련 */}
            <input type="email" className="form-control was-validate" id="id" placeholder="name@example.com" name="name" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" title="이메일 주소를 입력하세요." onChange={handleInputId}/>
            <br/>

            {/* 비밀번호 관련 */}
            <input type="password" className="form-control was-validate" id="password" placeholder="Password" name="pwd" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPassword}/>
            <br/>
            
            <input type="password" className="form-control was-validate" id="rePassword" placeholder="Password" name="pwd" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호를 다시 입력해주세요." onChange={handleInputPassword}/>

            {/* 비밀번호 확인 관련 */}
            {/* <button type="button" id="confi" onClick={confirmPw}>비밀번호 확인</button><br/> */}
            <div className="valid-feedback" id="CheckTrue">
                비밀번호가 일치합니다.
            </div>
            <div className="invalid-feedback" id="CheckFalse">
                비밀번호가 일치하지 않습니다.
            </div>
            <div className="invalid-feedback" id="CheckLength">
                8자 이상 입력해주세요.
            </div>

            {/* 주소 관련 */}
            <input type="text" className="form-control was-validate" id="floatingPassword" placeholder="주소" name="name" pattern="[ㄱ-힣]{1,8}" title="최대 8자까지의 한글만 입력가능합니다." onChange={handleInputName}/>
            <br/>

            {/* 이름 관련 */}
            <input type="text" className="form-control was-validate" id="floatingPassword" placeholder="이름" name="name" pattern="[ㄱ-힣]{1,8}" title="최대 8자까지의 한글만 입력가능합니다." onChange={handleInputName}/>
            <br/>

            {/* 닉네임 관련 */}
            <input type="text" className="form-control was-validate" id="floatingPassword" placeholder="닉네임" name="age" title="닉네임을 입력하세요." onChange={handleInputAge}/>
            <br/>

            {/* 회원가입 관련 */}
            <button type="submit" id="signup" disabled onClick={handleSubmit}>
                회원가입
            </button>
            </form>

            <span style={{color: "black", fontSize: "1rem"}}>
                이미 회원이신가요? &nbsp;
                <Link to="/login" className="fw-bold">
                    로그인
                </Link>
            </span>
        </>
    )
}

export default Signup;