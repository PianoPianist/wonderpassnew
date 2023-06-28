"use client"
import React, {useState} from 'react'
import Navbar from '@/components/Navbar';
import styles from './login.module.css'
import GoogleLogin from 'react-google-login';

export default function Login() {
  const handlefailure = (result) =>{
    console.log(result)
  }
  const handlelogin = (googleData) =>{
    console.log(googleData)
  }
  return (
    <div>
    <Navbar className={styles.nav} />
    {/* <form className={styles.screen}>
    <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
    </div>
      <div className={styles.loginBox}>
          <h1 className={styles.loginHead}>Login</h1>
          <label className={styles.labels}>Username</label>
          <input className={styles.username} type='text' placeholder='Username' />
          <label className={styles.labels}>Password</label>
          <input className={styles.password} type='password' placeholder='Password' />
          <a className={styles.loginBtn}><button>Login</button></a>
          <label className={styles.labels}>Don't have an account, <a href="/signup" style={{cursor: "pointer"}}>Sign Up</a></label>
      </div>
    </form> */}

    
    <GoogleLogin clientId="1022817115795-n5nihci5rfi3gs1j2m4unumra62ju5jb.apps.googleusercontent.com"
    buttonText='Log in with Google'
    onSuccess={handlelogin}
    onFailure={handlefailure}
    cookiePolicy={'single_host_origin'}
    />
    </div>
  )
}
