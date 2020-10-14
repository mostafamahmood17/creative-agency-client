import React from 'react';
import picOne from '../../../images/carousel-1.png';
import picTwo from '../../../images/carousel-2.png';
import picThree from '../../../images/carousel-3.png';
import picFour from '../../../images/carousel-4.png';
import picFive from '../../../images/carousel-5.png';

const CarouselSection = () => {
    return (
        <div className="mt-5 d-flex justify-content-center bg-dark pb-5">
            
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <h3 className="text-center mt-3 mb-5"><span className="text-white">Here are some of</span> <span style={{color:"#7AB259"}}>our work</span></h3>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="2000">
                        <img style={{maxWidth:"750px", height:"400px"}} src={picOne} className="d-block img-fluid w-100 pl-5 pr-5" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img style={{maxWidth:"750px", height:"400px"}} src={picTwo} className="d-block img-fluid w-100 pl-5 pr-5" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img style={{maxWidth:"750px", height:"400px"}} src={picThree} className="d-block img-fluid w-100 pl-5 pr-5" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img style={{maxWidth:"750px", height:"400px"}} src={picFour} className="d-block img-fluid w-100 pl-5 pr-5" alt="..." />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img style={{maxWidth:"750px", height:"400px"}} src={picFive} className="d-block img-fluid w-100 pl-5 pr-5" alt="..." />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
};

export default CarouselSection;