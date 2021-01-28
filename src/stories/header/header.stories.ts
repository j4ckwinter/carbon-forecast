import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../../app/header/header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
} as Meta;

const Template: Story<HeaderComponent> = (
  args: HeaderComponent
): StoryFnAngularReturnType => ({
  component: HeaderComponent,
  props: args,
});

export const defaultState: Story<HeaderComponent> = Template.bind({});
