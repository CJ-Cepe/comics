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
    <aside className="bg-orange-300 w-full h-full">
      <section><p>{`${monthNames[month]}`}<span>{`${year}`}</span></p></section>
      <section>
        <span>Data provided by Marvel.</span>
        <img src="" alt="" />
        <span>© 2024 MARVEL</span></section>
      <section></section>
    </aside>
  )
}

function Nav(){
  return (
    <nav>

    </nav>
  )
}

function Header(){
  return (
    <header className="bg-lime-300 w-full h-full">
      <section>Marvel Comics Catalogue</section>
      <section>thanos</section>
      <section>
          <p>Discover the Epic Sagas, Unforgettable Characters, and Thrilling Adventures Awaiting You in the Marvel Universe</p>
      </section>
      <section>bookmark</section>
      <section>blackbolt</section>  
    </header>
  )
}

function Body(){
  return (
    <main className="bg-amber-200 w-full h-full">
      <p>body!!!</p>
    </main>
  )
}

function App() {
  return (  
    <>
      <Header />
      <Aside />
      <Body />
    </>
  )
}

export default App
