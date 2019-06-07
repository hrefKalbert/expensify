//Higher Order Component (HOC) - A component that renders another component

import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) => 
  <div>
    <h1>INFO</h1>
    <p>The info is: {props.info}</p>
  </div>

const widthAdminWatning = (WrappedComponent) => {
  return (props) => 
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => 
    <div>
      {props.isAuth ? <WrappedComponent {...props}/> : <p>This requier authetication</p>}
    </div>
}


const AdminInfo = widthAdminWatning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDom.render(<AuthInfo isAuth={true} info="these are the details"/>, document.querySelector('#app'))