import { newE2EPage } from '@stencil/core/testing';

describe('wc-json-object-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-json-object-content></wc-json-object-content>');

    const element = await page.find('wc-json-object-content');
    expect(element).toHaveClass('hydrated');
  });
});
