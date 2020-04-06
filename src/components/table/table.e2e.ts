import { newE2EPage } from '@stencil/core/testing';

describe('wc-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-table></wc-table>');

    const element = await page.find('wc-table');
    expect(element).toHaveClass('hydrated');
  });
});
