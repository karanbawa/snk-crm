// src/components/WorldMap.jsx
import React from 'react';
 
const countries = ['Ireland', 'UK', 'Netherlands', 'Ghana'];
 
export default function WorldMap() {
  return (
<div className="mt-6">
<h3 className="text-lg font-semibold mb-2">🌍 Countries We Export To</h3>
<div className="flex gap-2 flex-wrap">
        {countries.map((c, i) => (
<span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            {c}
</span>
        ))}
</div>
</div>
  );
}