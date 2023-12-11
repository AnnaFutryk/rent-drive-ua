import { useState } from "react";
import { useSelector } from "react-redux";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";
import CarItem from "../../components/CarItem/CarItem";

import { getFavorites } from "../../redux/selectors";
import { FavoritesList, Text, Wrapper } from "./Favorites.styled";

const Favorites = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const favoriteCars = useSelector(getFavorites);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFavorites = favoriteCars.favorites.slice(startIndex, endIndex);
  const hasMoreCars = favoriteCars.favorites.length > endIndex;

  return (
    <>
      <Wrapper>
        <FavoritesList>
          {displayedFavorites.map((favorite, id) => (
            <CarItem key={id} cars={favorite} />
          ))}
          {favoriteCars.favorites.length === 0 && (
            <Text>
              🚘 Your favorites list is currently empty. Add some cars to create
              your personalized collection! 🚘
            </Text>
          )}
        </FavoritesList>
      </Wrapper>
      {hasMoreCars && <LoadMoreBtn onClick={handleLoadMore} text="Load more" />}
    </>
  );
};

export default Favorites;
