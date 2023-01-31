import ggbutton from '../images/valButton.png'
import valLogoGif from '../images/val.gif'
import { useEffect, useState } from "react";

function GGButton() {
    const [ggVisible, setGGVisible] = useState(true)
    const [valLogoVisible, setValLogoVisible] = useState(false)

    return (
        <div>
            {ggVisible && <img src={ggbutton} onClick={() => {setGGVisible(false); setValLogoVisible(true)}}></img>}
            {valLogoVisible && <img src={valLogoGif} onClick={() => {setGGVisible(true); setValLogoVisible(false)}}></img>}
        </div>
    )
}

export default GGButton;