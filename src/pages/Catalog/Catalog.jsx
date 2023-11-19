import { useGetCarsQuery } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";
import { CarsList } from "./Catalog.styled";
import CarItem from "../../components/CarItem/CarItem";
import Filter from "../../components/Filter/Filter";

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
          <Filter />
          <CarsList>
            {cars.map((car) => (
              <CarItem key={car.id} cars={car} />
            ))}
          </CarsList>
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
