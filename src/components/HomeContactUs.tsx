import ContactButton from './ui/ContactButton'
import Wrapper from './util/Wrapper'

const HomeContactUs = () => {
    return (
        <div className='w-full blue-gradient'>
            <Wrapper>
                <div className='w-full flex flex-col gap-8 px-2 py-8 md:px-8 md:py-10' >
                    <div className='text-white flex flex-col gap-1'>
                        <h1 className='text-3xl md:text-4xl font-bold leading-none'>Contact us with your inquiries or requirements.</h1>
                        <h2 className='text-sm md:text-lg'>Our team is dedicated to providing personalized assistance tailored to your needs.</h2>
                    </div>

                    <ContactButton fit='fit' />

                </div>
            </Wrapper>
        </div>
    )
}

export default HomeContactUs