import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Test: Story = {
  args: {
    size: 'large',
    label: 'Button-test',
    backgroundColor: 'yellow'
  },
  render:(args) => (<Button {...args} />),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    const btn = await canvas.getByRole('button', {
      name: /Button-test/i
    })
    await userEvent.click(btn)

    await expect(btn.textContent).toEqual('Button-test')
    await expect(btn.style.backgroundColor).toEqual('yellow')

    btn.textContent = 'Another'
  },
  // render(args, meta) {
  //   const list = meta.loaded.list
  //   return <div>
  //     <div>{list.join(',')}</div>
  //     <Button {...args}></Button>
  //   </div>
  // },
  // loaders: [
  //   async () => {
  //     await 'mock fetch'
  //     return {
  //       list: [1,2,3,4,5,6]
  //     }
  //   }
  // ]
};