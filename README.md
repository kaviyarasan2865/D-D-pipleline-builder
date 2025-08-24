# VectorShift Frontend Technical Assessment

This project implements a drag-and-drop pipeline builder with node abstraction, enhanced styling, dynamic text nodes, and backend integration.

## Features Implemented

### Part 1: Node Abstraction ✅
- Created a `BaseNode` component that provides common functionality for all nodes
- Refactored existing nodes (Input, Output, LLM, Text) to use the base abstraction
- Created 5 new nodes to demonstrate the abstraction:
  - **Filter Node**: Filters data based on conditions
  - **Transform Node**: Transforms data using various operations
  - **Merge Node**: Merges multiple data streams
  - **Split Node**: Splits data into multiple outputs
  - **Condition Node**: Routes data based on conditions

### Part 2: Styling ✅
- Modern, unified design with consistent color scheme
- Improved typography and spacing
- Enhanced visual feedback for interactions
- Professional-looking UI components
- Custom scrollbars and hover effects

### Part 3: Text Node Logic ✅
- Dynamic sizing based on text content length
- Variable detection using `{{variableName}}` syntax
- Automatic handle creation for detected variables
- Real-time updates as user types

### Part 4: Backend Integration ✅
- Frontend sends pipeline data to backend endpoint
- Backend calculates node count, edge count, and DAG validation
- User-friendly alert displays results
- CORS configuration for local development

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## Usage

1. **Building Pipelines**: Drag nodes from the toolbar onto the canvas
2. **Connecting Nodes**: Click and drag from output handles to input handles
3. **Text Variables**: Use `{{variableName}}` syntax in text nodes to create input handles
4. **Submitting**: Click the "Submit Pipeline" button to analyze your pipeline

## Node Types

### Original Nodes
- **Input**: Data input with configurable name and type
- **Output**: Data output with configurable name and type
- **LLM**: Language model with system and prompt inputs
- **Text**: Text processing with variable support

### New Nodes (Demonstrating Abstraction)
- **Filter**: Filters data based on conditions (equals, contains, etc.)
- **Transform**: Transforms data (uppercase, lowercase, etc.)
- **Merge**: Merges multiple data streams (concatenate, join, etc.)
- **Split**: Splits data into multiple outputs
- **Condition**: Routes data based on conditions

## Technical Details

### Node Abstraction
The `BaseNode` component provides:
- Consistent styling and layout
- Configurable input/output handles
- Dynamic sizing support
- Common event handling

### Backend API
- **POST** `/pipelines/parse`: Analyzes pipeline structure
- Returns: `{num_nodes: int, num_edges: int, is_dag: bool}`

### DAG Validation
Uses NetworkX library to detect cycles in the pipeline graph.

## Architecture

- **Frontend**: React with ReactFlow for graph visualization
- **State Management**: Zustand for global state
- **Backend**: FastAPI with NetworkX for graph analysis
- **Styling**: Inline styles with consistent design system

## Dependencies

### Frontend
- React 18.2.0
- ReactFlow 11.8.3
- Zustand for state management

### Backend
- FastAPI 0.104.1
- NetworkX 3.2.1
- Uvicorn 0.24.0
- Pydantic 2.5.0
