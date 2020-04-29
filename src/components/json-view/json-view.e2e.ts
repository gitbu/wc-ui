import { newE2EPage } from '@stencil/core/testing';

describe('wc-json-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-json-view></wc-json-view>');

    const element = await page.find('wc-json-view');
    expect(element).toHaveClass('hydrated');
  });
});
