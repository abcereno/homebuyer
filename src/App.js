import { Navibar, Footer, Promotion } from "./Common/Common";
import { Home } from "./Components/Components";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Promotion />
        <Navibar />
        <Home/>
      <Footer />
    </>
  );
}

export default App;
