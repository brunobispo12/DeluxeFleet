import RentaCarBlack from '../assets/images/Rent-A CAR-black.png'
import RentaCarWhite from '../assets/images/Rent-A CAR-white.png'
import BMW from '../assets/images/bmw-3-series-sedan-lci-modelfinder 1.png'
import { useTheme } from '../hooks/useTheme'

function HeroImage() {

    const { theme } = useTheme()

    return (
        <section className="p-4 h-[90vh] flex items-center justify-center">
            <div className="relative">
                <div className="relative flex right-14 bottom-4">
                    <img src={theme === 'light' ? RentaCarBlack : RentaCarWhite} alt="" className="h-40 relative left-36 z-10" />
                    <img src={BMW} alt="" className="h-64 relative right-7 bottom-4" />
                </div>
                <div className="flex justify-center relative top-12">
                    <a href="#services" className="font-robotoMono-lightitalic px-5 py-2 border-primary border">Services</a>
                </div>
            </div>
        </section>
    )
}

export default HeroImage