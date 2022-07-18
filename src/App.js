import React, { useState } from 'react';
import Contact from "./component/Contact";
import HeaderLinks from './component/HeaderLinks';
import Text from "./component/Text";
import Url from "./component/Url";
import QRCode from 'qrcode';

const App = () => {

  // set header link states
  const [url, setUrl] = useState(true);
  const [text, setText] = useState(false);
  const [contact, setContact] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [inputText, setInputText] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [displayQrCode, setDisplayQrCode] = useState(false);

  // set app title in title bar
  document.title = "QR CODE Generator - Overwatch Coder";

  // change header tabs when clicked
  const changeTab = (event) => {
    const target = event.target;
    if(target.classList.contains('url-link')){
      switchTabs(setUrl, setText, setContact);
      setInputUrl('')
    }else if(target.classList.contains('text-link')){
      switchTabs(setText, setContact, setUrl);
      setInputText('')
    }else if(target.classList.contains('contact-link')){
      switchTabs(setContact, setUrl, setText);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
    }
  }

  // function to switch tabs
  const switchTabs = (link1, link2, link3) => {
    link1(true);
    link2(false);
    link3(false);
    setDisplayQrCode(false);
  }

  const generateCode = (event) => {
    event.preventDefault();
    if(url){

      QRCode.toDataURL(inputUrl, {
        margin: 2,
        errorCorrectionLevel: "H"
      }, (err, res)=> {
        if(err) return console.error(err.message);
        setDisplayQrCode(true);
        setQrCode(res);
        setInputUrl('');
      })

    }else if(text){

      QRCode.toDataURL(inputText, {
        margin: 2,
        errorCorrectionLevel: "H"
      }, (err, res)=> {
        if(err) return console.error(err.message);
        setDisplayQrCode(true);
        setQrCode(res);
        setInputText('');
      })

    }else if(contact){
      const contactValues = [
        `Full Name:  ${fullName}     `, 
        ` Email Address:  ${email}    `,
        ` Phone Number:  ${phoneNumber} `, 
      ];

      QRCode.toDataURL(contactValues, {
        margin: 2,
        errorCorrectionLevel: "H"
      }, (err, res)=> {
        if(err) return console.error(err.message);
        setDisplayQrCode(true);
        setQrCode(res);
        setFullName('');
        setPhoneNumber('');
        setEmail('');
      })

    }
  }

  return (
    <div 
      className="w-screen bg-gradient-to-bl from-cyan-900 to-cyan-600 min-h-screen flex flex-col items-center gap-y-5 pt-16">
      {/* Main Header/Title Section */}
      <h3 className="uppercase text-center text-5xl text-amber-400 font-[swap] flex flex-col items-center">
        <span>qr code generator</span>
        <span className="w-60 text-light border-light border-b-2 mt-3"></span>
      </h3>

      {/* Main Sections - Forms & Generated QR Code section */}
      <div className="mt-16 px-4 container mx-auto flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-around items-center lg:items-start lg:gap-x-10">

        <div className="flex flex-col items-center gap-y-5 w-full md:max-w-[700px]">
        {/* Header Links Section */}
          <HeaderLinks changeTab={changeTab} />

          {/* Form to fill to access in order to generate QR Code */}
          <form method="POST" className="w-full bg-light/80 px-5 py-10 rounded shadow-xl h-full flex flex-col gap-y-7 font-[poppins]"
            onSubmit={generateCode}
          >

            {/* URL Form Section - Display if user clicks url link */}
            {url && <Url inputUrl={inputUrl} setInputUrl={setInputUrl} />}

            {/* Text Form Section - Display if user clicks text link */}
            {text && <Text inputText={inputText} setInputText={setInputText} />}


            {/* Contact Form Section - Display if user clicks contact Link */}
            {contact && 
              <Contact 
                fullName={fullName}
                setFullName={setFullName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                email={email}
                setEmail={setEmail}

              />}

            <button className="mt-5 w-full text-xl uppercase bg-amber-500 hover:bg-amber-600 transition px-5 py-3 text-light rounded">Generate</button>
          </form>
        </div>

        {/* Display This If QR Code has been successfully generated*/}
        {displayQrCode &&
          <div className="flex flex-col items-center gap-y-5 pt-5 md:pt-0 pb-16 md:pb-0">
            <h3 
              className="text-light text-2xl uppercase border-b-2 border-amber-500 pb-2">
              Generated QR CODE
            </h3>
            <img src={qrCode} alt="Generated Code" />
            <a 
              href={qrCode} 
              download="qrcode.png" 
              className='text-lg text-light bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded w-full text-center uppercase'>Download</a>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
