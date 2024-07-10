import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'

function App() {
  return (
    <div className = "App">
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
    </div>
  )
}

export default App
