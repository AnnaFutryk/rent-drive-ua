import { useGetCarsQuery } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const { data: cars, error, isLoading } = useGetCarsQuery();

  return (
    <>
      {error && <p>Ooops... something went wrong</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <img src={car.img} alt="Car" width={250} />
              <p>{car.model}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Catalog;
