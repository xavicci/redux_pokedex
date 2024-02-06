import { Card } from "antd";
import { Meta } from "antd/es/list/Item";
import { StarOutlined } from "@ant-design/icons";

export const PokemonCard = ({ name, image }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
