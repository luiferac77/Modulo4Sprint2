import React from 'react';
import { XCircle, FilmSlate, Trash } from 'phosphor-react';

const Modal = ({ isOpen, onClose, movies, onRemove }) => {
    if (!isOpen) return null; // No renderizar si no está abierto

    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-5 relative w-11/12 md:w-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    <XCircle size={32} className='text-red-600 cursor-pointer' /> {/* Ícono de cerrar */}
                </button>
                <h2 className="flex text-xl font-bold mb-4">
                    <FilmSlate size={28} />&nbsp;Watchlist
                </h2>
                <hr />
                {movies.length > 0 ? (
                    <div className="flex flex-col space-y-4">
                        {movies.map((movie) => (
                            <div key={movie.id} className="flex items-center bg-gray-100 rounded-lg p-4 shadow-md">
                                <img
                                    src={movie.img} // Asegúrate de que 'img' es la propiedad correcta
                                    alt={movie.name}
                                    className="w-16 h-24 object-cover rounded-md mr-4"
                                />
                                <h3 className="text-lg font-semibold flex-grow">{movie.name}</h3>
                                <button
                                    onClick={() => onRemove(movie.id)} // Llama a la función para eliminar
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <Trash size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No hay películas en la Watchlist.</p>
                )}
            </div>
        </div>
    );
};

export default Modal;