import React, { useState, useEffect } from 'react';
import CustomerDetail from './CustomerDetail';
import { data } from '../data';
 
export default function CustomerTable() {
  const [selected, setSelected] = useState(null);
 
  return (
<div>
<table className="w-full table-auto border">
<thead className="bg-gray-200">
<tr>
<th>Country</th>
<th>Region</th>
<th>City</th>
<th>Contact</th>
<th>Status</th>
<th>Priority</th>
</tr>
</thead>
<tbody>
          {data.map((c, idx) => (
<tr key={idx} className="cursor-pointer hover:bg-gray-100" onClick={() => setSelected(c)}>
<td>{c.country}</td>
<td>{c.region}</td>
<td>{c.city}</td>
<td>{c.contact}</td>
<td>{c.status}</td>
<td>{c.priority}</td>
</tr>
          ))}
</tbody>
</table>
      {selected && <CustomerDetail customer={selected} />}
</div>
  );
}