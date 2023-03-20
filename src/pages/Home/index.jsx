import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { getMovies } from '../../api';
import MovieCard from '../../components/MovieCard';


function Home() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className='text-center my-6'>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  );
}

export default Home;
