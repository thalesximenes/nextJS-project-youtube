import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoThumb, { IVideoThumb } from './VideoThumb';
import { mockVideoThumbProps } from './VideoThumb.mocks';

export default {
  title: 'cards/VideoThumb',
  component: VideoThumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VideoThumb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoThumb> = (args) => (
  <VideoThumb {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVideoThumbProps.base,
} as IVideoThumb;
