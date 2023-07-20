import { BsArrowRightShort } from 'react-icons/bs'

type CarProps = {
    carImage: string
    carName: string
    carPrice: number
}

function Car({ carImage, carName, carPrice }: CarProps) {
    return (
        <div className='border w-52 h-72 p-2 border-primary flex flex-col mt-6 gap-5 relative'>
            <img src={carImage} alt={`${carName}`} className='w-46 h-36'/>
            <div>
                <h3 className='font-inter-bold'>{carName}</h3>
                <p className='mt-1'>{`$${carPrice}`}</p>
            </div>
            <a href="" className='flex items-center self-end'>More details {<BsArrowRightShort size={20} />}</a>
        </div>
    )
}

export default Car