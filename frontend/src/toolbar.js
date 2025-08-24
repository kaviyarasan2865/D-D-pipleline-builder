// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ 
              margin: '0 0 20px 0', 
              color: '#1f2937', 
              fontSize: '20px',
              fontWeight: '600'
            }}>
              VectorShift Pipeline Builder
            </h2>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px',
              justifyContent: 'center'
            }}>
                <DraggableNode type='customInput' label='Input' color='#3b82f6' />
                <DraggableNode type='llm' label='LLM' color='#8b5cf6' />
                <DraggableNode type='customOutput' label='Output' color='#10b981' />
                <DraggableNode type='text' label='Text' color='#f59e0b' />
                <DraggableNode type='filter' label='Filter' color='#ef4444' />
                <DraggableNode type='transform' label='Transform' color='#06b6d4' />
                <DraggableNode type='merge' label='Merge' color='#84cc16' />
                <DraggableNode type='split' label='Split' color='#f97316' />
                <DraggableNode type='condition' label='Condition' color='#a855f7' />
            </div>
        </div>
    );
};
