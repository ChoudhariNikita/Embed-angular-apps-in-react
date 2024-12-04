import "./App.css";
import AngularElement from "./components/AngularEmbed";

function App() {
  return (
    <>
      <AngularElement scriptPath="/angular3/bundle3.js" rootElementName="app-root-three" />
      <AngularElement scriptPath="/angular1/bundle1.js" rootElementName="app-root-one" />
      <AngularElement scriptPath="/angular2/bundle2.js" rootElementName="app-root-two" />

    </>
  );
}

export default App;
