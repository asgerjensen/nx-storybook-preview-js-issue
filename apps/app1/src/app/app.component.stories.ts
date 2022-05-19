import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NEW_TOKEN } from '@test/tokens';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      providers: [
        { 
          provide: NEW_TOKEN,
          useValue: 'bar'
        }
      ],
      imports: [],
    })
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}