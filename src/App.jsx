import { Suspense} from 'react'
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Card from './components/ui/Card'
import { ToastContainer } from 'react-toastify'
import StartSection from './components/HomePage/StartSection'
import Pricing from './components/HomePage/Pricing'
import Work from './components/HomePage/Work'
import Footer from './components/HomePage/Banner/Footer'

const fetchProduct = async () => {
  const res = await fetch('./product.json')
  return res.json();
}

function App() {

  const productPromise = fetchProduct()
  return (
    <>
      <Suspense fallback=
        {
          <div className="flex justify-center items-center h-screen">
            <span className="loading  loading-spinner text-secondary"></span>
          </div>
        }>
        <NavBar/>
        <Banner />
        <Card productPromise={productPromise}/>
        <StartSection/>
        <Pricing/>
        <Work/>
        <Footer/>
      </Suspense>
      <ToastContainer/>
    </>
  )
}

export default App