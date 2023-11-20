import { useGetAllCarsQuery, useGetCarsQuery } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";
import { CarsList } from "./Catalog.styled";
import CarItem from "../../components/CarItem/CarItem";
import Filter from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { data: cars, error, isLoading, isFetching } = useGetCarsQuery(page);
  const { data: allCars } = useGetAllCarsQuery();

  const filter = useSelector(getFilter);

  // useEffect(() => {
  //   // При зміні фільтра скидаємо значення сторінки до 1
  //   setPage(1);
  // }, [filter]);

  const filteredCars = filter.make
    ? (allCars || []).filter((car) => car.make === filter.make.value)
    : cars;

  if (!filteredCars || filteredCars.length === 0) {
    return <p>No cars found.</p>;
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    // Викликаємо refetch для оновлення даних
  };

  const hasMoreCars = cars ? cars.length > 0 : false;
  const itemsPerPage = 12;
  const hasMoreFilteredCars = filteredCars.length > page * itemsPerPage;

  const isLastPage =
    !isFetching && (!hasMoreCars || (cars && cars.length < itemsPerPage));

  const showLoadMoreButton = filter.make ? hasMoreFilteredCars : hasMoreCars;

  const makes = allCars ? [...new Set(allCars.map((car) => car.make))] : [];

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Filter
            makes={makes}
            onFilterChange={(newFilters) => {
              dispatch(setFilter(newFilters));
            }}
            filter={filter}
          />
          <CarsList>
            {filteredCars.map((car) => (
              <CarItem key={car.id} cars={car} />
            ))}
          </CarsList>
          {isFetching && <Loader />}
          {showLoadMoreButton && !isLastPage && (
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
