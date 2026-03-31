import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import PremiumSection from "./Components/PremiumSection"
import PricingCard from "./Components/PricingCard"
import Stat from "./Components/Stat"
import { useState } from "react"
import { Suspense } from "react"
import Cart from "./Components/Cart"

const loadData=async()=>{
  const res= await fetch('/data.json')
  return res.json()
}

function App() {
const promiseData=loadData()
 const [active, setActive] = useState("products");
  return (
    < >
   <Navbar/>
   <Banner/>
   <Stat/>
   <PremiumSection active={active} setActive={setActive}/>
   
        <div className="flex gap-2 items-center justify-center p-1">
          
        
          <button onClick={()=> setActive('products')} className= {active==='products'?"btn btn-primary rounded-full bg-gradient-to-r from-purple-700 via-purple-500 shadow-lg text-[#FFFFFF]":'btn  rounded-full'}>Products</button>

         
       <button onClick={()=> setActive('cart')} className= {active==='cart'?"btn btn-primary rounded-full bg-gradient-to-r from-purple-700 via-purple-500 shadow-lg text-[#FFFFFF]":'btn rounded-full'}>Cart-(0)</button>
        </div>
   
  { active==='products'&& <Suspense fallback={<p>Data loading....</p>}> <PricingCard promiseData={promiseData}/></Suspense>}
  { active==='cart'&& <Cart/>}
    </>
  )
}

export default App
