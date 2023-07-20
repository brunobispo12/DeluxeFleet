import { BiLogoInstagram, BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { IoShareSocial } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'

function Footer() {
    return (
        <footer className='py-4 px-12 border-t border-gray-500 flex justify-around'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-inter-bold text-lg flex items-center gap-1'>Social Media{<IoShareSocial size={20} />}</h3>
                <ul className='flex flex-col gap-1'>
                    <li><a href="" className='flex items-center gap-1'>{<BiLogoInstagram size={20} />}Instagram</a></li>
                    <li><a href="" className='flex items-center gap-1'>{<BiLogoFacebook size={20} />}Facebook</a></li>
                    <li><a href="" className='flex items-center gap-1'>{<BiLogoLinkedin size={20} />}Linkedin</a></li>
                </ul>
            </div>
            <div className='flex items-center font-inter-semi'>
                <a href="#">To the top</a>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-inter-bold text-lg flex items-center gap-1'>Adress{<FaLocationDot size={20} />}</h3>
                <ul>
                    <li className='text-sm'>DeluxeFleet Luxury Car Rentals</li>
                    <li className='text-sm'>1234 Ocean Avenue</li>
                    <li className='text-sm'>Prestige City, CA 98765</li>
                    <li className='text-sm'>United States</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer