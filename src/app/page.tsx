"use client";
import Image from "next/image";
import { IoMdLink } from "react-icons/io";
import React, { ChangeEvent, useState } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube, FaTiktok, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import  IPhoneComponent from '@/components/Iphonecomponent';


const validateLink = (platform: string, url: string | any[]) => {
  const domainMap: { [key: string]: string } = {
    'YouTube': 'youtube.com',
    'TikTok': 'tiktok.com',
    'Twitter': 'twitter.com',
    'LinkedIn': 'linkedin.com',
    'GitHub': 'github.com'
  };
  
  const domain = domainMap[platform];
  return url.includes(domain);
};

const Home = () => {
  const [showNext, setShowNext] = useState(false);
  const [preview, setPreviewModel] = useState(false);
  const [links, setLinks] = useState<Link[]>([{ platform: '', url: '', isValid: true }]);

  const addNewLink = () => {
    setLinks([...links, { platform: '', url: '' }]);
  };

  const handleLinkChange = (
    index: number,
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedLinks = [...links];
    updatedLinks[index][name] = value;
  
    
    if (updatedLinks[index].platform && updatedLinks[index].url) {
      const isValid = validateLink(updatedLinks[index].platform, updatedLinks[index].url);
      updatedLinks[index].isValid = isValid;
    } else {
      updatedLinks[index].isValid = true; 
    }
  
    
    setLinks(updatedLinks);
  };
  

  const removeLink = (index: number) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };
  const setToNext=()=>{
    setShowNext(!showNext)
  }

  const showPreview=()=>{
    setPreviewModel(!showNext)
  }


  return (
    <section className="flex  flex-col min-h-screen justify-between p-2 md:p-24 m-auto py-10 md:flex-row lg:flex-row">
       <div className="w-full p-4 md:w-[500px] hidden md:block">

        <IPhoneComponent links={links}/>
       </div>
      <div className="w-full md:p-4 md:w-[60%] ">
        
          <CustomizeLinks onSave={setToNext} addNewLink={addNewLink} links={links} removeLink={removeLink} handleLinkChange={handleLinkChange}/>
        
      </div>
    </section>
  )
}

interface Link {
  platform: string;
  url: string;
  isValid?: boolean;
  [key: string]: any; 
}


const CustomizeLinks = ({ onSave, addNewLink, links, removeLink, handleLinkChange }: { onSave: any, addNewLink: () => void, links: Link[], removeLink: (index: number) => void, handleLinkChange: (index: number, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {
  
  return (
    <div className="flex flex-col p-8 bg-white rounded-lg shadow-md   mx-auto w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Customize your links</h2>
      <p className="text-gray-600 mb-6">Add/edit/remove links below and then share all your profiles with the world!</p>
      <button
        className="mb-6 px-6 py-2 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-200 hover:text-purple-700"
        onClick={addNewLink}
      >
        + Add new link
      </button>
      
      {links.map((link, index) => (
        <div key={index} className="w-full bg-gray-100 p-4 mb-4 rounded-lg flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-800 font-bold flex gap-3"><IoMdLink size={24} /> Link #{index + 1}</h3>
            <button
              className="text-red-500 hover:underline"
              onClick={() => removeLink(index)}
            >
              Remove
            </button>
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-gray-600 mb-1">Platform</label>
            <select
              name="platform"
              value={link.platform}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => handleLinkChange(index, event)}
              onSelect={(event: ChangeEvent<HTMLSelectElement>) => handleLinkChange(index, event)}
              className="p-2 border rounded-lg text-gray-600"
            >
              <option value="">Select Platform</option>
              <option value="GitHub"><span><FaGithub size={24} /></span>GitHub</option>
              <option value="YouTube"><span><IoLogoYoutube size={24} /></span>Youtube</option>
              <option value="Twitter"><span><FaXTwitter size={24} /></span>Twitter</option>
              <option value="LinkedIn"><span><CiLinkedin size={24} /></span>LinkedIn</option>
              
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Link</label>
            <input
              type="url"
              name="url"
              value={link.url}
              onChange={(event) => handleLinkChange(index, event)}
              className="p-2 border rounded-lg text-gray-600"
              placeholder="https://example.com"
            />
             {!link.isValid && <span className="text-red-500 text-sm mt-1">Invalid URL for the selected platform</span>}
          </div>
        </div>
      ))}
      
      <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

interface IPhoneComponentProps {
  links: Link[];
}





export default Home
