import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Card } from './Card';

afterEach(cleanup);
const contentCard = 'Lorem ipsum';

describe('Card', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Card>{contentCard}</Card>);
    expect(getByText(contentCard)).toBeInTheDocument();
  });

  test('should render actions elements', () => {
    const { getByText } = render(
      <Card actions={[
        <span key={1}>action 1</span>,
        <span key={2}>action 2</span>
      ]}
      >
        {contentCard}
      </Card>
    );
    expect(getByText('action 1')).toBeInTheDocument();
    expect(getByText('action 2')).toBeInTheDocument();
  });

  test('should render title and subTitle', () => {
    const title = 'Title';
    const subTitle = 'Sub Title';

    const { getByText } = render(
      <Card title={title} subTitle={subTitle}>
        {contentCard}
      </Card>
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subTitle)).toBeInTheDocument();
  })

  test('should have block style', () => {
    const { getByText } = render(<Card>{contentCard}</Card>);
    expect(getByText(contentCard)).toHaveStyle(`
      display: block;
    `);
  });
});
