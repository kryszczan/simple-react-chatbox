import { ChatWidget } from "../ChatWidget";

export default {
  title: "ChatWidget",
  component: ChatWidget,
  argTypes: { onSubmit: { action: "data" } },
};

const Template = (args) => <ChatWidget {...args} />;

export const Default = Template.bind({});
