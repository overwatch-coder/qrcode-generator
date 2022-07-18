import React from 'react'

const Text = ({inputText, setInputText}) => {
  return (
    <div className="flex flex-col gap-y-3">
        <label htmlFor="url" className="text-lg uppercase text-green-500">Text</label>
        <input 
        type="text" 
        className="w-full form-input border-none outline-none bg-light/40 rounded focus:bg-light/80 shadow-md focus:shadow-xl focus:ring-0 py-4 px-3"
        placeholder="input text to generate its qrcode..." 
        value={inputText}
        required
        onChange={(event) => setInputText(event.target.value)} 
        />
    </div>
  )
}

export default Text
