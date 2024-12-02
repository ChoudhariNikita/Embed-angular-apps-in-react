import "./App.css";
import AngularElement from "./components/AngularEmbed";

function App() {
  return (
    <>
      <AngularElement scriptPath="/angular1/angular-bundle.js" rootElementName="app-root" />
      <AngularElement scriptPath="/angular2/bundle.js" rootElementName="app-root-two" />

    </>
  );
}

export default App;
