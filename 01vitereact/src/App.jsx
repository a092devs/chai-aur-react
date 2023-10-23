import Chai from "./chai";

function App() {
  const username = 'a092devs'
  return (
    // fragment <> empty tags
    <>
      <Chai />
      <h3>chai aur react ny {username}</h3>
      <p>test paragraph</p>
    </>
    
  )
}

export default App
