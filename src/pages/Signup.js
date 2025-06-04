// src/pages/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import style from './Signup.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPw) {
      alert('unmatched password.');
      return;
    }
    // TODO: 회원가입 API 호출 후 성공 시 리디렉트
    console.log('create account:', { email, password });
    // navigate('/login');
  };

  return (
    <Layout>
      {/* 제목 */}
      <h2 className={style.title}>create account</h2>

      {/* 폼 시작 */}
      <form onSubmit={handleSubmit}>
        {/* 이메일 입력 */}
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>
            email
          </label>
          <input
            type="email"
            id="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className={style.formGroup}>
          <label htmlFor="password" className={style.label}>
            password
          </label>
          <input
            type="password"
            id="password"
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* 비밀번호 확인 입력 */}
        <div className={style.formGroup}>
          <label htmlFor="confirmPw" className={style.label}>
            password confirmation
          </label>
          <input
            type="password"
            id="confirmPw"
            className={style.input}
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            required
          />
        </div>

        {/* 회원가입 버튼 */}
        <button type="submit" className={style.button}>
          create account
        </button>
      </form>

      {/* 로그인 링크 */}
      <p className={style.loginLink}>
        Do you already have an account? <Link to="/login">login</Link>
      </p>
    </Layout>
  );
}
