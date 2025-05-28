import React from 'react';
import HeaderLogo from '../../assets/cheapshark.png';
const Header = (): React.ReactElement => {
    return (
        <header className="max-h-20 w-full max-w-7xl mx-auto fixed top-0 z-50 bg-indigo-50 border-b-2 border-b-indigo-100">
            <nav className="flex justify-start items-center gap-8">
                <div className="w-14 h-14">
                    <img
                        src={HeaderLogo}
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                <ul className="flex justify-start gap-8">
                    <li>
                        <a
                            href="#hero"
                            className="py-2 px-4 text-indigo-800 text-[1rem] hover:opacity-70 transition duration-500"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#deals"
                            className="py-2 px-4 text-indigo-800 text-[1rem] hover:opacity-70 transition duration-500"
                        >
                            Deals
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
