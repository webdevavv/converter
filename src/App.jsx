import "./converter.css"
import Balance from "./components/Balance.jsx";
import ConverterBlock from "./components/ConverterBlock.jsx";
const App = () => {
    return (
        <div className="converter">
            <h1>Buy $RAX on Seed Round!</h1>
            <Balance />
            <ConverterBlock/>
        </div>
    );
};

export default App;