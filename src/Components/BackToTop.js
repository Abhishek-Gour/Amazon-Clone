import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTop = () => {
    const scrollTop  = () => {
        window.scrollTo({top:0,left:0,behavior:'smooth'});
    }
    return (
        <div className='fotterTop footerCp footerHover' onClick={scrollTop}>
            <h4>Back to top &nbsp;</h4><ArrowUpwardIcon/>
        </div>
    )
}

export default BackToTop
