import TopNavigation from "./pages/TopNavigation";
import routes from "./route";
import {useRoutes} from "react-router-dom";



function App() {

    const element = useRoutes(routes);


  return (
    <>
        <TopNavigation/>
        {element}
    </>
  )
}

export default App
