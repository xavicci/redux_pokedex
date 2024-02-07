import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const typesString = types.map((elem) => elem.type.name).join(", ");
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};
