// src/App.jsx
import React from 'react';
import CustomerTable from './components/CustomerTable';
import WorldMap from './components/WorldMap';
 
export default function App() {
  return (
<div className="min-h-screen bg-gray-50 p-4">
<h1 className="text-2xl font-bold mb-4">SNK Surfaces CRM Preview</h1>
<CustomerTable />
<div className="mt-8">
<WorldMap />
</div>
</div>
  );
}