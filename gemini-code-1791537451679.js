import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT, buildPrompt } from '../prompts/legalTemplates.js';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateDocument = async (req, res) => {
  try {
    const { documentType, details } = req.body;

    if (!documentType || !details) {
      return res.status(400).json({ error: 'Missing documentType or details.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: buildPrompt(documentType, details),
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2, // Low temperature for high consistency and legal precision
      },
    });

    return res.status(200).json({ document: response.text });
  } catch (error) {
    console.error('Error generating legal document:', error);
    return res.status(500).json({ 
      error: 'Failed to generate document.',
      message: error.message 
    });
  }
};