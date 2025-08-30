import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HistoryItem, HistoryItemType } from '../types';
import { WELCOME_MESSAGES, CV_DATA, PROFILE_IMAGE_BASE64 } from '../constants';
import { chatWithAI } from '../services/geminiService';

const Terminal: React.FC = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(true);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const showWelcomeMessages = useCallback(() => {
        let delay = 0;
        WELCOME_MESSAGES.forEach((msg, index) => {
            setTimeout(() => {
                setHistory(prev => [...prev, { type: HistoryItemType.SYSTEM, text: msg }]);
                if (index === WELCOME_MESSAGES.length - 1) {
                    setIsProcessing(false);
                }
            }, delay);
            delay += 100 + Math.random() * 100;
        });
    }, []);

    useEffect(() => {
        showWelcomeMessages();
    }, [showWelcomeMessages]);

    const processCommand = async (command: string) => {
        const newHistory: HistoryItem[] = [...history, { type: HistoryItemType.COMMAND, text: command }];
        setHistory(newHistory);
        setIsProcessing(true);

        const [cmd, ...args] = command.toLowerCase().split(' ').filter(Boolean);

        let response: HistoryItem | null = null;

        switch (cmd) {
            case 'help':
                response = { type: HistoryItemType.RESPONSE, text: (
                    <div>
                        <p>Commandes disponibles :</p>
                        <ul className="list-disc list-inside ml-4">
                            <li><span className="text-yellow-400">barca</span> - Ouvre la page design FC Barcelona.</li>
                            <li><span className="text-yellow-400">about</span> - Affiche une brève introduction.</li>
                            <li><span className="text-yellow-400">skills</span> - Liste mes compétences techniques et financières.</li>
                            <li><span className="text-yellow-400">experience</span> - Détaille mon expérience professionnelle.</li>
                            <li><span className="text-yellow-400">education</span> - Affiche mon parcours académique.</li>
                            <li><span className="text-yellow-400">contact</span> - Affiche mes informations de contact.</li>
                            <li><span className="text-yellow-400">all</span> - Affiche le CV complet.</li>
                            <li><span className="text-yellow-400">askai [question]</span> - Pose une question à mon assistant IA.</li>
                            <li><span className="text-yellow-400">clear</span> - Efface l'historique du terminal.</li>
                            <li><span className="text-yellow-400">photo</span> - Affiche ma photo de profil.</li>
                        </ul>
                    </div>
                )};
                break;

            case 'about':
                response = { type: HistoryItemType.RESPONSE, text: CV_DATA.about };
                break;
            
            case 'photo':
                response = { type: HistoryItemType.RESPONSE, text: (
                    <img src={PROFILE_IMAGE_BASE64} alt="Abdessamad Biya" className="w-48 h-48 object-cover border-2 border-green-400 mt-2" />
                )};
                break;

            case 'skills':
                response = { type: HistoryItemType.RESPONSE, text: (
                    <div>
                        {Object.entries(CV_DATA.skills).map(([category, skills]) => (
                            <p key={category}><span className="text-cyan-400">{category}:</span> {skills}</p>
                        ))}
                    </div>
                )};
                break;

            case 'experience':
                response = { type: HistoryItemType.RESPONSE, text: (
                    <div>
                        {CV_DATA.experience.map((exp, i) => (
                            <div key={i} className="mb-4">
                                <p className="text-cyan-400">{exp.role} - {exp.company}</p>
                                <p className="text-sm text-gray-400">{exp.location} | {exp.period}</p>
                                <ul className="list-disc list-inside ml-4">
                                    {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                )};
                break;

            case 'education':
                response = { type: HistoryItemType.RESPONSE, text: (
                    <div>
                        {CV_DATA.education.map((edu, i) => (
                            <div key={i} className="mb-2">
                                <p className="text-cyan-400">{edu.degree}</p>
                                <p>{edu.institution} - {edu.location} ({edu.period})</p>
                            </div>
                        ))}
                    </div>
                )};
                break;
            
            case 'contact':
                response = { type: HistoryItemType.RESPONSE, text: (
                    <div>
                        <p><span className="text-cyan-400">Email:</span> <a href={`mailto:${CV_DATA.contact.email}`} className="underline hover:text-yellow-400">{CV_DATA.contact.email}</a></p>
                        <p><span className="text-cyan-400">LinkedIn:</span> <a href={CV_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">{CV_DATA.contact.linkedin}</a></p>
                        <p><span className="text-cyan-400">Téléphone:</span> {CV_DATA.contact.phone}</p>
                        <p><span className="text-cyan-400">Localisation:</span> {CV_DATA.contact.location}</p>
                    </div>
                )};
                break;

            case 'all':
                 response = { type: HistoryItemType.RESPONSE, text: (
                    <div>
                        <div className="mb-4">
                            <img src={PROFILE_IMAGE_BASE64} alt="Abdessamad Biya" className="w-32 h-32 object-cover border-2 border-green-400" />
                        </div>
                        <h3 className='text-xl text-yellow-400 underline'>À PROPOS</h3>
                        <p>{CV_DATA.about}</p>
                        <h3 className='text-xl text-yellow-400 underline mt-4'>EXPÉRIENCE</h3>
                        {CV_DATA.experience.map((exp, i) => (
                            <div key={i} className="mb-4">
                                <p className="text-cyan-400">{exp.role} - {exp.company}</p>
                                <p className="text-sm text-gray-400">{exp.location} | {exp.period}</p>
                                <ul className="list-disc list-inside ml-4">
                                    {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
                                </ul>
                            </div>
                        ))}
                        <h3 className='text-xl text-yellow-400 underline mt-4'>FORMATION</h3>
                        {CV_DATA.education.map((edu, i) => (
                            <div key={i} className="mb-2">
                                <p className="text-cyan-400">{edu.degree}</p>
                                <p>{edu.institution} - {edu.location} ({edu.period})</p>
                            </div>
                        ))}
                        <h3 className='text-xl text-yellow-400 underline mt-4'>COMPÉTENCES</h3>
                        {Object.entries(CV_DATA.skills).map(([category, skills]) => (
                            <p key={category}><span className="text-cyan-400">{category}:</span> {skills}</p>
                        ))}
                    </div>
                 ) };
                break;

            case 'clear':
                setHistory([]);
                setIsProcessing(false);
                return;
            
            case 'askai':
                const question = args.join(' ');
                if (!question) {
                     response = { type: HistoryItemType.ERROR, text: "Veuillez poser une question après 'askai'." };
                } else {
                    const aiResponseText = await chatWithAI(question);
                    response = { type: HistoryItemType.RESPONSE, text: (
                        <div>
                            <p className="text-purple-400">[Assistant IA]:</p>
                            <p>{aiResponseText}</p>
                        </div>
                    )};
                }
                break;

            default:
                if (cmd === 'barca') {
                    const base = (import.meta as any).env?.BASE_URL || '/';
                    window.location.href = `${base}barca.html`;
                    return;
                }
                response = { type: HistoryItemType.ERROR, text: `Commande non reconnue: ${cmd}. Tapez 'help' pour la liste des commandes.` };
                break;
        }

        if (response) {
            setHistory(prev => [...prev, response]);
        }
        setIsProcessing(false);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isProcessing) {
            processCommand(input.trim());
            setInput('');
        }
    };

    const renderHistoryItem = (item: HistoryItem, index: number) => {
        switch (item.type) {
            case HistoryItemType.COMMAND:
                return <p key={index}><span className="text-yellow-400">visitor@portfolio:~$</span> {item.text}</p>;
            case HistoryItemType.RESPONSE:
                return <div key={index} className="whitespace-pre-wrap">{item.text}</div>;
            case HistoryItemType.ERROR:
                return <p key={index} className="text-red-500">{item.text}</p>;
            case HistoryItemType.SYSTEM:
                return <p key={index} className="text-gray-400">{item.text}</p>;
            default:
                return null;
        }
    };

    return (
        <div className="h-screen w-full p-4 flex flex-col" onClick={() => document.getElementById('terminal-input')?.focus()}>
            <div className="flex-grow overflow-y-auto pr-2">
                {history.map(renderHistoryItem)}
                <div ref={terminalEndRef} />
            </div>
            <form onSubmit={handleFormSubmit} className="flex items-center mt-2">
                <label htmlFor="terminal-input" className="text-yellow-400">visitor@portfolio:~$</label>
                <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isProcessing}
                    className="flex-1 bg-transparent border-none outline-none ml-2"
                    autoFocus
                    autoComplete="off"
                />
                {!isProcessing && <div className="blinking-cursor w-2 h-5 bg-green-400"></div>}
            </form>
        </div>
    );
};

export default Terminal;