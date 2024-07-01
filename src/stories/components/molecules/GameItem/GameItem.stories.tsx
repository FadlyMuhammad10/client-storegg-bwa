import type { Meta } from "@storybook/react";
import GameItem, {
  GameProps,
} from "../../../../../components/molecules/GameItem";

const meta = {
  title: "Components/Molecules/GameItem",
  component: GameItem,
  tags: ["autodocs"],
} as Meta;
export default meta;

const Template = (args: GameProps) => <GameItem {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: "Super Mechs",
  category: "Mobile",
  thumbnail: "Thumbnail-1",
};
