import * as React from 'react';
const { useEffect, useState } = React;

const Banner: React.FC = () => {
    const images: string[] = [
        '../../../../static/images/1.jpg',
        '../../../../static/images/2.jpg',
        '../../../../static/images/3.jpg'
    ]
    const [marginLeft, setMarginLeft] = useState(0);
    const [active, setActive] = useState(0);
    useEffect(() => {
        timeer()
    }, [])

    const timeer = () => {
        setInterval(() => {
            setMarginLeft((marginLeft: number) => {
                let newMarginLft = marginLeft;
                if (newMarginLft === -2100) {
                    newMarginLft = 0;
                    setActive(0);
                } else {
                    newMarginLft = newMarginLft - 1;
                    if(newMarginLft===-700){
                        setActive(1)
                    }
                    
                    if(newMarginLft===-1400){
                        setActive(2)
                    }
                }

                return newMarginLft;

            });
        }, 10);
    }

    return (
        <div className='bannerMain'>
            <div className='banner'>
                <ul className='bannerContainer' style={{ marginLeft: marginLeft }}>
                    {
                        images.map((imgUrl: string, index: number) => {
                            return (<li key={index}><img src={imgUrl} alt="" /></li>)
                        })

                    }
                    <li key={images.length + 1}><img src={images[0]} alt="" /></li>
                </ul>
            </div>
            <ul className="doc">
                {
                    images.map((images: string, index: number) => {
                        return (<li key={index} style={{ background: active === index ? '#999' : 'transparent' }}></li>)
                    })
                }
            </ul>
        </div>

    )
}
export default Banner;