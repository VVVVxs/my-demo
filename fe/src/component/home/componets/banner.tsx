import * as React from 'react';
const { useEffect, useState } = React;
const Banner: React.FC = () => {
    const [marginLeft, setMarginLeft] = useState(0);
    useEffect(() => {
        timeer()
    }, [])

    const timeer = () => {
        setInterval(() => {
            setMarginLeft((marginLeft: number) => {
                let newMarginLft = marginLeft;
                if (newMarginLft === -2200) {
                    newMarginLft = 0;
                } else {
                    newMarginLft = newMarginLft - 5;
                }

                return newMarginLft;

            });
        }, 50);
    }

    console.log(marginLeft)

    return (
        <div className='banner'>
            <ul className='bannerContainer' style={{ marginLeft: marginLeft }}>
                <li><img src="../../../../static/images/1.jpg" alt="" /></li>
                <li><img src="../../../../static/images/2.jpg" alt="" /></li>
                <li><img src="../../../../static/images/3.jpg" alt="" /></li>
                <li><img src="../../../../static/images/1.jpg" alt="" /></li>
            </ul>

        </div>
    )
}
export default Banner;