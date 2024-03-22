import "./index.css"
import "./styles/homeStyle.css"

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

function Home() {
  return (  
    <> 
      <div>
        <nav>
          <div>Marvel Comics</div>
          <ul>
            <li><a href=""></a>Comics</li>
            <li><a href=""></a>Characters</li>
            <li><a href=""></a>Events</li>
          </ul>
          <div><a href="">bookmark</a></div>
        </nav>
        <Aside />
        <main>
        </main>
      </div>
    </>
  )
}

export default Home
