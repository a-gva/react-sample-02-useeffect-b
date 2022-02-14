import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        // Return cleans up...removes event listener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <h1>{windowWidth}</h1>
    )
}

export default App
