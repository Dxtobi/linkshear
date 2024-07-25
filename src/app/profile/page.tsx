"use client";

import React, { useState } from 'react';
import ImageUploader from '@/components/UploadZone';
import  IPhoneComponent from '@/components/Iphonecomponent';


interface ProfileImage {
    url: string;
  }
  interface Link {
    title: string;
    url: string;
  }
  
  

const ProfileForm = () => {
    const [profileImage, setProfileImage] = useState<ProfileImage | null>(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleImageUpload = (e: { target: { files: any[]; }; }) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setProfileImage({ url });
      };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Handle form submission
    };
    const links: Link[] = [
    { title: 'Link 1', url: 'https://example.com/link1' },
    { title: 'Link 2', url: 'https://example.com/link2' },
    // Add more links as needed
  ];
  
    return (
        <section className="flex  flex-col min-h-screen justify-between p-2 md:p-24 m-auto py-10 md:flex-row lg:flex-row">
        <div className="w-full p-4 md:w-[500px] hidden md:block">
         <IPhoneComponent links={[]}/>
        </div>
       <div className="w-full p-4 md:w-[60%]">
         
        <div  className="flex flex-col p-8 bg-white rounded-lg shadow-md mx-auto w-full">
            <h1 className="text-3xl font-bold  text-gray-500">Profile Details</h1>
            <h2 className=" mb-6 text-gray-400">Add your details to create a personal touch to your profile</h2>
        <div className=" w-full my-5  flex">
        <ImageUploader />
        </div>
            <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4 flex-col md:flex-rol gap-4 w-full">
                <label className="block text-gray-700 mb-2">First name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="e.g. John" className="w-full flex-1 px-3 py-2 border rounded-lg focus:outline-none " required />
            </div>
            <div className="mb-4  flex-col md:flex-rol gap-4">
                <label className="block text-gray-700 mb-2">Last name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="e.g. Appleseed" className="w-full px-3 py-2 border rounded-lg focus:outline-none flex-1" required />
            </div>
            <div className="mb-4 flex-col md:flex-rol gap-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g. email@example.com" className="w-full px-3 py-2 border rounded-lg focus:outline-none  flex-1" required />
            </div>
            <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Save</button>
            </form>
        </div>
        </div>
     </section>
     
    );
  };

  export default ProfileForm