import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: login logic (call API logic)
    console.log('Login:', {email, password});
  };

  return (
    <Layout>
        
    </Layout>
  )


};