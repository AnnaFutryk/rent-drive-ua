import { useGetCarsQuery } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const { data: cars, error, isLoading, isFetching } = useGetCarsQuery(page);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const hasMoreCars = cars ? cars.length > 0 : false;
  const itemsPerPage = 12;

  // Check if it's the last page
  const isLastPage =
    !isFetching && (!hasMoreCars || cars.length < itemsPerPage);

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ul>
            {cars.map((car) => (
              <li key={car.id}>
                <img src={car.img} alt="Car" width={250} />
                <p>{car.model}</p>
              </li>
            ))}
          </ul>
          {isFetching && <Loader />}
          {hasMoreCars && !isLastPage && (
            <LoadMoreBtn
              onClick={handleLoadMore}
              disabled={isFetching}
              text="Load more"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Catalog;
