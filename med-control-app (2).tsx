import React, { useState, useEffect } from 'react';
import { Calendar, Plus, User, Heart, Award, Bell, Stethoscope, FlaskConical, Pill, CheckCircle, Target } from 'lucide-react';

// Logos profesionales integrados
const Logo32 = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient32" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="14" fill="url(#bgGradient32)"/>
    <rect x="13" y="6" width="6" height="20" rx="3" fill="white"/>
    <rect x="6" y="13" width="20" height="6" rx="3" fill="white"/>
    <circle cx="16" cy="16" r="1" fill="rgba(255,255,255,0.8)"/>
  </svg>
);

const Logo48 = () => (
  <svg width="48" height="48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient48" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="pillGradient48" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="glow48" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="32" cy="32" r="28" fill="url(#bgGradient48)"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <g filter="url(#glow48)">
      <rect x="26" y="12" width="12" height="40" rx="6" fill="white"/>
      <rect x="12" y="26" width="40" height="12" rx="6" fill="white"/>
    </g>
    <g transform="translate(44, 18) rotate(25)">
      <ellipse cx="0" cy="0" rx="6" ry="3" fill="url(#pillGradient48)" opacity="0.8"/>
    </g>
    <g transform="translate(20, 46) rotate(-15)">
      <ellipse cx="0" cy="0" rx="5" ry="2.5" fill="url(#pillGradient48)" opacity="0.6"/>
    </g>
    <circle cx="32" cy="32" r="2" fill="rgba(255,255,255,0.6)"/>
  </svg>
);

