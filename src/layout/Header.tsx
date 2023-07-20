import { useTheme } from '../hooks/useTheme'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

function Header() {

    const { theme, setTheme } = useTheme()

    function changeTheme(): void {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className="py-4 pl-10 pr-12 font-inter-bold flex justify-between items-center">
            <div>
                <h1 className="text-2xl">DeluxeFleet</h1>
            </div>
            <div className='flex gap-12'>
                <ul className="flex gap-14 text-base">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className=''>
                    <button onClick={changeTheme}>{theme === 'dark' ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20}/>}</button>
                </div>
            </div>
        </header>
    )
}

export default Header