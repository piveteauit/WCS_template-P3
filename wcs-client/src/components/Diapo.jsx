import { useState } from 'react';
import { IoMdArrowDroprightCircle, IoMdArrowDropleft } from 'react-icons/io'
import '../styles/Diapo.css';

const Diapo = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNextSlide = () => {

    }

    return (
        <div className='home-page-header'>
            <div className='diapo slide1'>
                <span>Test</span>
                <IoMdArrowDroprightCircle className='next-slide-arrow'/>
            </div>
        </div>
    )
}

export default Diapo;