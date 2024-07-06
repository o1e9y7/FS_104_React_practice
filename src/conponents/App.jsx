import Footer from "./Footer/Footer";
import Greetings from "./Greetings/Greetings";
import Header from "./Header/Header";
import Message from "./Message/Message";
// import WelcomeSection from "./WelcomeSectio className={clsx(s.box)}n/WelcomeSection";
import Profile from './Profile/Profile';
import profileData from '../assets/user.json';
import clsx from "clsx";
import s from './App.module.css';

const App = () => {
    console.log(profileData)
    // const message = 'Hello GOGOGOGo'
    // const isOnline = false;
    // const age = 17;
    const food = ['🍕', '🍔', '🍟', '🌭', '🥐','🍖','🥙', '🌯']
    // const isAdmin = true;
    // const isUser = true;
    return (
        <>
            <Header />
            <h2 className="title">Hello styles</h2>
            {/* <Message author='Petro' message='Hello!' />
            <Message author='Stepan' message='Bonjoure!'/>
            <Message author='Olena' message ='Візьму котика у добрі руки'/>
            <Message author='Oleg' message={message} /> */}
            {/* {isOnline && <h1>Welkome back</h1>}
            {!isOnline && <h1>Please login</h1>}
            {age > 18 ? <h2>Ого який дорослий</h2> : <h2>Тобі ще треба підрости</h2>} */}
            {/* {isAdmin || isUser} */}
            <Profile user={profileData} />
            <ul> {food.map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            {/* <WelcomeSection/>
            <Greetings /> */}
            <Footer />
            <div className={s.wrapper}>
                <div className={clsx(s.box)}></div>
                <div className={clsx(s.red)}></div>
                <div className={clsx(s.black)}></div>
                <div className={clsx(s.box)}></div>
            </div>

        </>
    );
};

export default App;
