import React from 'react';
import { Popcorn, FilmSlate } from 'phosphor-react';

const Header = ({ onOpenWatchlist }) => {
    return (
        <header className='flex items-center justify-center w-full bg-gray-800/90 p-6'>
            <div className='flex container mx-auto justify-between items-center shadow'>
                <h1 className='flex text-4xl font-bold'>
                    <Popcorn size={44} className='text-white font-bold' />
                    <span className='text-white'>Movies</span><span className='text-sky-500'>play</span>
                </h1>
                <div className='flex items-center space-x-4'>
                    <button 
                        id='watchlist' 
                        className='text-white font-semibold text-xl hover:text-sky-500 cursor-pointer'
                        onClick={onOpenWatchlist}
                    >
                        WatchList
                    </button>
                    <div className='font-bold cursor-pointer text-sky-500'>
                        <FilmSlate size={36} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;