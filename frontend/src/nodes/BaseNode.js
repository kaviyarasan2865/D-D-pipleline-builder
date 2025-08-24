// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data, 
  title, 
  children, 
  inputHandles = [], 
  outputHandles = [], 
  width = 200, 
  height = 80,
  className = ''
}) => {
  return (
    <div 
      className={`base-node ${className}`}
      style={{
        width: width,
        height: height,
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '12px',
        position: 'relative'
      }}
    >
      {/* Input Handles */}
      {inputHandles.map((handle, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id || `${id}-${handle.name}`}
          style={{
            top: handle.top || `${((index + 1) * 100) / (inputHandles.length + 1)}%`,
            background: handle.color || '#3b82f6'
          }}
        />
      ))}

      {/* Title */}
      <div style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '8px',
        textAlign: 'center'
      }}>
        {title}
      </div>

      {/* Content */}
      <div style={{ fontSize: '12px' }}>
        {children}
      </div>

      {/* Output Handles */}
      {outputHandles.map((handle, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id || `${id}-${handle.name}`}
          style={{
            top: handle.top || `${((index + 1) * 100) / (outputHandles.length + 1)}%`,
            background: handle.color || '#10b981'
          }}
        />
      ))}
    </div>
  );
};
