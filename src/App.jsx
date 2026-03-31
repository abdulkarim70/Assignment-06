import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import PremiumSection from "./Components/PremiumSection"
import PricingCard from "./Components/PricingCard"
import Stat from "./Components/Stat"
import { Suspense } from "react"

const loadData=async()=>{
  const res= await fetch('/data.json')
  return res.json()
}

function App() {
const promiseData=loadData()

  return (
    < >
   <Navbar/>
   <Banner/>
   <Stat/>
   <PremiumSection/>
  <Suspense fallback={<p>Data loading....</p>}> <PricingCard promiseData={promiseData}/></Suspense>
   
    </>
  )
}

export default App
