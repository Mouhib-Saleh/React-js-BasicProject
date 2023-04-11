import React from 'react'

export default function NotFound() {
  return (
    <div  style={
      {
       display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
      
    }>
      
      <img src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png"
      style={
        {
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }
        
      }alt="404"
      />
    </div>
  )
}
