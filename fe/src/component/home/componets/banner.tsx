import * as React from 'react';
import imgone from '@images/1.jpg';
import imgtwo from '@images/2.jpg';
import imgthree from '@images/3.jpg';
const { useEffect, useState, useRef } = React;

const Banner: React.FC = () => {
    const images: string[] = [
        imgone,
        imgtwo,
        imgthree
    ]
    const [marginLeft, setMarginLeft] = useState(0); 
    const [active, setActive] = useState(0);
    const [timeerCount, setTimeerCount] = useState(-1);
    const [timeoutCount, setTimeoutCount] = useState(-1);
    const latestCount = useRef(timeerCount);
    const latestTimeoutCount = useRef(timeoutCount);

    useEffect(() => {
        const timeToogle = self.setInterval(autoToogle, 10);
        setTimeerCount(timeToogle);
        latestCount.current = timeToogle;

        return () => {

            window.clearInterval(latestCount.current);
            window.clearTimeout(latestTimeoutCount.current);
        }
    }, [])

    const autoToogle = () => {
        setMarginLeft((marginLeft: number) => {
            let newMarginLft = marginLeft;
            if (newMarginLft === -2100) {
                newMarginLft = 0;
                setActive(0);
            } else {
                newMarginLft = newMarginLft - 1;
                if (newMarginLft === -700) {
                    setActive(1)
                }

                if (newMarginLft === -1400) {
                    setActive(2)
                }
            }

            return newMarginLft;

        });
    }

    const chooseBanner = (index: number) => {
        let timerInterval: number = timeerCount;
        if (timeerCount !== -1) {
            window.clearInterval(timeerCount);
            setTimeerCount(-1);
            latestCount.current = -1;
            timerInterval = -1;
        }

        if (timeoutCount !== -1) {
            window.clearTimeout(timeoutCount);
            setTimeoutCount(-1);
            latestTimeoutCount.current = -1;
        }
        switch (index) {
            case 0:
                setActive(0);
                setMarginLeft(0)
                break;
            case 1:
                setActive(1);
                setMarginLeft(-700)
                break;
            case 2:
                setActive(2);
                setMarginLeft(-1400)
                break;
        }
        // 如果定时器清除了
        if (timerInterval === -1) {
            // 在3秒之内重启定时器
            const timeoutCount = self.setTimeout(() => {
                const timeToogle = self.setInterval(autoToogle, 10);
                setTimeerCount(timeToogle);
                latestCount.current = timeToogle;
            }, 3000);
            setTimeoutCount(timeoutCount);
            latestTimeoutCount.current = timeoutCount;
        }


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
                        return (
                            <li
                                key={index}
                                style={{ background: active === index ? '#999' : 'transparent' }}
                                onClick={chooseBanner.bind(null, index)}
                            >

                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}
export default Banner;