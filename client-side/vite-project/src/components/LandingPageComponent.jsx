import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { USER_LOGIN } from "../store/actions/actionType"

import NavbarComponent from './NavbarComponent'

function LandingPageComponent() {
    // const loggedIn = useSelector((state) => state.user.isLogin)
    const dispatch = useDispatch()
    useEffect (()=>{
      if (localStorage.access_token) {
        dispatch({
          type: USER_LOGIN,
          payload: true
        })
      }
    }, [])
      return (
          <>
          <div id="wrapper">
            <NavbarComponent />
    
            <div id="page-content" >
              <Outlet/>
            </div>
          </div>
        </>
      )
}

export default LandingPageComponent