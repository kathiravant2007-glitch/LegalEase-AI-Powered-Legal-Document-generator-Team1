import React from 'react';
import { Download, Copy, FileText } from 'lucide-react';

export default function DocumentPreview({ documentText }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(documentText);
    alert('Copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex flex-col h-full">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          <FileText className="w-5 h-5 text-slate-600" />
          Generated Document
        </h2>
        {documentText && (
          <div className="flex gap-2">
            <button 
              onClick={handleCopy}
              className="px-3 py-1.5 text-sm bg-slate-100 hover:bg-slate-200 border text-slate-700 rounded-md flex items-center gap-1"
            >
              <Copy className="w-4 h-4" /> Copy
            </button>
            <button 
              onClick={handlePrint}
              className="px-3 py-1.5 text-sm bg-slate-900 hover:bg-slate-800 text-white rounded-md flex items-center gap-1"
            >
              <Download className="w-4 h-4" /> Print / Export
            </button>
          </div>
        )}
      </div>

      <div className="flex-grow bg-slate-50 border rounded-lg p-6 overflow-y-auto max-h-[600px] font-mono text-sm leading-relaxed text-slate-800 whitespace-pre-wrap">
        {documentText ? (
          documentText
        ) : (
          <div className="text-slate-400 text-center py-20">
            Fill out the form on the left to generate your custom legal agreement.
          </div>
        )}
      </div>
    </div>
  );
}