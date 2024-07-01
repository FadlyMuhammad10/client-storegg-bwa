import type { Meta } from "@storybook/react";
import StepItem, {
  IconProps,
} from "../../../../../components/molecules/StepItem";

const meta = {
  title: "Components/Molecules/StepItem",
  component: StepItem,
  tags: ["autodocs"],
} as Meta;
export default meta;

const Template = (args: IconProps) => <StepItem {...args} />;
export const Default = Template.bind({});

Default.args = {
  icon: "step1",
  title: "1. Start",
  desc1: "Pilih salah satu game",
  desc2: "Pilih salah satu game",
};
