import React from 'react';
import { MdInsertLink, MdTextSnippet, MdContacts } from "react-icons/md";

const HeaderLinks = ({changeTab}) => {
  return (
    <div className="flex items-center text-center gap-x-16 justify-between uppercase">
        <p 
          className="cursor-pointer group text-xl transition flex items-center gap-x-2"
        >
            <MdInsertLink className="text-2xl text-amber-400 group-hover:text-light" />
            <span 
              className="url-link text-light group-hover:text-amber-400"
              onClick={changeTab}
            >url</span>
        </p>
        <p 
          className="cursor-pointer group text-xl transition flex items-center gap-x-2"
        >
            <MdTextSnippet className="text-2xl text-amber-400 group-hover:text-light" />
            <span 
              className="text-light text-link group-hover:text-amber-400"
              onClick={changeTab}
            >text</span>
        </p>
        <p 
          className="cursor-pointer group text-xl transition flex items-center gap-x-2"
        >
            <MdContacts className="text-2xl text-amber-400 group-hover:text-light" />
            <span 
              className="text-light contact-link group-hover:text-amber-400"
              onClick={changeTab}
            >contact</span>
        </p>
    </div>
  )
}

export default HeaderLinks
