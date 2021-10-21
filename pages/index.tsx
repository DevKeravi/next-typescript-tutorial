import type { Color, Colors } from "./api/colors";
import type { GetServerSideProps } from "next";
import axios from "axios";
import AppLayout from "../components/AppLayout/AppLayout";
import ColorCard from "../components/ColorCard";

interface IndexProps {
  colors: Color[];
}

const cardsDelay: number = 50;
const loadedAtOnce: number = 40;

const index = ({ colors }: IndexProps) => {
  return (
    <AppLayout>
      {colors?.map((data, index) => (
        <ColorCard
          key={`ColorCard_${data.id}_${index}`}
          animationDelay={`${
            (index * cardsDelay) % (cardsDelay * loadedAtOnce)
          }`}
          data={data}
        />
      ))}
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get<Colors>("http://localhost:3000/api/colors");
    return {
      props: {
        colors: res.data.colors,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      colors: [],
    },
  };
};

export default index;
