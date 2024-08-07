'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarouselComponent(){
    return(
        <Carousel autoPlay navButtonaAlwaysVisible infiniteLoop emulateTouch showStatus={false} showThumbs={false} 
        >
        <div>
            <img src="https://picsum.photos/id/23/900/400"  alt="nhi hai bhai"/>
            
        </div>
        <div>
            <img src="https://picsum.photos/id/42/900/400" alt="nhi hai bhai" />
        
        </div>
        <div>
            <img src="https://picsum.photos/id/225/900/400" alt="nhi hai bhai" />
        </div>
    </Carousel>
    )
}