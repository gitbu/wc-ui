import { newE2EPage } from '@stencil/core/testing';

describe('wc-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-icon></wc-icon>');

    const element = await page.find('wc-icon');
    expect(element).toHaveClass('hydrated');
  });
});
