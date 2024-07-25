
import { FaYoutube, FaTiktok, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
const IPhoneComponent = ({ links }) => {
    return (
      <div className="flex flex-col w-[100%] h-full bg-white rounded-md justify-center items-center">
        <div className="relative w-76 md:w-[60%] lg:w-[80%] h-128 border-2 border-gray-300 rounded-3xl p-4 bg-white h-[70%]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-200 rounded-b-lg"></div>
          <div className="flex flex-col items-center mt-8 space-y-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
            <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
           
            {links && links.map((link,index) => {
            if (link.platform === null) {
              // Handle the case when platform is null
              return null; // or return a placeholder element
            }
  
            const IconComponent = getIconComponent(link.platform);
            const color = getIconColor(link.platform);``
  
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


const getIconComponent = (platform) => {
  const link = linkData.find(link => link.platform === platform);
  return link ? link.icon : null;
};
const getIconColor = (platform) => {
  const link = linkData.find(link => link.platform === platform);
  return link ? link.color : null;
};
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

  export default IPhoneComponent