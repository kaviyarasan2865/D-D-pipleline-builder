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
      <div className="flex flex-col gap-1.5">
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Operation:</span>
          <select 
            value={operation} 
            onChange={handleOperationChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
            <option value="reverse">Reverse</option>
            <option value="trim">Trim</option>
          </select>
        </label>
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Field:</span>
          <input 
            type="text" 
            value={field} 
            onChange={handleFieldChange}
            placeholder="Field name (optional)"
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
    </BaseNode>
  );
}
