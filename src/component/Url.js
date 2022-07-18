import React from 'react'

const Url = ({inputUrl, setInputUrl}) => {
  return (
    <div className="flex flex-col gap-y-3">
        <label htmlFor="url" className="text-lg uppercase text-green-500">Url</label>
        <input 
        type="url" 
        className="w-full form-input border-none outline-none bg-light/40 rounded focus:bg-light/80 shadow-md focus:shadow-xl focus:ring-0 py-4 px-3"
        placeholder="input url to generate its qrcode..."
        value={inputUrl}
        required
        onChange={(event) => setInputUrl(event.target.value)} 
        />
    </div>
  )
}

export default Url
