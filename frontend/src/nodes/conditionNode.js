// conditionNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'if_true');
  const [threshold, setThreshold] = useState(data?.threshold || '0');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const handleThresholdChange = (e) => {
    setThreshold(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Condition"
      inputHandles={[{ name: 'data', color: '#3b82f6' }]}
      outputHandles={[
        { name: 'true', color: '#10b981', top: '25%' },
        { name: 'false', color: '#ef4444', top: '75%' }
      ]}
      className="condition-node"
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
            <option value="if_true">If True</option>
            <option value="if_false">If False</option>
            <option value="if_empty">If Empty</option>
            <option value="if_length">If Length</option>
          </select>
        </label>
        {(condition === 'if_length' || condition === 'if_true') && (
          <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '11px', color: '#6b7280' }}>Threshold:</span>
            <input 
              type="number" 
              value={threshold} 
              onChange={handleThresholdChange}
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
