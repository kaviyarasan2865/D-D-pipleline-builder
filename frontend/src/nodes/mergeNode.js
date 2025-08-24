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
      <div className="flex flex-col gap-1.5">
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Merge Type:</span>
          <select 
            value={mergeType} 
            onChange={handleMergeTypeChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="concat">Concatenate</option>
            <option value="join">Join</option>
            <option value="union">Union</option>
            <option value="intersection">Intersection</option>
          </select>
        </label>
        {mergeType === 'join' && (
          <label className="flex flex-col gap-0.5">
            <span className="text-xs text-gray-500">Separator:</span>
            <input 
              type="text" 
              value={separator} 
              onChange={handleSeparatorChange}
              className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </label>
        )}
      </div>
    </BaseNode>
  );
}
