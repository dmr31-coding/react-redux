
import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice"
const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" className="textbox" id="" onChange={(e) => setColor(e.target.value)} />
        <button className="button" onClick={() => { dispatch(changeTextColor(color)) }}>Change Text Color</button>
        
    </div>
  )
}

export default Theme