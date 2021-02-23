import { APP_BASE_HREF } from '@angular/common';
import { Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppModule } from '../../app/app.module';
import { NationalComponent } from '../../app/national/national.component';

export default {
  title: 'National',
  component: NationalComponent,
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

const Template: Story<NationalComponent> = (
  args: NationalComponent
): StoryFnAngularReturnType => ({
  component: NationalComponent,
  props: args,
});

export const withRouter: Story<NationalComponent> = Template.bind({});
