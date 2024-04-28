import React from 'react';
import IMAGE from '../assets/images/device-pile-in.png'
import { Image1, Image2, Image3 } from '../assets/constants';

const Home = () => {
    return (
        <>
        {/* // <div className='w-4/5 h-10 mx-auto my-48 bg-gray-900 bg-opacity-40'>
        //    <div className='text-white font-extrabold text-3xl w-fit m-auto'>Innovate with Confidence: Where Dreams Take Flight.</div>
    // </div> */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade w-1/2 mx-auto mt-5 h-96" style={{background: 'rgb(24 23 23 / 41%)'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Image3} className="d-block w-70 mx-auto h-96" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={Image2} className="d-block w-70 mx-auto h-96" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={Image1} className="d-block w-70 mx-auto h-96" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
   </>
    );
};

export default Home;