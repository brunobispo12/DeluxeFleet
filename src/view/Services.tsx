import { BMWimage, LINCOLNimage, CHRYSLER300image, MERCEDESC300image, DODGEimage, ESCALADEimage } from '../constants/CarImages'
import Car from '../components/Car'

function Services() {

    return (
        <section className="flex flex-col" id="services">
            <div className='flex flex-col'>
                <h2 className="font-inter-bold text-xl self-center">Services</h2>
                <p className="font-robotoMono-lightitalic text-justify text-sm mt-3 w-5/6 self-center">
                    Our luxury and premium car rental services offer customers an exceptional experience, ensuring high-quality and reliable vehicles. With a meticulously maintained and regularly inspected fleet, we provide maximum performance and safety to drivers. Moreover, we take pride in maintaining a policy of fair and transparent pricing, ensuring our clients enjoy top-notch service without compromising their budgets. Whether for special occasions, business trips, or leisure moments, our services are designed to meet everyone's needs with excellence and competitiveness. Check out some of our cars below!
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 mt-8'>
                <Car carImage={BMWimage} carName={'BMW 320i'} carPrice={450} />
                <Car carImage={LINCOLNimage} carName={'Lincoln Navigator'} carPrice={500} />
                <Car carImage={CHRYSLER300image} carName={'Chrylsler 300C'} carPrice={430} />
                <Car carImage={MERCEDESC300image} carName={'Mercedes C300'} carPrice={710} />
                <Car carImage={DODGEimage} carName={'Dodge Challanger'} carPrice={630} />
                <Car carImage={ESCALADEimage} carName={'Cadillac Escalade'} carPrice={920} />
            </div>
        </section>
    )
}

export default Services