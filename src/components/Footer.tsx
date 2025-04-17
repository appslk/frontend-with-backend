import { FC } from 'react';

export const Footer: FC = () => {
    const images = [
        "https://dwsolassets.pages.dev/imgs/1.png",
        "https://dwsolassets.pages.dev/imgs/2.png",
        "https://dwsolassets.pages.dev/imgs/3.png",
        "https://dwsolassets.pages.dev/imgs/4.png",
        "https://dwsolassets.pages.dev/imgs/5.png",
        "https://dwsolassets.pages.dev/imgs/6.png",
        "https://dwsolassets.pages.dev/imgs/7.png",
        "https://dwsolassets.pages.dev/imgs/8.png",
        "https://dwsolassets.pages.dev/imgs/9.png",
        "https://dwsolassets.pages.dev/imgs/10.png",
        "https://dwsolassets.pages.dev/imgs/11.png",
        "https://dwsolassets.pages.dev/imgs/12.png",
        "https://dwsolassets.pages.dev/imgs/13.png",
        "https://dwsolassets.pages.dev/imgs/14.png",
        "https://dwsolassets.pages.dev/imgs/15.png",
        "https://dwsolassets.pages.dev/imgs/16.png",
        "https://dwsolassets.pages.dev/imgs/17.png",
        "https://dwsolassets.pages.dev/imgs/18.png",
    ];

    return (
        <div className="footer-container w-full overflow-hidden -mt-4">
            <div className="slider">
                <div className="slide-track2">
                    {images.map((src, index) => (
                        <div className="slide" key={index}>
                            <img className="carouselIMG" src={src} alt={`img-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
