// splitNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const SplitNode = ({ id, data }) => {
  const [splitType, setSplitType] = useState(data?.splitType || 'character');
  const [splitValue, setSplitValue] = useState(data?.splitValue || ' ');

  const handleSplitTypeChange = (e) => {
    setSplitType(e.target.value);
  };

  const handleSplitValueChange = (e) => {
    setSplitValue(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Split"
      inputHandles={[{ name: 'data', color: '#3b82f6' }]}
      outputHandles={[
        { name: 'part1', color: '#10b981', top: '25%' },
        { name: 'part2', color: '#f59e0b', top: '75%' }
      ]}
      className="split-node"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Split Type:</span>
          <select 
            value={splitType} 
            onChange={handleSplitTypeChange}
            style={{
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '11px'
            }}
          >
            <option value="character">Character</option>
            <option value="word">Word</option>
            <option value="line">Line</option>
            <option value="regex">Regex</option>
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Split Value:</span>
          <input 
            type="text" 
            value={splitValue} 
            onChange={handleSplitValueChange}
            placeholder={splitType === 'character' ? 'e.g., ,' : splitType === 'word' ? 'e.g., space' : 'e.g., \\n'}
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
