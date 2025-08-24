// filterNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'equals');
  const [value, setValue] = useState(data?.value || '');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      inputHandles={[{ name: 'data', color: '#3b82f6' }]}
      outputHandles={[
        { name: 'filtered', color: '#10b981' },
        { name: 'rejected', color: '#ef4444' }
      ]}
      className="filter-node"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Condition:</span>
          <select 
            value={condition} 
            onChange={handleConditionChange}
            style={{
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '11px'
            }}
          >
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Value:</span>
          <input 
            type="text" 
            value={value} 
            onChange={handleValueChange}
            style={{
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '11px'
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
}
