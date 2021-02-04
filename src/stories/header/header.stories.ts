import { APP_BASE_HREF } from '@angular/common';
import { Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppComponent } from '../../app/app.component';
import { AppModule } from '../../app/app.module';

export default {
  title: 'Header',
  component: AppComponent,
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

const Template: Story<AppComponent> = (
  args: AppComponent
): StoryFnAngularReturnType => ({
  component: AppComponent,
  props: args,
});

export const withRouter: Story<AppComponent> = Template.bind({});
