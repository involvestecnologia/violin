import React, { useState } from 'react';
import { Button, Dropdown, Checkbox } from '../index';

const DemoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      preventClose
      open={isOpen}
      trigger={<Button primary onClick={() => setIsOpen(true)}>Click me!</Button>}
    >
      <div style={{ padding: 10 }}>
        <Checkbox label="Lorem ipsum dolor sit" style={{ padding: '5px 0', display: 'flex' }} />
        <Checkbox label="Duis aute irure dolor in reprehenderit" style={{ padding: '5px 0', display: 'flex' }} />
        <Checkbox label="Excepteur sint occaecat" style={{ padding: '5px 0', marginBottom: 10, display: 'flex' }} />
        <Button block onClick={() => setIsOpen(false)}>Apply</Button>
      </div>
    </Dropdown>
  );
};

export default DemoDropdown;
