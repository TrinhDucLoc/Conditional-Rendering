import React, {useState} from 'react'

const allItems = [
  {id: "beaming", value: "😁", isSmile: true},
  {id: "grinning", value: "😀", isSmile: true},
  {id: "squinting", value: "😆", isSmile: true},
  {id: "winking", value: "😉", isSmile: true},
  {id: "sad", value: "😥", isSmile: false}
]


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [items, setItems] = useState(allItems)
  
  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const removeItem = (itemID) => {
    setItems(items.filter((items) => items.id !== itemID))
  }

  return (
    <div>
      <h1>Smileys</h1>
      <div className='loginControl'>
        {isLoggedIn ? (<button onClick={handleLogout}>Login</button>) : (<button onClick={handleLogin}>Logout</button>)}
      </div>
      {/* {String(isLoggedIn)} */}

      <div>
        {isLoggedIn && (
          <ul>
            {/* <li>
              <label>{items[0].value}</label>
            </li>
            <li>
              <label>{items[1].value}</label>
            </li>
            <li>
              <label>{items[2].value}</label>
            </li> */}


            {/* /* Rendering Array */}
            {items.map((items) => (
              <li key={items.id}>
                <button onClick={() => removeItem(items.id)}>Remove</button>
                <label htmlFor={`${items.id} - input`}>{items.value} {items.id} </label>
                <input id={`${items.id} - input`} type="text" defaultValue={items.id}/>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App