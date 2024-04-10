import Wrapper from "./Wrapper"

const PageHeading = ({ heading }: { heading: string }) => {
    return (
        <div className='bg-company-secondary h-20 w-full'>
            <Wrapper className='h-full flex items-center'>
                <h1 className={`text-white font-bold ${heading.length > 25 ? "text-xl md:text-3xl" : "text-3xl"} leading-tight pl-2`}>{heading}</h1>
            </Wrapper>
        </div>
    )
}

export default PageHeading