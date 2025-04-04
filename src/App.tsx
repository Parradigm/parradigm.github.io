import React, { useState } from "react";
import logo from "./assets/bluelogo.svg";
import Video from "./components/Video";
import "./App.css";

function App() {
  const [email, setEmail] = useState(""); // 이메일 상태 관리
  const [message, setMessage] = useState(""); // 성공/실패 메시지 상태 관리

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwuJQ1zeV_fsc4WX9mHcspPU9W7gFf11M1v3E2p3_FxBWClP3DVdOT1HCWVN4xWUCwH-A/exec",
        {
          method: "POST",
          mode: "no-cors", // CORS 문제 해결을 위한 설정
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }), // 이메일 데이터를 JSON으로 전송
        }
      );

      if (response.ok) {
        // no-cors 모드에서는 응답을 확인할 수 없음. 따라서 else문에서 입력받음을 안내함.
      } else {
        const result = await response.json(); // JSON 응답 파싱
        setMessage(result.message);
        setEmail(""); // 입력 필드 초기화
      }
    } catch (error) {
      setMessage("Email successfully submitted!");
      setEmail(""); // 입력 필드 초기화
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="content">
        <div className="video-section">
          <Video />
        </div>
        <div className="main-section">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Brand-name">parrodigm</p>
          <h1 className="main-heading">
            Perfect customization, <br />
            back to where it all began
          </h1>
          <p className="sub-heading">
            Join and be the <span className="highlight">first</span> to
            experience innovation
          </p>
          <form className="email-input" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // 이메일 상태 업데이트
            />
            <button type="submit">➤</button>
          </form>
          {message && <p className="message">{message}</p>} {/* 메시지 표시 */}
        </div>
      </div>
    </div>
  );
}

export default App;
