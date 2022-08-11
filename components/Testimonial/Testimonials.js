
import { useMatchMedia } from '../../hooks/useMatchMedia';
import CarouselTestimonials from './CarouselTestimonials';
import RegularTestimonials from './RegularTestimonials';
const styles = {
    grids: 'grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12',
    blockquotes: 'border-1 rounded-lg bg-gray-100 p-6 hover:bg-white'
}

const Testimonials = () => {

    const isDesktopResolution = useMatchMedia('(max-width:1024px)', true)

    return (
        <>
                {isDesktopResolution && ( 
                  <CarouselTestimonials />
                )}

                {!isDesktopResolution && ( 
                  <RegularTestimonials />
                  )}
            <div>
                <img src="/skimage.png" alt="skimage" className="py-[74px] mx-auto"></img>
            </div>
        </>
    );
};

export default Testimonials
