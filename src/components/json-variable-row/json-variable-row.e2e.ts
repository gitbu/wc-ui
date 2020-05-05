import { newE2EPage } from '@stencil/core/testing';

describe('wc-json-variable-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-json-variable-row></wc-json-variable-row>');

    const element = await page.find('wc-json-variable-row');
    expect(element).toHaveClass('hydrated');
  });
});
