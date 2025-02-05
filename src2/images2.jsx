import { SiReact , SiPython , SiMysql , SiPostgresql , SiCss3 , SiTailwindcss , SiC , SiHtml5 , SiJavascript  } from "react-icons/si";
import { SiFacebook , SiInstagram , SiLinkedin , SiGithub , SiGmail } from "react-icons/si"

export const SocialMedia=[
    {icon : <SiInstagram size={40} />,
        src:"https://www.instagram.com/atharrv2459/"
    },
    {icon : <SiLinkedin size={40}/>,
        src:"https://www.linkedin.com/in/atharrv-bhatnagar-39a156302/"
    },
    {icon : <SiGithub size={40} />,
        src:"https://github.com/Atharrv2459"
    },
    {icon : <SiGmail size={40}/>,
        src:"mailto:atharrv@example.com"
    }

]


const PortfolioImage=[
    {id:1, src:"my-vite-react-app\src2\MyImage.jpeg" , alt:"Image1"}
];

const Certificates=[
    {id:1 , purpose:"java" , src:""},
    {id:2 , purpose:"java2" , src:""},
    {id:3 , purpose:"nptel" , src:""},
    {id:4 , purpose:"oracle1" , src:""},
    {id:5 , purpose:"oracle2" , src:""},
    {id:6 , purpose:"oracle3" , src:""},
    {id:7 , purpose:"oracle4" , src:""}


]
export {PortfolioImage,Certificates};
 const WebDevelopment=[
    {icon:<SiHtml5 />,
        text:"Html5"
    },
    {
        icon:<SiCss3 />,
        text:"CSS"
    },
    {
        icon:<SiJavascript />,
        text:"Javascript"
    },
    {
        icon : <SiReact />,
        text: "React"
    },
    {
        icon:<SiTailwindcss />,
        text:"TailwindCSS"
    }

 ]
 const Programming =[
    {icon:<SiC />,
    text:"C"},
    {icon:<SiC></SiC>,
        text:"Java"
    },
    {
        icon:<SiPython />,
        text:"Python"
    },
    {
        icon:<SiMysql />,
        text:"MySQL"
    }
 ]

