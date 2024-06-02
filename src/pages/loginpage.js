import Login from "@/components/login/login";
import Header from '../components/header/header';
import Headercomponent from '../components/headercomponent/headercomponent';




export default function Home() {
  const headerProps = {
    
  };

  return (
    <div>
      {/* <Headercomponent HeaderComponent={Header} headerProps={headerProps} /> */}
      
      <Login />
    </div>
  );
}
