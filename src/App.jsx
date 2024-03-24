import Home from "./Home"
import ComicSearch from "./ComicSearch"
import "./styles/index.css"

function Aside(){
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
    <aside>
      <p>With great power comes great responsibility</p>
      <p>Marvel Comics Catalogue</p>
      <p>{`${monthNames[month]} ${year}`}</p>
    </aside>
  )
}

function Nav(){
  return (
    <nav>
      <div><div>Marvel <span>Comics</span> <div>Catalogue</div></div><img src="" alt="website" /></div>
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
      <ComicSearch />
    </main>
  )
}

function App() {
  return (  
    <>
      <main >

      </main>
    </>
  )
}

export default App
