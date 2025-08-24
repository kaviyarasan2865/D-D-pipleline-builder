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
      <div className="flex flex-col gap-1.5">
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Condition:</span>
          <select 
            value={condition} 
            onChange={handleConditionChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
          </select>
        </label>
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Value:</span>
          <input 
            type="text" 
            value={value} 
            onChange={handleValueChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
    </BaseNode>
  );
}
