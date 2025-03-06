import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Plus } from "phosphor-react";
import Header from "./Header";
import Modal from "./Modal";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [watchlistModal, setWatchlistModal] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const rutaMovies = "/db/movies.json";

    useEffect(() => {
        fetch(rutaMovies)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                const storedWatchList = JSON.parse(localStorage.getItem('watchlist')) || [];
                console.log(storedWatchList);
                setWatchlistModal(storedWatchList);
            })
                
            .catch((error) => console.log("Error al cargar el archivo", error));
    }, []);

    const addToWatchlist = (movie) => {
        const watchList = JSON.parse(localStorage.getItem('watchlist')) || [];
        
        if (!watchList.some(item => item.id === movie.id)) {
            watchList.push(movie);
            localStorage.setItem('watchlist', JSON.stringify(watchList));
            setWatchlistModal(watchList);
        }
    };

    const handleOpenWatchlist = () => {
        console.log('Abriendo el modal');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log('cerrando el modal');
        setIsModalOpen(false);
    };

    //const localStorageMovies = JSON.parse(localStorage.getItem('watchlist')) || [];

    const handleRemoveFromWatchlist = (id) => {
        
        const watchList = JSON.parse(localStorage.getItem('watchlist')) || [];
    
        const updatedWatchList = watchList.filter(movie => movie.id !== id);
    
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchList));
    
        setWatchlistModal(updatedWatchList);
    };
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header onOpenWatchlist={handleOpenWatchlist} />
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                movies={watchlistModal}
                onRemove={handleRemoveFromWatchlist}
            />
            <main className="bg-gray-700/90 rounded-md shadow-2xl py-10 my-10 mx-5">
                <div className="container mx-auto px-4">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <div className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={movie.img}
                                        alt={movie.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-text-primary text-lg text-center font-bold mb-2">
                                            {movie.name}
                                        </h2>
                                        <button 
                                            className="flex bg-sky-500 mb-10 justify-center w-full py-4 px-2 rounded-md text-sm cursor-pointer hover:bg-sky-600 text-white"
                                            onClick={() => addToWatchlist(movie)}
                                        >
                                            <Plus size={20} color="#ffffff" />&nbsp;Add to Watchlist
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
        </div>
    );
};

export default MovieList;