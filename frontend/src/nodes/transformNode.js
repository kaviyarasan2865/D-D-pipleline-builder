// transformNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'uppercase');
  const [field, setField] = useState(data?.field || '');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      inputHandles={[{ name: 'data', color: '#3b82f6' }]}
      outputHandles={[{ name: 'transformed', color: '#10b981' }]}
      className="transform-node"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Operation:</span>
          <select 
            value={operation} 
            onChange={handleOperationChange}
            style={{
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '11px'
            }}
          >
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
            <option value="reverse">Reverse</option>
            <option value="trim">Trim</option>
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Field:</span>
          <input 
            type="text" 
            value={field} 
            onChange={handleFieldChange}
            placeholder="Field name (optional)"
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
