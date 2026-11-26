import FunctionProps from "./components/FunctionProps";
import WelcomeMessage from "./components/WelcomeMessage";

let App = () => {
  let demo = () => <h1>I am a demo function</h1>;
  let productArray = ["Mobile", "Shirt", "Pen"];
  return (
    <>
      {/* <WelcomeMessage userName="Ravi" />
      <WelcomeMessage userName="Ram" />
      <WelcomeMessage userName="Kumari" />
      <WelcomeMessage userName="Rahul" /> */}

      {/* <WelcomeMessage userName="Ravi" email="ravi@gamail.com" place="VIJ" />
      <WelcomeMessage userName="Ramya" email="ramya@gamail.com" place="Hyd" />
      <WelcomeMessage userName="Raghu" email="raght@gamail.com" place="Delhi" /> */}
      {/* <WelcomeMessage
        userName="Ram"
        email="ram@gamail.com"
        place="Hyd"
        mobileNo={1234567890}
      /> */}

      <FunctionProps userName="Ram" demo={demo} array={productArray} />
    </>
  );
};

export default App;
