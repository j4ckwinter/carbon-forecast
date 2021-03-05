import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../../../app/internal/button/button.component';

export default {
  title: 'Internal/Button',
  component: ButtonComponent,
  decorators: [moduleMetadata({})],
} as Meta;

const Template: Story<ButtonComponent> = (
  args: ButtonComponent
): StoryFnAngularReturnType => ({
  component: ButtonComponent,
  props: args,
});

export const defaultState: Story<ButtonComponent> = Template.bind({});
defaultState.args = {
  button: {
    value: 'Primary',
    type: 'submit',
  },
};
