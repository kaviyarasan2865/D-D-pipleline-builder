// llmNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputHandles={[
        { name: 'system', color: '#8b5cf6', top: '33%' },
        { name: 'prompt', color: '#f59e0b', top: '66%' }
      ]}
      outputHandles={[{ name: 'response', color: '#10b981' }]}
      className="llm-node"
    >
      <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '11px' }}>
        This is a LLM.
      </div>
    </BaseNode>
  );
}
