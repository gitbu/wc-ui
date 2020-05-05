import { newE2EPage } from '@stencil/core/testing';

describe('wc-json-object-key-value', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-json-object-key-value></wc-json-object-key-value>');

    const element = await page.find('wc-json-object-key-value');
    expect(element).toHaveClass('hydrated');
  });
});
