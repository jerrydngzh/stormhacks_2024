import { useState } from 'react'
import StaticTop from './components/staticTop';
import BottomSection from './components/bottomSection'
import './App.css'

function App() {
  const [inventoryViewSelect, setInventoryView] = useState(0);

  const changeInventoryView = (pageView: number) => {
    document.getElementById("nav" + inventoryViewSelect.toString())?.classList.remove("active");
    document.getElementById("nav" + pageView.toString())?.classList.add("active");
    setInventoryView(pageView);

    console.log({ inventoryViewSelect })

  }

  return (
    <>
      <StaticTop />
      <BottomSection navFunc={changeInventoryView}/>
    </>
  )
}

export default App
