"use client";
import Image from "next/image";
import { IoMdLink } from "react-icons/io";
import React, { useState } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube, FaTiktok, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const linkData = [
  {
    platform: 'YouTube',
    icon: FaYoutube,
    url: 'https://www.youtube.com',
    color:"bg-[#FF0000]"
  },
  {
    platform: 'TikTok',
    icon: FaTiktok,
    url: 'https://www.tiktok.com',
    color:"bg-[#000000]"
  },
  {
    platform: 'Twitter',
    icon: FaTwitter,
    url: 'https://www.twitter.com',
    color:"bg-[#1DA1F2]"
  },
  {
    platform: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com',
    color:'bg-[#0077b5]'
  },
  {
    platform: 'GitHub',
    icon: FaGithub,
    url: 'https://www.github.com',
    color:'bg-[#000000]'
  }
];
const validateLink = (platform, url) => {
  const domainMap = {
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

  const handleLinkChange = (index: number, event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
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
  [key: string]: any; // Add this line
}


const CustomizeLinks = ({ onSave, addNewLink, links, removeLink, handleLinkChange }: { onSave: OnSave, addNewLink: () => void, links: Link[], removeLink: (index: number) => void, handleLinkChange: (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) => {
 
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
              onChange={(event) => handleLinkChange(index, event)}
              onSelect={(event) => handleLinkChange(index, event)}
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


export const IPhoneComponent = ({ links }) => {
  return (
    <div className="flex flex-col w-[100%] h-full bg-white rounded-md justify-center items-center">
      <div className="relative w-76 md:w-[60%] lg:w-[80%] h-128 border-2 border-gray-300 rounded-3xl p-4 bg-white h-[70%]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-200 rounded-b-lg"></div>
        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
         
          {links && links.map((link: { platform: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => {
            const IconComponent = getIconComponent(link.platform);
            const color = getIconColor(link.platform);

            return (
              <div key={index} className={`w-full p-4 mb-4 rounded-lg flex flex-col ${color}`}>
                <div className="flex items-center">
                  {IconComponent && <IconComponent className="mr-2" size={24} />}
                  <span>{link.platform}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

type OnSave = () => void; 
const getIconComponent = (platform: string) => {
  const link = linkData.find(link => link.platform === platform);
  return link ? link.icon : null;
};
const getIconColor = (platform: string) => {
  const link = linkData.find(link => link.platform === platform);
  return link ? link.color : null;
};

export default Home