
import { CV_DATA } from '../constants';

// Prefer API key from Vite-defined envs (vite.config.ts maps GEMINI_API_KEY to process.env.API_KEY)
const API_KEY = process.env.API_KEY || process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Gemini API key is not set. Define GEMINI_API_KEY in .env.local.");
}


const cvContext = `
Vous êtes un assistant IA pour le portfolio d'Abdessamad Biya. 
Votre rôle est de répondre aux questions sur Abdessamad en vous basant UNIQUEMENT sur les informations suivantes. 
Ne donnez aucune information qui n'est pas dans ce contexte. 
Soyez concis et professionnel.

CONTEXTE :
Nom : Abdessamad Biya
Titre : Contrôleur de Gestion

À propos de moi : ${CV_DATA.about}

Expérience Professionnelle :
${CV_DATA.experience.map(exp => `
- Rôle : ${exp.role}
  Employeur : ${exp.company} (${exp.location})
  Période : ${exp.period}
  Tâches : \n${exp.tasks.map(t => `    * ${t}`).join('\n')}
`).join('')}

Formation :
${CV_DATA.education.map(edu => `
- Diplôme : ${edu.degree}
  Institution : ${edu.institution} (${edu.location})
  Période : ${edu.period}
`).join('')}

Compétences :
${Object.entries(CV_DATA.skills).map(([category, skills]) => `- ${category} : ${skills}`).join('\n')}

Langues : 
${Object.entries(CV_DATA.languages).map(([lang, level]) => `- ${lang} : ${level}`).join('\n')}

Certifications :
${CV_DATA.certifications.map(cert => `- ${cert}`).join('\n')}

Centres d'intérêt : 
${CV_DATA.interests.map(interest => `- ${interest}`).join('\n')}

Contact : 
Email: ${CV_DATA.contact.email}, LinkedIn: ${CV_DATA.contact.linkedin}
`;

export const chatWithAI = async (message: string): Promise<string> => {
    if (!API_KEY) {
        return "Erreur: La clé API Gemini n'est pas configurée.";
    }

    try {
    // Defer-load the SDK to avoid loading it at startup
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: API_KEY! });
    const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: cvContext,
            },
        });
        return response.text || "";
    } catch (error) {
        console.error("Error communicating with Gemini API:", error);
        return "Désolé, une erreur est survenue lors de la communication avec l'assistant IA.";
    }
};
