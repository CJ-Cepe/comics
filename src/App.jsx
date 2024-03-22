import "./styles/appStyle.css"
import Home from "./Home"

function Aside(){
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
    <aside>
      <p>{`${monthNames[month]} ${year}`}</p>
    </aside>
  )
}

function Nav(){
  return (
    <nav>
      <div>Marvel Comics</div>
      <ul>
        <li><a href=""></a>Comics</li>
        <li><a href=""></a>Characters</li>
        <li><a href=""></a>Events</li>
      </ul>
      <div><a href="">bookmark</a></div>
    </nav>
  )
}

function Body(){
  return (
    <main>
      <Home />
    </main>
  )
}

function App() {
  return (  
    <> 
      <div>
        <Nav />
        <Aside />
        <Body />
      </div>
    </>
  )
}

export default App
