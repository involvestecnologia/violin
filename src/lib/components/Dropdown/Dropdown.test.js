import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

afterEach(cleanup);

const component = <button data-testid="trigger" type="button">Lirem Ipsum</button>;
const content = <p data-testid="content">Lorem ipsaum dolor sit amet</p>;

describe('Dropdown', () => {
  test('should render trigger correctly', () => {
    const { getByTestId } = render(<Dropdown trigger={component}>{content}</Dropdown>);
    expect(getByTestId('trigger')).toBeInTheDocument();
  });

  test('shoud render content when trigger was clicked', () => {
    const { queryByTestId, container } = render(<Dropdown trigger={component}>{content}</Dropdown>);
    expect(queryByTestId('content')).not.toBeInTheDocument();

    fireEvent.click(container.firstChild);
    expect(queryByTestId('content')).toBeInTheDocument();
  });
});
