import { useGetCarsQuery } from "../../redux/carsSlice";

const Catalog = () => {
  const { data, error, isLoading } = useGetCarsQuery();

  console.log("data:", data);
  console.log("error", error);
  console.log("isLoading", isLoading);

  return (
    <>
      <p>Hello! It is Catalog</p>
    </>
  );
};

export default Catalog;
