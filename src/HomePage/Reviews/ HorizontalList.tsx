// HorizontalList.tsx
import React from 'react';

interface HorizontalListProps {
  items: string[];
}

const HorizontalList: React.FC<HorizontalListProps> = ({ items }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {items.map((item, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default HorizontalList;
