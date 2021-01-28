import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppComponent } from '../../app/app.component';

export default {
  title: 'App',
  component: AppComponent,
} as Meta;

const Template: Story<AppComponent> = (
  args: AppComponent
): StoryFnAngularReturnType => ({
  component: AppComponent,
  props: args,
});

export const defaultState: Story<AppComponent> = Template.bind({});
