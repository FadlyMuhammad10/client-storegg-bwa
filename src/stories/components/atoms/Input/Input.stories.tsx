import type { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../../components/atoms/Input";

const meta = {
  title: "Components/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta;
export default meta;

const Template = (args: InputProps) => <Input {...args} />;
export const Default = Template.bind({});

Default.args = {
  label: "Nama Lengkap",
};
