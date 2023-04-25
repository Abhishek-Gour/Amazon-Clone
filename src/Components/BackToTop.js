/**
 * This is a React component that renders a clickable button to scroll back to the top of the page.
 * @returns A React functional component called `BackToTop` that renders a `div` element with a class
 * of `fotterTop footerCp footerHover` and an `onClick` event listener that triggers the `scrollTop`
 * function. Inside the `div`, there is an `h4` element with the text "Back to top" and an
 * `ArrowUpwardIcon` component from the `
 */
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
