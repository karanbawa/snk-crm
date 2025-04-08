// src/components/NoteTimeline.jsx
import React from 'react';
 
export default function NoteTimeline({ notes }) {
  return (
<div className="mt-4">
<h3 className="text-lg font-medium mb-2">Contact Notes</h3>
      {notes.map((note, idx) => (
<div key={idx} className="mb-4 p-3 border rounded bg-gray-100">
<p className="text-sm text-gray-600">🕒 {note.date}</p>
<p className="mt-1">{note.text}</p>
          {note.images && note.images.length > 0 && (
<div className="flex gap-2 mt-2">
              {note.images.map((src, i) => (
<img key={i} src={src} alt="note" className="w-24 h-24 object-cover rounded" />
              ))}
</div>
          )}
</div>
      ))}
</div>
  );
}