import React from 'react'
import { MdOutlineContentCopy } from "react-icons/md"
import { Switch } from "@nextui-org/react"
import "../styles/home.css"
import { SunIcon } from '../icons/SunIcon'
import { MoonIcon } from '../icons/MoonIcon'

export const HomeScreen = () => {
    return (
        <div className='container'>
            <header className='header'>
                <h1>short.el</h1>
                <Switch
                    checked={true}
                    size="xl"
                    color="error"
                    iconOn={<SunIcon />}
                    iconOff={<MoonIcon />}
                />
            </header>
            <section className='content'>
                <h2>short.el</h2>
                <p>Shorten your long URL</p>

                <section className='form'>
                    <form className='form-container'>
                        <input type="text" placeholder="Enter your URL" />
                        <button type='submit'>Drop URL</button>
                    </form>
                </section>
                <section className='display'>
                    <div className="display-container">
                        <p>http://www.google.com/4fGD3rt</p>
                        <div className='display-left'>
                            <button><MdOutlineContentCopy size="20px" />Copy</button>
                        </div>
                    </div>
                </section>
                <section className='btn'>
                    <button>Generate QR code</button>
                </section>
            </section>
        </div>
    )
}
