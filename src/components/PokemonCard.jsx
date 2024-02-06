import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import { StarOutlined } from "@ant-design/icons";

export const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"
          alt="Charizard"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
