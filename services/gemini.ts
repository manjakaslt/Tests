
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || "";

export const generateBrandStrategy = async (brandName: string, industry: string) => {
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Generate a luxury digital marketing strategy for a brand named "${brandName}" in the "${industry}" industry. The strategy should feel high-end, exclusive, and performance-driven. Provide a detailed JSON response.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          industry: { type: Type.STRING },
          targetAudience: { type: Type.STRING },
          positioningStatement: { type: Type.STRING },
          keyTactics: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
          visualIdentityNotes: { type: Type.STRING }
        },
        required: ["name", "industry", "targetAudience", "positioningStatement", "keyTactics", "visualIdentityNotes"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};
