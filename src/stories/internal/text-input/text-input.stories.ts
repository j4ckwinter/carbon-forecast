import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TextInputComponent } from '../../../app/internal/text-input/text-input.component';

export default {
  title: 'Internal/Text Input',
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta;

const Template: Story<TextInputComponent> = (
  args: TextInputComponent
): StoryFnAngularReturnType => ({
  component: TextInputComponent,
  props: args,
});

export const defaultState: Story<TextInputComponent> = Template.bind({});
defaultState.args = {
  textInput: {
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
    formControlName: 'form',
  },
};
