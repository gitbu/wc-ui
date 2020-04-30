import { newE2EPage } from '@stencil/core/testing';

describe('json-object-value', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<json-object-value></json-object-value>');

    const element = await page.find('json-object-value');
    expect(element).toHaveClass('hydrated');
  });
});
