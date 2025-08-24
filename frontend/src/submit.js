// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import toast from 'react-hot-toast';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(
        (state) => ({
            nodes: state.nodes,
            edges: state.edges,
        }),
        shallow
    );

    const handleSubmit = async () => {
        try {
            console.log('Submitting pipeline with:', { nodes, edges });
            
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes: nodes,
                    edges: edges
                })
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error response:', errorText);
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            console.log('Response data:', data);
            
            // Create user-friendly alert
            const message = `
Pipeline Analysis Results:
• Number of Nodes: ${data.num_nodes}
• Number of Edges: ${data.num_edges}
• Is DAG: ${data.is_dag ? 'Yes' : 'No'}
            `.trim();

            if (data.is_dag) {
                toast.success(message);
            } else {
                toast.error(`Pipeline is not a DAG (contains cycles). ${message}`);
            }
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            
            // Provide more specific error messages
            let errorMessage = 'Error submitting pipeline. ';
            
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                errorMessage += 'Cannot connect to backend server. Please ensure the backend is running on http://localhost:8000';
            } else if (error.message.includes('HTTP error!')) {
                errorMessage += `Server error: ${error.message}`;
            } else {
                errorMessage += `Unexpected error: ${error.message}`;
            }
            
            toast.error(errorMessage);
        }
    };

    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0'
        }}>
            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    ':hover': {
                        backgroundColor: '#2563eb'
                    }
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
