// mergeNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [mergeType, setMergeType] = useState(data?.mergeType || 'concat');
  const [separator, setSeparator] = useState(data?.separator || ' ');

  const handleMergeTypeChange = (e) => {
    setMergeType(e.target.value);
  };

  const handleSeparatorChange = (e) => {
    setSeparator(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Merge"
      inputHandles={[
        { name: 'data1', color: '#3b82f6', top: '25%' },
        { name: 'data2', color: '#8b5cf6', top: '75%' }
      ]}
      outputHandles={[{ name: 'merged', color: '#10b981' }]}
      className="merge-node"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Merge Type:</span>
          <select 
            value={mergeType} 
            onChange={handleMergeTypeChange}
            style={{
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '11px'
            }}
          >
            <option value="concat">Concatenate</option>
            <option value="join">Join</option>
            <option value="union">Union</option>
            <option value="intersection">Intersection</option>
          </select>
        </label>
        {mergeType === 'join' && (
          <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '11px', color: '#6b7280' }}>Separator:</span>
            <input 
              type="text" 
              value={separator} 
              onChange={handleSeparatorChange}
              style={{
                padding: '4px 6px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '11px'
              }}
            />
          </label>
        )}
      </div>
    </BaseNode>
  );
}
