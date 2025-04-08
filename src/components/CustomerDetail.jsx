// src/components/CustomerDetail.jsx
import React from 'react';
import NoteTimeline from './NoteTimeline';
 
export default function CustomerDetail({ customer }) {
  return (
<div className="mt-6 p-4 border rounded bg-white">
<h2 className="text-xl font-semibold">{customer.contact} - {customer.country}</h2>
<p><strong>Website:</strong> {customer.website}</p>
<p><strong>Requirement:</strong> {customer.requirement}</p>
<p><strong>Remarks:</strong> {customer.remarks}</p>
<p><strong>Returning Customer:</strong> {customer.returning ? 'Yes' : 'No'}</p>
<NoteTimeline notes={customer.notes} />
</div>
  );
}