import React from 'react'
import Header, {Navbar} from './Header'
import Footer from './Footer'
import Table from './Table'

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <div>
      <Table />
    </div>
    <Footer />
    </>
  )
}

export default App