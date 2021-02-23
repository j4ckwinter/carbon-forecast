import { APP_BASE_HREF } from '@angular/common';
import { Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppModule } from '../../app/app.module';
import { HomeComponent } from '../../app/home/home.component';

export default {
  title: 'Home',
  component: HomeComponent,
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

const Template: Story<HomeComponent> = (
  args: HomeComponent
): StoryFnAngularReturnType => ({
  component: HomeComponent,
  props: args,
});

export const defaultState: Story<HomeComponent> = Template.bind({});
