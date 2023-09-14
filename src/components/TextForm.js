import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, settext] = useState('')

    const handleUppercaseonclick = () => {
        let uppercasetext = text.toUpperCase()
        settext(uppercasetext)
        props.showalert('Converted to Uppercase!', 'success')
    }

    const handleLowercaseonclick = () => {
        let lowercasetext = text.toLowerCase()
        settext(lowercasetext)
        props.showalert('Converted to Lowercase!', 'success')
    }

    const handleClearonclick = () => {
        let cleartext = ''
        settext(cleartext)
        props.showalert('Text Cleared!', 'success')
    }

    const handleTextcopy = () => {
        let copiedtext = document.getElementById('myBox')
        copiedtext.select()
        copiedtext.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(copiedtext.value)
        props.showalert('Copied to clipboard!', 'success')
    }

    const handleExtraspaces = () => {
        let extraspacetext = text.split(/[ ]+/)
        settext(extraspacetext.join(" "));
        props.showalert('Extra spaces removed!', 'success')
    }

    const handleOnChange = (event) => {
        settext(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="row text-center">
                    <div className="col">
                        <h1>{props.heading}</h1>
                    </div>
                </div>
                <textarea className="form-control" style={{
                    backgroundColor: props.mode === 'light' ? 'white' : 'black',
                    color: props.mode === 'light' ? 'black' : 'white'
                }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUppercaseonclick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowercaseonclick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={handleClearonclick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleTextcopy}>Copy Text</button>
                <button className="btn btn-primary" onClick={handleExtraspaces}>Remove extra spaces</button>
            </div >
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p><b>{text.split(' ').length - 1} words and {text.length} characters</b></p>
                <p><b>{text ? 0.008 * text.split(' ').length : 0} Minutes read</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter your text from the textbox to preview here'}</p>
            </div>
        </>
    )
}
