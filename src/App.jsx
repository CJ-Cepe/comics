import "./styles/index.css"

function Aside(){
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
    <aside className="sticky top-0 flex flex-col gap-2.5">
      <section className="h-24">
        <p>{`${monthNames[month]}`}
          <span>{`${year}`}</span>
        </p>
      </section>
      <section className="h-48">
        <span>Data provided by Marvel.</span>
        <img src="" alt="" />
        <span>© 2024 MARVEL</span></section>
    </aside>
  )
}

function Header(){
  return (
    <>
      <section>Marvel Comics Catalogue</section>
      <section>thanos</section>
      <section>
          <p>Discover the Epic Sagas, Unforgettable Characters, and Thrilling Adventures Awaiting You in the Marvel Universe</p>
      </section>
      <section>bookmark</section>
      <section>blackbolt</section>  
    </>
  )
}

function Main(){
  return (
    <>
      <section>new</section>
      <section>events</section>
      <section>feat char</section>
      <section>feat event</section>
      <section>agatha</section>
      <section>search com</section>
      <section>avengers</section>
      <section>fantastic</section>
      <section>search char</section>
      <section>search eve</section>
      <section>foot</section>
    </>
  )
}

function App() {
  return (  
    <>
      <Header />
      <Aside />
      <Main />
    </>
  )
}

export default App
