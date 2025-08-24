// textNode.js
import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Extract variables from text ({{variableName}})
  useEffect(() => {
    const variableRegex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const extractedVariables = matches.map(match => match[1]);
    setVariables(extractedVariables);
  }, [currText]);

  // Calculate dynamic dimensions based on text length
  const calculateDimensions = () => {
    const baseWidth = 200;
    const baseHeight = 80;
    const minWidth = 200;
    const minHeight = 80;
    
    const textLength = currText.length;
    const lines = currText.split('\n').length;
    
    const width = Math.max(minWidth, baseWidth + Math.min(textLength * 2, 100));
    const height = Math.max(minHeight, baseHeight + (lines - 1) * 20 + variables.length * 15);
    
    return { width, height };
  };

  const { width, height } = calculateDimensions();

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      inputHandles={variables.map((variable, index) => ({
        name: variable,
        color: '#3b82f6',
        top: `${((index + 1) * 100) / (variables.length + 1)}%`
      }))}
      outputHandles={[{ name: 'output', color: '#10b981' }]}
      width={width}
      height={height}
      className="text-node"
    >
      <div className="flex flex-col gap-1.5">
        <label className="flex flex-col gap-0.5">
          <span className="text-xs text-gray-500">Text:</span>
          <textarea 
            value={currText} 
            onChange={handleTextChange}
            className="px-1.5 py-1 border border-gray-300 rounded text-xs resize-none min-h-[40px] font-mono focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter text with {{variables}}"
          />
        </label>
        {variables.length > 0 && (
          <div className="text-[10px] text-gray-500">
            Variables: {variables.join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
}
