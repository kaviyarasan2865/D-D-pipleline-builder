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
      <div className="flex flex-col gap-1.5">
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Split Type:</span>
          <select 
            value={splitType} 
            onChange={handleSplitTypeChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="character">Character</option>
            <option value="word">Word</option>
            <option value="line">Line</option>
            <option value="regex">Regex</option>
          </select>
        </label>
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Split Value:</span>
          <input 
            type="text" 
            value={splitValue} 
            onChange={handleSplitValueChange}
            placeholder={splitType === 'character' ? 'e.g., ,' : splitType === 'word' ? 'e.g., space' : 'e.g., \\n'}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
    </BaseNode>
  );
}
