import { useState } from 'react'
import './App.css'
import StaticTop from './components/staticTop';
import BottomSection from './components/bottomSection'

function App() {
  const [inventoryViewSelect, setInventoryView] = useState(0);

  const changeInventoryView = (pageView: number) => {
    document.getElementById("nav" + inventoryViewSelect.toString())?.classList.remove("active");
    document.getElementById("nav" + pageView.toString())?.classList.add("active");
    setInventoryView(pageView);
  }

  return (
    <>
      <StaticTop />
      <BottomSection navFunc={changeInventoryView} />
    </>
  )
}

export default App
