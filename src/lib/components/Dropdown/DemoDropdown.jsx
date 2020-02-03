import React, { useState } from 'react';
import { Button, Dropdown, Checkbox } from '../index';

const DemoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropdown preventClose open={isOpen} trigger={<Button onClick={() => setIsOpen(true)}>Click me!</Button>}>
        <div style={{ padding: 10 }}>
          <Checkbox label="Lorem ipsum dolor sit" style={{ padding: '5px 0', display: 'flex' }} />
          <Checkbox label="Duis aute irure dolor in reprehenderit" style={{ padding: '5px 0', display: 'flex' }} />
          <Checkbox label="Excepteur sint occaecat" style={{ padding: '5px 0', marginBottom: 10, display: 'flex' }} />
          <Button primary block onClick={() => setIsOpen(false)}>Apply</Button>
        </div>
      </Dropdown>

      <Dropdown preventClose open={isOpen2} trigger={<Button onClick={() => setIsOpen2(true)}>Click me!</Button>}>
        <div style={{ padding: 10 }}>
          <Checkbox label="Lorem ipsum dolor sit" style={{ padding: '5px 0', display: 'flex' }} />
          <Checkbox label="Duis aute irure dolor in reprehenderit" style={{ padding: '5px 0', display: 'flex' }} />
          <Checkbox label="Excepteur sint occaecat" style={{ padding: '5px 0', marginBottom: 10, display: 'flex' }} />
          <Button primary block onClick={() => setIsOpen2(false)}>Apply</Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default DemoDropdown;
