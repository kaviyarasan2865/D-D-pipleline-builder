// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-5 bg-white border-b border-slate-200 shadow-sm">
            <h2 className="m-0 mb-5 text-gray-800 text-xl font-semibold">
              VectorShift Pipeline Builder
            </h2>
            <div className="flex flex-wrap gap-2.5 justify-center">
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
