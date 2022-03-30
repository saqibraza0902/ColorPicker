import React, { useState, useEffect, useCallback } from 'react'
import Color from './Color'
import randomColor from 'randomcolor'

export default function App() {
    const [count, setCount] = useState(0)
    const [colors, setColors] = useState([])

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [setCount])


    const getColor = () => {
        const baseColor = randomColor().slice(1);
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=quad&count=1`)
            .then(data => data.json())
            .then(data => {
                setColors(data.colors.map(color => color.hex.value))
            })
        console.log(baseColor);
    }


    useEffect(getColor, [count])
    return (
        <div>
            <Color
                colors={colors}
            />
            <button onClick={handleClick} className="btn"> Change! </button>
        </div>
    )
}