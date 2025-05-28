import React from 'react';
import HeroImg from '../../assets/hero.png';

const Hero = (): React.ReactElement => {
    return (
        <section
            className="flex justify-around items-center h-[90vh] max-lg:flex-col pt-20"
            id="hero"
        >
            <div className="basis-lg">
                <h1 className="text-6xl text-indigo-900 font-bold max-sm:text-5xl">
                    Cheapshark Games
                </h1>
                <p className="text-[1rem] text-2xl text-gray-500 mt-8">
                    As melhores ofertas em jogos, direto na sua tela.
                </p>
                <a
                    href="#deals"
                    className="bg-indigo-900 text-indigo-50 rounded-[8px] 
                    transition duration-500 shadow-lg 
                    hover:shadow-indigo-300 inline-block py-2 px-4 mt-10"
                >
                    Conferir ofertas
                </a>
            </div>

            <div className="basis-lg relative flex justify-center items-center">
                <div className="absolute w-[200px] h-[200px] rounded-full -z-1 bg-indigo-800 blur-lg shadow-[0_0_100px_100px_rgba(0,0,0,0.25)] shadow-indigo-800 max-sm:shadow-[0_0_50px_50px_rgba(0,0,0,0.25)] max-sm:w-[120px] max-sm:h-[120px] max-lg:shadow-[0_0_80px_80px_rgba(0,0,0,0.25)] max-lg:w-[150px] max-lg:h-[150px]"></div>
                <img
                    src={HeroImg}
                    alt="Man playing video-game"
                    className="relative z-1 w-full h-auto"
                />
            </div>
        </section>
    );
};

export default Hero;
