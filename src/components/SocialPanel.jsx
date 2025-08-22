import { useState, useEffect } from 'react';

const SocialPanel = ({ type }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
    link: '',
    linkText: ''
  });

  useEffect(() => {
    switch (type) {
      case 'github':
        setData({
          title: 'GitHub',
          description: 'Visit my GitHub profile to see my projects and contributions.',
          link: 'https://github.com/sourinPal2003/',
          linkText: 'Open GitHub'
        });
        break;
      case 'linkedin':
        setData({
          title: 'LinkedIn',
          description: 'Connect with me on LinkedIn to see my professional experience.',
          link: 'https://www.linkedin.com/in/sourin-pal/',
          linkText: 'Open LinkedIn'
        });
        break;
      case 'leetcode':
        setData({
          title: 'LeetCode',
          description: 'Check out my LeetCode profile for coding challenges and solutions.',
          link: 'https://leetcode.com/u/sourinpal2003/',
          linkText: 'Open LeetCode'
        });
        break;
      case 'pdf-resume':
        setData({
          title: 'Resume',
          description: 'Download my resume in PDF format.',
          link: '/resume.pdf',
          linkText: 'Download Resume'
        });
        break;
      default:
        setData({
          title: 'Social',
          description: 'Connect with me on social media.',
          link: '#',
          linkText: 'Open Profile'
        });
    }
  }, [type]);

  return (
    <div className="w-56 bg-[#252526] border-r border-[#474747] overflow-y-auto">
      <div className="px-4 py-2 font-bold text-sm uppercase tracking-wide text-gray-400">{data.title}</div>
      <div className="p-4">
        <p className="text-sm mb-4">{data.description}</p>
        <a
          href={data.link}
          target={type === "pdf-resume" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          download={type === "pdf-resume" ? "Sourin_Pal_Resume.pdf" : undefined}
          className="inline-block w-full bg-[#007ACC] hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded transition-colors duration-200"
        >
          {data.linkText}
        </a>
      </div>
    </div>
  );
};

export default SocialPanel;
