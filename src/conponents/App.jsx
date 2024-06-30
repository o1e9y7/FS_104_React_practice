import Footer from "./Footer/Footer";
import Greetings from "./Greetings/Greetings";
import Header from "./Header/Header";
import Message from "./Message/Message";
import WelcomeSection from "./WelcomeSection/WelcomeSection";


const App = () => {
    const message = 'Hello GOGOGOGo'
    const isOnline = false;
    const age = 17;
    const food = ['🍕', '🍔', '🍟', '🌭', '🥐','🍖','🥙', '🌯']
    // const isAdmin = true; 
    // const isUser = true;
    return (
        <>
            <Header />
            <Message author='Petro' message='Hello!' />
            <Message author='Stepan' message='Bonjoure!'/>
            <Message author='Olena' message ='Візьму котика у добрі руки'/>            
            <Message author='Oleg' message={message} />
            {isOnline && <h1>Welkome back</h1>}
            {!isOnline && <h1>Please login</h1>}
            {age > 18 ? <h2>Ого який дорослий</h2> : <h2>Тобі ще треба підрости</h2>}
            {/* {isAdmin || isUser} */}
            {food.map(item => (
                <li key={item}>{item}</li>
            ))}
            <WelcomeSection/>
            <Greetings />
            <Footer/>
        </>
    );
};

export default App;