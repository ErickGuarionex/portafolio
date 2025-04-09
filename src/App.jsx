import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Proyects from "./components/Proyects";
import SobreMi from './components/SobreMi'

export default function App(){
  return (
    <>
      <div className="h-full bg-[linear-gradient(0deg,rgba(2,0,36,1)0%,rgba(9,9,85,1)33%,rgba(20,0,10,1)100%)]">
        <Menu />
        <Presentation />

        <div className="text-white mt-32 w-[70%] mx-auto">
          <Proyects />
          <SobreMi />
        </div>
      </div>
    </>
    
  );
}
