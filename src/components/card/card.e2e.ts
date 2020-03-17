import { newE2EPage } from '@stencil/core/testing';

describe('wc-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-card></wc-card>');

    const element = await page.find('wc-card');
    expect(element).toHaveClass('hydrated');
  });
});
