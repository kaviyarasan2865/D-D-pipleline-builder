from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineRequest(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineRequest):
    try:
        nodes = pipeline.nodes
        edges = pipeline.edges
        
        # Count nodes and edges
        num_nodes = len(nodes)
        num_edges = len(edges)
        
        # Check if it's a DAG using NetworkX
        is_dag = True
        
        if num_edges > 0:
            # Create a directed graph
            G = nx.DiGraph()
            
            # Add nodes
            for node in nodes:
                G.add_node(node['id'])
            
            # Add edges
            for edge in edges:
                source = edge['source']
                target = edge['target']
                G.add_edge(source, target)
            
            # Check if the graph is acyclic (DAG)
            try:
                # Use is_directed_acyclic_graph to check for cycles
                is_dag = nx.is_directed_acyclic_graph(G)
            except Exception:
                # Fallback: try topological sort
                try:
                    list(nx.topological_sort(G))
                    is_dag = True
                except Exception:
                    is_dag = False
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': is_dag
        }
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error parsing pipeline: {str(e)}")
