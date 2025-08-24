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
      <div className="flex flex-col gap-1.5">
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Condition:</span>
          <select 
            value={condition} 
            onChange={handleConditionChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="if_true">If True</option>
            <option value="if_false">If False</option>
            <option value="if_empty">If Empty</option>
            <option value="if_length">If Length</option>
          </select>
        </label>
        {(condition === 'if_length' || condition === 'if_true') && (
          <label className="flex flex-col gap-0.5">
            <span className="text-xs text-gray-500">Threshold:</span>
            <input 
              type="number" 
              value={threshold} 
              onChange={handleThresholdChange}
              className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        )}
      </div>
    </BaseNode>
  );
}
