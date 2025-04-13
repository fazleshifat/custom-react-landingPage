import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}

      <main>
        <Suspense fallback={<span className="flex loading loading-dots text-blue-300 w-30 h-screen mx-auto"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
