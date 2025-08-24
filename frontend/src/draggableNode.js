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
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '100px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: color,
          justifyContent: 'center', 
          flexDirection: 'column',
          border: '2px solid transparent',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            borderColor: '#ffffff'
          }
        }} 
        draggable
      >
          <span style={{ 
            color: '#fff', 
            fontSize: '12px',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            {label}
          </span>
      </div>
    );
  };
  