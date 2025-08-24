// draggableNode.js

export const DraggableNode = ({ type, label, color = '#1C2536' }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} cursor-grab min-w-[100px] h-[60px] flex items-center rounded-lg justify-center flex-col border-2 border-transparent transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:border-white`}
        style={{ backgroundColor: color }}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          <span className="text-white text-xs font-medium text-center">
            {label}
          </span>
      </div>
    );
  };
  