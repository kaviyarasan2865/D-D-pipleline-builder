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
      className={`base-node ${className} w-[${width}px] h-[${height}px] border-2 border-slate-200 rounded-lg bg-white shadow-md p-3 relative`}
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
      <div className="text-sm font-semibold text-gray-800 mb-2 text-center">
        {title}
      </div>

      {/* Content */}
      <div className="text-xs">
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
