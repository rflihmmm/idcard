import { onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { db } from "./configs/firebase"
import CardData from "./components/CardData.jsx"
import "./App.css"

function App() {
  const [data, setData] = useState([])
  // const [ph, setPh] = useState([])
  // const [suhu, setSuhu] = useState([])
  // const [kk, setKk] = useState([])
  // const [tds, setTds] = useState([])
  //
  useEffect(() => {
    const query = ref(db, "data/")
    onValue(query, (snapshot) => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        setData(data)
        // Object.values(data).map((upData) => {
        //   setUpData((upDatas) => [...upDatas, upData])
        // })
      }
    })
  }, [])

  return (
    <>
      <h1 className="mb-4 text-black">Aqua Meter</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <CardData name="PH" data={data.ph} />
        <CardData name="Suhu" data={data.suhu} />
        <CardData name="Kekeruhan" data={data.kk} />
        <CardData name="TDS" data={data.tds} />
      </div>
    </>
  )
}

export default App
