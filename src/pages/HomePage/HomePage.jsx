import BgVideo from "../../video/IMG_1236.MP4";
import { OverLay, Text, VideoBg } from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <OverLay>
        <VideoBg src={BgVideo} autoPlay muted loop />
      </OverLay>
      <Text>
        Where every journey is your story, and we provide you with the keys to
        the best adventures!
      </Text>
    </>
  );
};

export default HomePage;
