// import { ToastContainer, toast, Slide } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loader from 'components/Loader/Loader';
import BgVideo from "../../video/IMG_1236.MP4";
import { OverLay, Text, VideoBg } from "./HomePage.styled";
// import { useLocation } from "react-router-dom";

const HomePage = () => {
  //отримуємо обʼєкт місця положення, щоб при кліку на Go back з інф про акторів-відгуків, було коректне повернення на HomePage
  // const location = useLocation();

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
