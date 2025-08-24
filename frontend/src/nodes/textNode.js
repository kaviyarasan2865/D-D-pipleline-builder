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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '11px', color: '#6b7280' }}>Text:</span>
          <textarea 
            value={currText} 
            onChange={handleTextChange}
            style={{
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '11px',
              resize: 'none',
              minHeight: '40px',
              fontFamily: 'monospace'
            }}
            placeholder="Enter text with {{variables}}"
          />
        </label>
        {variables.length > 0 && (
          <div style={{ fontSize: '10px', color: '#6b7280' }}>
            Variables: {variables.join(', ')}
          </div>
        )}
      </div>
    </BaseNode>
  );
}
