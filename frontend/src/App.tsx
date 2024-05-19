import StaticTop from './components/staticTop';
import BottomSection from './components/bottomSection'
import './App.css'
import { useEffect, useState } from 'react';
import { updateLocalDB, fit } from './firebase/firebase';

function App() {

  const [tops, setTops] = useState<fit[]>([]);
  const [bottoms, setBottoms] = useState<fit[]>([]);

  useEffect(() => {
      const getData = async () => {
          try{
              const data = await updateLocalDB();
              setTops(data[0])
              setBottoms(data[1])
          } catch(e){
              console.log(e)
          }
      }

      getData();
  }, [])

  return (
    <>
      <StaticTop />
      <BottomSection tops={tops} bottoms={bottoms}/>
    </>
  )
}

export default App
