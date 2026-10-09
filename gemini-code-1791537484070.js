import React, { useState } from 'react';
import DocumentForm from './components/DocumentForm';
import DocumentPreview from './components/DocumentPreview';

export default function App() {
  const [documentText, setDocumentText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/documents/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.document) {
        setDocumentText(data.document);
      } else {
        alert(data.error || 'Failed to generate document');
      }
    } catch (err) {
      console.error(err);
      alert('Network error connecting to backend');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-slate-900 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">LegalEase AI</h1>
            <p className="text-xs text-slate-400">Automated, AI-Powered Draft Legal Agreements</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DocumentForm onSubmit={handleGenerate} loading={loading} />
        <DocumentPreview documentText={documentText} />
      </main>
    </div>
  );
}