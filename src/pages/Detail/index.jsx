import { IconPlayerPlay } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../api';

function Detail() {
  const { movie_id } = useParams();

  console.log(movie_id);

  const { isLoading, data } = useQuery({
    queryKey: ['movie', movie_id],
    queryFn: () => getMovie(movie_id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log('data', data); //arkaplana filminn resimin koyacağız,Filmin ismini ve Filme açıklama koyduğm kısım

  const { backdrop_path, title, overview } = data;    

  return (                  //Data gelmez ise çalışıcak kısım
    <div className='relative h-[720px]'>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=''
        className='absolute -z-10'
      />

      <div className='absolute bottom-0 left-9'>  
        <div className='bg-white rounded-md p-2 opacity-90'>
          <h1 className='text-5xl font-semibold text-black'>{title}</h1>
        </div>
        <div className='w-[400px] bg-slate-200 text-black p-2 opacity-90 text-xl mt-2 rounded-md'>
          {overview}
        </div>

        <div className='flex gap-4 mt-4'>
          <button className='bg-blue-600 text-white flex gap-2'>
            <IconPlayerPlay />
            Play Now
          </button>
          <button className='bg-gray-600 text-white'>Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
