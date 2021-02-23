import { APP_BASE_HREF } from '@angular/common';
import { Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppModule } from '../../../app/app.module';
import { BreadcrumbsComponent } from '../../../app/internal/breadcrumbs/breadcrumbs.component';

export default {
  title: 'Internal/Breadcrumbs',
  component: BreadcrumbsComponent,
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

const Template: Story<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent
): StoryFnAngularReturnType => ({
  component: BreadcrumbsComponent,
  props: args,
});

export const defaultState: Story<BreadcrumbsComponent> = Template.bind({});
defaultState.args = {
  breadcrumbs: [
    { title: 'Home', routerLink: '/' },
    { title: 'Somewhere', routerLink: '/' },
    { title: 'Somewhere Else', routerLink: '/' },
    { title: 'Nowhere', routerLink: '/', isActive: true },
  ],
};
