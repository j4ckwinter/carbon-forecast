import { APP_BASE_HREF } from '@angular/common';
import { Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppModule } from '../../app/app.module';
import { RegionalComponent } from '../../app/regional/regional.component';

export default {
  title: 'Regional',
  component: RegionalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AppModule,
        RouterModule.forRoot(
          [
            {
              path: '',
              loadChildren: (): Type<AppModule> => AppModule,
            },
          ],
          {
            useHash: true,
          }
        ),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<RegionalComponent> = (
  args: RegionalComponent
): StoryFnAngularReturnType => ({
  component: RegionalComponent,
  props: args,
});

export const withRouter: Story<RegionalComponent> = Template.bind({});
