import React from 'react'
import fondo from '../assets/img/backgroundMovies.webp'
import Header from './Header'
import MovieList from './MovieList'
import Footer from './Footer'

const page = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${fondo})` }}>
        {/* Capa de opacidad y degradado */}
        <div className="absolute inset-0 bg-grey-900/20 
                      bg-gradient-to-b from-transparent to-gray-950">
        </div>
        <div className='relative z-10'>
        <MovieList />
        <Footer
          modulo = 'Módulo 4 - Sprint 2'
          nombre = 'Luis Fernando Acosta'
        />
        </div>
    </div>
  )
}

export default page