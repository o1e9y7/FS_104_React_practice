// import './Header.css'
import s from './Header.module.css' 

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>Logo Header</div>
            <div className={s.title}>Holla</div>

            
                {/* <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    
                </ul> */}
</header>
    );
}

export default Header;         
