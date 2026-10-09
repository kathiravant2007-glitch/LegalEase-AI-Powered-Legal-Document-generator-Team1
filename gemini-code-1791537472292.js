import React, { useState } from 'react';

export default function DocumentForm({ onSubmit, loading }) {
  const [docType, setDocType] = useState('Non-Disclosure Agreement (NDA)');
  const [partyA, setPartyA] = useState('');
  const [partyB, setPartyB] = useState('');
  const [governingState, setGoverningState] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [specificTerms, setSpecificTerms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      documentType: docType,
      details: {
        disclosingParty: partyA,
        receivingParty: partyB,
        governingJurisdiction: governingState,
        effectiveDate,
        customTerms: specificTerms,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 space-y-4">
      <h2 className="text-xl font-semibold text-slate-800 border-b pb-2">1. Select & Configure Document</h2>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Document Type</label>
        <select 
          value={docType} 
          onChange={(e) => setDocType(e.target.value)}
          className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-slate-800"
        >
          <option>Non-Disclosure Agreement (NDA)</option>
          <option>Independent Contractor Agreement</option>
          <option>Software Service Level Agreement (SLA)</option>
          <option>Employment Offer Letter</option>
          <option>Residential Lease Agreement</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Party A (e.g., Disclosing / Employer)</label>
          <input 
            type="text" 
            required 
            value={partyA} 
            onChange={(e) => setPartyA(e.target.value)}
            placeholder="Acme Corp LLC" 
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Party B (e.g., Receiving / Contractor)</label>
          <input 
            type="text" 
            required 
            value={partyB} 
            onChange={(e) => setPartyB(e.target.value)}
            placeholder="John Doe" 
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Governing State / Jurisdiction</label>
          <input 
            type="text" 
            required 
            value={governingState} 
            onChange={(e) => setGoverningState(e.target.value)}
            placeholder="California, USA" 
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Effective Date</label>
          <input 
            type="date" 
            required 
            value={effectiveDate} 
            onChange={(e) => setEffectiveDate(e.target.value)}
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-800"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Key Clauses & Custom Requirements</label>
        <textarea 
          rows={4}
          value={specificTerms}
          onChange={(e) => setSpecificTerms(e.target.value)}
          placeholder="Include 2-year non-compete, 30-day termination notice, and standard IP assignment..."
          className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-800"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg shadow transition disabled:opacity-50"
      >
        {loading ? 'Generating Legal Contract...' : 'Generate Agreement'}
      </button>
    </form>
  );
}