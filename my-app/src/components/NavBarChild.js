import React from 'react'

function NavBarChild() {
  return (
    <div>
            {this.state.isLoggedIn ?
                <button onClick={() => this.handleButtonClick()}>Log In</button>
                :
                <form>
                    <label htmlFor='username'>Username:</label>
                    <input placeholder='username' id='username'></input>
                    <label htmlFor='password'>Password:</label>
                    <input placeholder='password' id='password'></input>
                    <button onClick={() => this.handleButtonClick()}>Submit</button>
                </form>
            } 
    </div>
  )
}

export default NavBarChild