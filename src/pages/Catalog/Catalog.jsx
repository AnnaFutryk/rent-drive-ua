import { useGetAllCarsQuery, useGetCarsQuery } from "../../redux/carsSlice";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const itemsPerPage = 12;

  const filteredCars =
    (allCars || []).filter((car) => {
      const makeCondition =
        !filter.selectedMake || car.make === filter.selectedMake.value;

      const priceCondition =
        !filter.rentalPrice ||
        (parseFloat(car.rentalPrice.replace("$", "")) <=
          parseFloat(filter.rentalPrice) &&
          parseFloat(car.rentalPrice.replace("$", "")) >
            parseFloat(filter.rentalPrice) - 10);

      const mileageMinCondition =
        !filter.mileageMin ||
        parseFloat(car.mileage) >= parseFloat(filter.mileageMin);

      const mileageMaxCondition =
        !filter.mileageMax ||
        parseFloat(car.mileage) <= parseFloat(filter.mileageMax);

      return (
        makeCondition &&
        priceCondition &&
        mileageMinCondition &&
        mileageMaxCondition
      );
    }) || [];

  const totalFilteredCars = filteredCars.length;

  // Slice the filtered cars based on the current page and itemsPerPage
  const slicedFilteredCars = filteredCars.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Ooops... something went wrong</p>;
  }

  if (!slicedFilteredCars || slicedFilteredCars.length === 0) {
    toast.error(`No cars found`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  }

  const hasMoreCars = cars ? cars.length > 0 : false;

  const isLastPage =
    !isFetching && (!hasMoreCars || slicedFilteredCars.length < itemsPerPage);

  const showLoadMoreButton =
    filter.selectedMake ||
    filter.rentalPrice ||
    filter.mileageMin ||
    filter.mileageMax
      ? totalFilteredCars > page * itemsPerPage
      : hasMoreCars;

  const makes = allCars ? [...new Set(allCars.map((car) => car.make))] : [];
  const prices = allCars
    ? [
        ...new Set(
          allCars.map((car) => parseFloat(car.rentalPrice.replace("$", "")))
        ),
      ]
    : [];

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ToastContainer transition={Slide} />
          <Filter
            makes={makes}
            prices={prices}
            onFilterChange={(newFilters) => {
              setPage(1);
              dispatch(setFilter(newFilters));
            }}
            filter={filter}
          />
          <CarsList>
            {slicedFilteredCars.map((car) => (
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
