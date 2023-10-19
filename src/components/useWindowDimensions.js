import {useState, useEffect} from 'react'



 const useWindowDimensions = () => {
  
  const [windowSize , setWindowSize] = useState({
    width: 768,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
console.log("width inside hook:", window.innerWidth);
      handleResize();    
      window.addEventListener("resize", handleResize);
      

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;

}
export default useWindowDimensions;