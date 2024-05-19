import { useState } from "react";
import "./App.css";

import { FirebaseProvider } from "./context/Firebase.context";
import StaticTop from "./components/staticTop";
import BottomSection from "./components/bottomSection";

function App() {
  const [inventoryViewSelect, setInventoryView] = useState(0);

  const changeInventoryView = (pageView: number) => {
    document.getElementById("nav" + inventoryViewSelect.toString())?.classList.remove("active");
    document.getElementById("nav" + pageView.toString())?.classList.add("active");
    setInventoryView(pageView);
  };

  return (
    <>
      <FirebaseProvider>
        <StaticTop />
        <BottomSection navFunc={changeInventoryView} />
      </FirebaseProvider>
    </>
  );
}

export default App;