const Logo64 = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient64" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="pillGradient64" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="dropshadow64" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.15"/>
      </filter>
      <filter id="glow64" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="32" cy="32" r="28" fill="url(#bgGradient64)" filter="url(#dropshadow64)"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <g filter="url(#glow64)">
      <rect x="26" y="12" width="12" height="40" rx="6" fill="white"/>
      <rect x="12" y="26" width="40" height="12" rx="6" fill="white"/>
    </g>
    <g transform="translate(44, 18) rotate(25)">
      <ellipse cx="0" cy="0" rx="6" ry="3" fill="url(#pillGradient64)" opacity="0.8"/>
      <ellipse cx="0" cy="0" rx="6" ry="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
    </g>
    <g transform="translate(20, 46) rotate(-15)">
      <ellipse cx="0" cy="0" rx="5" ry="2.5" fill="url(#pillGradient64)" opacity="0.6"/>
    </g>
    <circle cx="32" cy="32" r="2" fill="rgba(255,255,255,0.6)"/>
    <circle cx="22" cy="22" r="1" fill="rgba(255,255,255,0.4)">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="42" cy="42" r="1" fill="rgba(255,255,255,0.4)">
      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const LogoHorizontal = ({ width = 280, height = 80 }) => (
  <svg width={width} height={height} viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradientH" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="pillGradientH" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="dropshadowH" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#000000" floodOpacity="0.2"/>
      </filter>
      <filter id="glowH" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="textGlowH" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="60" cy="60" r="50" fill="url(#bgGradientH)" filter="url(#dropshadowH)"/>
    <g filter="url(#glowH)">
      <rect x="52" y="30" width="16" height="60" rx="8" fill="white"/>
      <rect x="30" y="52" width="60" height="16" rx="8" fill="white"/>
    </g>
    <g transform="translate(78, 38) rotate(25)">
      <ellipse cx="0" cy="0" rx="10" ry="4" fill="url(#pillGradientH)" opacity="0.9"/>
    </g>
    <g transform="translate(42, 82) rotate(-15)">
      <ellipse cx="0" cy="0" rx="8" ry="3" fill="url(#pillGradientH)" opacity="0.7"/>
    </g>
    <circle cx="60" cy="60" r="2" fill="rgba(255,255,255,0.7)"/>
    <text x="140" y="55" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#1e40af" filter="url(#textGlowH)">MediControl</text>
    <text x="140" y="78" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="500" fill="#059669">Control Inteligente de Medicamentos</text>
    <circle cx="120" cy="25" r="2" fill="rgba(37,99,235,0.4)">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="360" cy="35" r="1.5" fill="rgba(16,185,129,0.6)">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const MediControlApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [patient, setPatient] = useState({
    name: "María González",
    age: 45,
    id: "12345678",
    phone: "555-0123",
    condition: "Hipertensión"
  });
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Losartán",
      dose: "50mg",
      frequency: "Cada 12 horas",
      duration: 30,
      startDate: new Date().toISOString().split('T')[0],
      nextDose: "08:00",
      taken: false,
      refillDate: "2025-07-05"
    }
  ]);
  const [adherenceStreak, setAdherenceStreak] = useState(7);
  const [showAddMed, setShowAddMed] = useState(false);
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const [showSplash, setShowSplash] = useState(true);

  // Componente Splash Screen con logo profesional
  const SplashScreen = ({ onComplete }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }, [onComplete]);

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-50">
        <div className="text-center text-white">
          <div className="mb-8 flex justify-center animate-pulse">
            <Logo64 />
          </div>
          <div className="mb-6">
            <LogoHorizontal width={320} height={90} />
          </div>
          <div className="mt-8">
            <div className="w-48 h-2 bg-white bg-opacity-30 rounded mx-auto">
              <div className="h-full bg-white rounded animate-pulse" style={{
                animation: 'loading 3s ease-in-out'
              }}></div>
            </div>
            <p className="mt-4 text-blue-100 text-lg">Cargando aplicación...</p>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            © 2025 Juan Sebastian Zapien Lechuga<br/>
            Todos los derechos reservados
          </div>
        </div>
        <style jsx>{`
          @keyframes loading {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    );
  };

  // Logo simple como componente (mantenido como fallback)
  const SimpleLogo = ({ size = 32 }) => (
    <div 
      className="rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold"
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      M
    </div>
  );

  // Mensajes motivacionales
  const motivationalMessages = [
    "¡Tu salud es tu mayor tesoro! 💎",
    "Cada pastilla tomada es un paso hacia tu bienestar 🌟",
    "¡Eres más fuerte de lo que crees! 💪",
    "Tu constancia marca la diferencia 🎯",
    "¡Hoy es un gran día para cuidarte! ☀️",
    "Tu familia te necesita saludable ❤️",
    "¡Vas por buen camino, sigue así! 🚀",
    "Cuidarte es el mejor regalo que te puedes dar 🎁"
  ];

  const [dailyMessage] = useState(motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]);

  useEffect(() => {
    // PWA Setup con logos integrados
    const setupPWA = () => {
      // Crear manifest dinámicamente
      const manifest = {
        name: "MediControl - Control de Medicamentos",
        short_name: "MediControl",
        description: "Aplicación para el control inteligente de medicamentos y seguimiento médico",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2563eb",
        icons: [
          {
            src: "data:image/svg+xml;base64," + btoa(`<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGradient192" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="pillGradient192" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
                </linearGradient>
              </defs>
              <circle cx="96" cy="96" r="86" fill="url(#bgGradient192)"/>
              <circle cx="96" cy="96" r="72" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
              <rect x="81" y="48" width="30" height="96" rx="15" fill="white"/>
              <rect x="48" y="81" width="96" height="30" rx="15" fill="white"/>
              <g transform="translate(124, 58) rotate(25)">
                <ellipse cx="0" cy="0" rx="16" ry="7" fill="url(#pillGradient192)" opacity="0.9"/>
              </g>
              <g transform="translate(68, 134) rotate(-15)">
                <ellipse cx="0" cy="0" rx="14" ry="6" fill="url(#pillGradient192)" opacity="0.7"/>
              </g>
              <circle cx="96" cy="96" r="4" fill="rgba(255,255,255,0.7)"/>
            </svg>`),
            sizes: "192x192",
            type: "image/svg+xml"
          },
          {
            src: "data:image/svg+xml;base64," + btoa(`<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGradient512" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="pillGradient512" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
                </linearGradient>
              </defs>
              <circle cx="256" cy="256" r="240" fill="url(#bgGradient512)"/>
              <circle cx="256" cy="256" r="200" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
              <rect x="216" y="128" width="80" height="256" rx="40" fill="white"/>
              <rect x="128" y="216" width="256" height="80" rx="40" fill="white"/>
              <g transform="translate(340, 150) rotate(25)">
                <ellipse cx="0" cy="0" rx="45" ry="20" fill="url(#pillGradient512)" opacity="0.9"/>
              </g>
              <g transform="translate(172, 362) rotate(-15)">
                <ellipse cx="0" cy="0" rx="38" ry="16" fill="url(#pillGradient512)" opacity="0.8"/>
              </g>
              <circle cx="256" cy="256" r="12" fill="rgba(255,255,255,0.8)"/>
            </svg>`),
            sizes: "512x512",
            type: "image/svg+xml"
          }
        ],
        categories: ["health", "medical", "lifestyle"],
        lang: "es"
      };

      const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
      const manifestURL = URL.createObjectURL(manifestBlob);
      const link = document.createElement('link');
      link.rel = 'manifest';
      link.href = manifestURL;
      document.head.appendChild(link);

      // Favicon con logo
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.href = "data:image/svg+xml;base64," + btoa(`<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGradient32" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="14" fill="url(#bgGradient32)"/>
        <rect x="13" y="6" width="6" height="20" rx="3" fill="white"/>
        <rect x="6" y="13" width="20" height="6" rx="3" fill="white"/>
        <circle cx="16" cy="16" r="1" fill="rgba(255,255,255,0.8)"/>
      </svg>`);
      document.head.appendChild(favicon);

      // Apple Touch Icon
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = favicon.href;
      document.head.appendChild(appleTouchIcon);

      // Theme color
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#2563eb';
      document.head.appendChild(themeColor);
    };

    setupPWA();

    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    MEDICONTROL v1.0.0                       ║
║                                                              ║
║     Copyright © 2025 Juan Sebastian Zapien Lechuga          ║
║                Todos los derechos reservados                ║
╚══════════════════════════════════════════════════════════════╝
    `);
  }, []);

  const showNotification = (message, type = 'success') => {
    const newNotification = {
      id: Date.now(),
      message,
      type
    };
    setNotifications(prev => [...prev, newNotification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 3000);
  };

  const NotificationContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`px-4 py-3 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );

  const requestNotificationPermission = () => {
    if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotification('¡Notificaciones activadas! 🔔');
        }
      });
    } else {
      showNotification('¡Notificaciones activadas! 🔔');
    }
  };

  const PatientForm = () => {
    const [formData, setFormData] = useState({
      name: patient?.name || '',
      age: patient?.age || '',
      id: patient?.id || '',
      phone: patient?.phone || '',
      condition: patient?.condition || '',
      allergies: patient?.allergies || ''
    });

    const handleSave = () => {
      if (formData.name && formData.age && formData.id) {
        setPatient(formData);
        setShowPatientForm(false);
        showNotification('Datos del paciente guardados ✅');
      } else {
        showNotification('Por favor completa los campos obligatorios');
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-blue-800">Datos del Paciente</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="number"
              placeholder="Edad"
              className="w-full p-3 border rounded-lg"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
            <input
              type="text"
              placeholder="Número de identificación"
              className="w-full p-3 border rounded-lg"
              value={formData.id}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full p-3 border rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <input
              type="text"
              placeholder="Condición médica principal"
              className="w-full p-3 border rounded-lg"
              value={formData.condition}
              onChange={(e) => setFormData({...formData, condition: e.target.value})}
            />
            <textarea
              placeholder="Alergias (opcional)"
              className="w-full p-3 border rounded-lg h-20"
              value={formData.allergies}
              onChange={(e) => setFormData({...formData, allergies: e.target.value})}
            />
            <div className="flex gap-2">
              <button 
                onClick={handleSave}
                className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Guardar
              </button>
              <button 
                onClick={() => setShowPatientForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-medium hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AddMedicationForm = () => {
    const [medForm, setMedForm] = useState({
      name: '',
      dose: '',
      frequency: '',
      duration: '',
      startDate: new Date().toISOString().split('T')[0],
      time: ''
    });

    const handleSave = () => {
      if (medForm.name && medForm.dose && medForm.frequency && medForm.duration && medForm.time) {
        const newMed = {
          id: Date.now(),
          name: medForm.name,
          dose: medForm.dose,
          frequency: medForm.frequency,
          duration: parseInt(medForm.duration),
          startDate: medForm.startDate,
          nextDose: medForm.time,
          taken: false,
          refillDate: new Date(Date.now() + medForm.duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        };
        
        setMedications([...medications, newMed]);
        setShowAddMed(false);
        showNotification('Medicamento agregado correctamente 💊');
        setMedForm({
          name: '',
          dose: '',
          frequency: '',
          duration: '',
          startDate: new Date().toISOString().split('T')[0],
          time: ''
        });
      } else {
        showNotification('Por favor completa todos los campos');
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-blue-800">Agregar Medicamento</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nombre del medicamento"
              className="w-full p-3 border rounded-lg"
              value={medForm.name}
              onChange={(e) => setMedForm({...medForm, name: e.target.value})}
            />
            <input
              type="text"
              placeholder="Dosis (ej: 50mg, 1 tableta)"
              className="w-full p-3 border rounded-lg"
              value={medForm.dose}
              onChange={(e) => setMedForm({...medForm, dose: e.target.value})}
            />
            <select
              className="w-full p-3 border rounded-lg"
              value={medForm.frequency}
              onChange={(e) => setMedForm({...medForm, frequency: e.target.value})}
            >
              <option value="">Seleccionar frecuencia</option>
              <option value="Cada 4 horas">Cada 4 horas</option>
              <option value="Cada 6 horas">Cada 6 horas</option>
              <option value="Cada 8 horas">Cada 8 horas</option>
              <option value="Cada 12 horas">Cada 12 horas</option>
              <option value="Una vez al día">Una vez al día</option>
              <option value="Dos veces al día">Dos veces al día</option>
              <option value="Tres veces al día">Tres veces al día</option>
            </select>
            <input
              type="number"
              placeholder="Duración en días"
              className="w-full p-3 border rounded-lg"
              value={medForm.duration}
              onChange={(e) => setMedForm({...medForm, duration: e.target.value})}
            />
            <input
              type="date"
              className="w-full p-3 border rounded-lg"
              value={medForm.startDate}
              onChange={(e) => setMedForm({...medForm, startDate: e.target.value})}
            />
            <input
              type="time"
              placeholder="Hora de toma"
              className="w-full p-3 border rounded-lg"
              value={medForm.time}
              onChange={(e) => setMedForm({...medForm, time: e.target.value})}
            />
            <div className="flex gap-2">
              <button 
                onClick={handleSave}
                className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Agregar
              </button>
              <button 
                onClick={() => setShowAddMed(false)}
                className="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-medium hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const toggleMedication = (medId) => {
    setMedications(medications.map(med => {
      if (med.id === medId) {
        const newTaken = !med.taken;
        if (newTaken) {
          setAdherenceStreak(adherenceStreak + 1);
          showNotification('¡Excelente! Medicamento tomado ✅');
        } else {
          setAdherenceStreak(Math.max(0, adherenceStreak - 1));
        }
        return { ...med, taken: newTaken };
      }
      return med;
    }));
  };

  const Dashboard = () => (
    <div className="p-4 space-y-6">
      {/* Mensaje motivacional */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          <span className="font-medium">Mensaje del día</span>
        </div>
        <p className="mt-2 text-lg">{dailyMessage}</p>
      </div>

      {/* Racha de adherencia */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-bold text-green-800">Racha Actual</h3>
              <p className="text-green-600">{adherenceStreak} días consecutivos</p>
            </div>
          </div>
          <div className="text-3xl animate-pulse">🏆</div>
        </div>
      </div>

      {/* Próximos medicamentos */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Próximas Tomas
        </h3>
        {medications.length === 0 ? (
          <div className="text-center text-gray-500 py-4">No hay medicamentos registrados</div>
        ) : (
          medications.map(med => (
            <div key={med.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg mb-2 hover:bg-blue-100 transition-colors">
              <div>
                <p className="font-medium">{med.name}</p>
                <p className="text-sm text-gray-600">{med.dose} - {med.nextDose}</p>
              </div>
              <button 
                onClick={() => toggleMedication(med.id)}
                className={`p-2 rounded-full transition-all ${
                  med.taken 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white border-2 border-green-500 hover:bg-green-50'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Próximas citas */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Próximas Citas
        </h3>
        <div className="text-center text-gray-500 py-4">
          No hay citas programadas
        </div>
      </div>
    </div>
  );

  const MedicationsList = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Mis Medicamentos</h2>
        <button 
          onClick={() => setShowAddMed(true)}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-3">
        {medications.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No hay medicamentos registrados<br />
            <small>Toca + para agregar uno</small>
          </div>
        ) : (
          medications.map(med => (
            <div key={med.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{med.name}</h3>
                  <p className="text-gray-600">{med.dose}</p>
                  <p className="text-sm text-blue-600">{med.frequency}</p>
                  <p className="text-sm text-gray-500">Duración: {med.duration} días</p>
                  <p className="text-sm text-orange-600">Resurtir: {med.refillDate}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs ${
                    med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {med.taken ? 'Tomado' : 'Pendiente'}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const PatientProfile = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Perfil del Paciente</h2>
        <button 
          onClick={() => setShowPatientForm(true)}
          className="text-blue-600 text-sm hover:text-blue-800"
        >
          Editar
        </button>
      </div>
      
      {patient && (
        <div className="bg-white border rounded-lg p-4 space-y-3 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Logo48 />
            <div>
              <h3 className="text-lg font-bold">{patient.name}</h3>
              <p className="text-gray-600">{patient.age} años</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div><span className="font-medium">ID:</span> {patient.id}</div>
            <div><span className="font-medium">Teléfono:</span> {patient.phone}</div>
            <div><span className="font-medium">Condición:</span> {patient.condition}</div>
            {patient.allergies && <div><span className="font-medium">Alergias:</span> {patient.allergies}</div>}
          </div>
        </div>
      )}
    </div>
  );

  const AppointmentsTab = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Citas Médicas</h2>
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="text-center text-gray-500 py-8">
        <Stethoscope className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p>No hay citas programadas</p>
        <p className="text-sm">Toca + para agregar una cita</p>
      </div>
    </div>
  );

  const LabTestsTab = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Laboratorios</h2>
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="text-center text-gray-500 py-8">
        <FlaskConical className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p>No hay estudios programados</p>
        <p className="text-sm">Toca + para agregar un estudio</p>
      </div>
    </div>
  );

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative">
        <NotificationContainer />
      
      {/* Header con logo profesional */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo32 />
            <div>
              <h1 className="text-xl font-bold">MediControl</h1>
              <p className="text-blue-100 text-sm">Control de Medicamentos PWA</p>
              <p className="text-blue-200 text-xs">© 2025 Juan Sebastian Zapien Lechuga</p>
            </div>
          </div>
          <button 
            onClick={requestNotificationPermission}
            className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pb-20">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'medications' && <MedicationsList />}
        {activeTab === 'appointments' && <AppointmentsTab />}
        {activeTab === 'labs' && <LabTestsTab />}
        {activeTab === 'profile' && <PatientProfile />}
      </div>

      {/* Copyright footer */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div className="text-center text-xs text-gray-500 bg-white bg-opacity-90 py-1">
          © 2025 Juan Sebastian Zapien Lechuga - Todos los derechos reservados
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t shadow-lg">
        <div className="flex justify-around py-2">
          {[
            { id: 'dashboard', icon: Target, label: 'Inicio' },
            { id: 'medications', icon: Pill, label: 'Medicinas' },
            { id: 'appointments', icon: Calendar, label: 'Citas' },
            { id: 'labs', icon: FlaskConical, label: 'Labs' },
            { id: 'profile', icon: User, label: 'Perfil' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center p-2 transition-colors ${
                activeTab === id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      {showPatientForm && <PatientForm />}
      {showAddMed && <AddMedicationForm />}
    </div>
    </>
  );
};

export default MediControlApp;