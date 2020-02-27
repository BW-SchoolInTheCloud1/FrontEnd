import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Login from './components/Login'
import StudentSignUp from './components/StudentSignUp'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/login' component={Login} />
      <Route path='/sign-up' component={StudentSignUp} />
    </div>
  );
}

export default App
