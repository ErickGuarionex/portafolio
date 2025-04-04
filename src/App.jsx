import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Proyects from "./components/Proyects";

export default function App(){
  return (
    <>
      <div className="h-screen bg-[linear-gradient(0deg,rgba(2,0,36,1)0%,rgba(9,9,85,1)33%,rgba(110,120,152,1)100%)]">
        <Menu />
        <Presentation />
      </div>

      <div className="bg-[#131320] text-white">
        <Proyects />
      </div>
    </>
    
  );
}
