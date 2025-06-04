// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import style from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 API 호출 후 리디렉트
    console.log('login:', { email, password });
    // navigate('/dashboard');
  };

  return (
    <Layout>
      {/* 제목 */}
      <h2 className={style.title}>login </h2>

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

        {/* 로그인 버튼 */}
        <button type="submit" className={style.button}>
          login
        </button>
      </form>

      {/* 회원가입 링크 */}
      <p className={style.signupLink}>
        don't you have an account? <Link to="/signup">create account</Link>
      </p>
    </Layout>
  );
}
