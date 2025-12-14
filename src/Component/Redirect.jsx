import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

// Social media and external links configuration
const REDIRECT_LINKS = {
  instagram: "https://www.instagram.com/rakesh_choudhary_._/", // Replace with your Instagram username
  github: "https://github.com/Rakesh-Choudhary175", // Replace with your GitHub username
  linkedin: "https://www.linkedin.com/in/rakesh-choudhary-146282200/", // Replace with your LinkedIn username
  twitter: "https://x.com/Rakesh_Dev_", // Replace with your Twitter username
  youtube: "https://www.youtube.com/@rakeshchoudhary9755", // Replace with your YouTube channel
  leetcode: "https://leetcode.com/Rakesh-dev/",
};

function Redirect() {
  const { platform } = useParams();

  useEffect(() => {
    const url = REDIRECT_LINKS[platform?.toLowerCase()];
    
    if (url) {
      window.location.href = url;
    } else {
      setTimeout(() => {
        window.location.href = "/home";
      }, 2000);
    }
  }, [platform]);


  return <Loader/>

 
}

export default Redirect;
