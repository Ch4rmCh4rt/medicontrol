<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#2563eb">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="MediControl">
    <meta name="author" content="Juan Sebastian Zapien Lechuga">
    <meta name="copyright" content="© 2025 Juan Sebastian Zapien Lechuga. Todos los derechos reservados.">
    <title>MediControl - Control de Medicamentos</title>
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="data:application/json;base64,ewogICJuYW1lIjogIk1lZGlDb250cm9sIC0gQ29udHJvbCBkZSBNZWRpY2FtZW50b3MiLAogICJzaG9ydF9uYW1lIjogIk1lZGlDb250cm9sIiwKICAiZGVzY3JpcHRpb24iOiAiQXBsaWNhY2nDs24gcGFyYSBlbCBjb250cm9sIGludGVsaWdlbnRlIGRlIG1lZGljYW1lbnRvcyB5IHNlZ3VpbWllbnRvIG3DqWRpY28iLAogICJzdGFydF91cmwiOiAiLyIsCiAgImRpc3BsYXkiOiAic3RhbmRhbG9uZSIsCiAgImJhY2tncm91bmRfY29sb3IiOiAiI2ZmZmZmZiIsCiAgInRoZW1lX2NvbG9yIjogIiMyNTYzZWIiLAogICJpY29ucyI6IFsKICAgIHsKICAgICAgInNyYyI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNakFpSUdobGFXZG9kRDBpTVRJd0lqNDhZMmx5WTJ4bElHTjRQU0kyTUNJZ1kza3ZNVE13SWlCeVBTSXpNQ0lnWm1sc2JEMGlJeko1TmpObFlpSXZQangwWlhoMElIZ3BOVJJJSXH1BTUwSWlJSFJoSWxOVU0wMWNSSWxOVU0wMWNUSWxOVU0wMWNUSWxOVU0wMWNUSWxOVU0wMWNUSW0iCiAgICB9CiAgXSwKICAiY2F0ZWdvcmllcyI6IFsiaGVhbHRoIiwgIm1lZGljYWwiLCAibGlmZXN0eWxlIl0sCiAgImxhbmciOiAiZXMiCn0=">
    
    <!-- Icons -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIzMCIgZmlsbD0iIzI1NjNlYiIvPjx0ZXh0IHg9IjYwIiB5PSI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+TWVkaTwvdGV4dD48L3N2Zz4=">
    <link rel="apple-touch-icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIzMCIgZmlsbD0iIzI1NjNlYiIvPjx0ZXh0IHg9IjYwIiB5PSI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+TWVkaTwvdGV4dD48L3N2Zz4=">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            font-family: 'Inter', sans-serif;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .install-prompt {
            position: fixed;
            bottom: 80px;
            left: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 1000;
            animation: slideUp 0.4s ease-out;
        }
        
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        .glass {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }
    </style>
</head>
<body class="bg-gray-50">
    <div id="app" class="max-w-md mx-auto bg-gray-50 min-h-screen relative"></div>
    
    <!-- Install Prompt -->
    <div id="installPrompt" class="install-prompt hidden">
        <div class="flex items-center justify-between">
            <div class="flex-1">
                <h3 class="font-bold text-lg">¡Instala MediControl!</h3>
                <p class="text-sm opacity-90">Accede más rápido desde tu pantalla de inicio</p>
            </div>
            <div class="flex gap-2 ml-4">
                <button id="installBtn" class="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium text-sm">
                    Instalar
                </button>
                <button id="dismissBtn" class="bg-black bg-opacity-20 px-4 py-2 rounded-lg font-medium text-sm">
                    Después
                </button>
            </div>
        </div>
    </div>

    <script>
        /*
         * MediControl - Aplicación para Control de Medicamentos
         * Copyright © 2025 Juan Sebastian Zapien Lechuga
         * Todos los derechos reservados.
         * 
         * Esta aplicación y su código fuente están protegidos por derechos de autor.
         * Queda prohibida la reproducción, distribución, modificación o uso comercial
         * sin autorización expresa por escrito del autor.
         * 
         * Autor: Juan Sebastian Zapien Lechuga
         * Fecha de creación: Junio 2025
         * Versión: 1.0.0
         */
        // Información de copyright
        const COPYRIGHT_INFO = {
            app: 'MediControl',
            version: '1.0.0',
            author: 'Juan Sebastian Zapien Lechuga',
            year: '2025',
            rights: 'Todos los derechos reservados',
            license: 'Uso personal autorizado. Prohibida la distribución comercial sin autorización.'
        };

        // Mostrar información de copyright en consola
        console.log(`
╔══════════════════════════════════════════════════════════════╗
║                        MEDICONTROL v${COPYRIGHT_INFO.version}                        ║
║                                                              ║
║  Copyright © ${COPYRIGHT_INFO.year} ${COPYRIGHT_INFO.author}       ║
║  ${COPYRIGHT_INFO.rights}                              ║
║                                                              ║
║  ${COPYRIGHT_INFO.license}  ║
╚══════════════════════════════════════════════════════════════╝
        `);

        // Iconos SVG como constantes
        const ICONS = {
            calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
            clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>`,
            plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
            user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
            heart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
            award: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline></svg>`,
            bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
            pill: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.5 20.5a2.828 2.828 0 1 1-4-4L15 8l4 4-8.5 8.5z"></path><path d="M15 8L8 15"></path></svg>`,
            check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
            target: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
            stethoscope: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 2v6"></path><path d="M13 2v6"></path><path d="M11 4H8s-1 0-1 1v4s0 1 1 1h8s1 0 1-1V5s0-1-1-1h-3"></path><path d="M16 9v1a2 2 0 0 1-2 2h-1"></path><circle cx="20" cy="14" r="2"></circle><path d="M18 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2"></path></svg>`,
            flask: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v7l4 8H5l4-8V3z"></path><path d="M9 3V1h6v2"></path></svg>`
        };

        // Estado global de la aplicación
        let appState = {
            activeTab: 'dashboard',
            patient: null,
            medications: [],
            appointments: [],
            labTests: [],
            adherenceStreak: 0,
            showAddMed: false,
            showPatientForm: false,
            notifications: []
        };

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

        // PWA Installation
        let deferredPrompt;
        let isInstalled = false;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            showInstallPrompt();
        });

        window.addEventListener('appinstalled', () => {
            isInstalled = true;
            hideInstallPrompt();
            showNotification('¡MediControl instalado correctamente! 🎉');
        });

        function showInstallPrompt() {
            if (!isInstalled) {
                document.getElementById('installPrompt').classList.remove('hidden');
            }
        }

        function hideInstallPrompt() {
            document.getElementById('installPrompt').classList.add('hidden');
        }

        document.getElementById('installBtn').addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const result = await deferredPrompt.userChoice;
                if (result.outcome === 'accepted') {
                    console.log('Usuario aceptó la instalación');
                }
                deferredPrompt = null;
            }
            hideInstallPrompt();
        });

        document.getElementById('dismissBtn').addEventListener('click', hideInstallPrompt);

        // Notificaciones
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 3000);
        }

        // Solicitar permisos de notificación
        function requestNotificationPermission() {
            if ('Notification' in window && Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        showNotification('¡Notificaciones activadas! 🔔');
                        scheduleNotifications();
                    }
                });
            }
        }

        // Programar notificaciones
        function scheduleNotifications() {
            if ('Notification' in window && Notification.permission === 'granted') {
                // Notificación de ejemplo cada 30 segundos para prueba
                setInterval(() => {
                    if (appState.medications.some(med => !med.taken)) {
                        new Notification('🩺 MediControl', {
                            body: 'Tienes medicamentos pendientes por tomar',
                            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSIzMCIgZmlsbD0iIzI1NjNlYiIvPjx0ZXh0IHg9IjYwIiB5PSI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+TWVkaTwvdGV4dD48L3N2Zz4=',
                            tag: 'medication-reminder'
                        });
                    }
                }, 30000);
            }
        }

        // Almacenamiento local mejorado
        function saveData() {
            const data = {
                patient: appState.patient,
                medications: appState.medications,
                appointments: appState.appointments,
                labTests: appState.labTests,
                adherenceStreak: appState.adherenceStreak,
                lastSaved: new Date().toISOString()
            };
            
            // Usar variables en memoria ya que localStorage no está disponible
            window.mediControlData = data;
        }

        function loadData() {
            // Simular datos de ejemplo
            if (!window.mediControlData) {
                appState.patient = {
                    name: "María González",
                    age: 45,
                    id: "12345678",
                    phone: "555-0123",
                    condition: "Hipertensión"
                };
                
                appState.medications = [
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
                ];
                
                appState.adherenceStreak = 7;
                saveData();
            } else {
                const data = window.mediControlData;
                appState.patient = data.patient;
                appState.medications = data.medications || [];
                appState.appointments = data.appointments || [];
                appState.labTests = data.labTests || [];
                appState.adherenceStreak = data.adherenceStreak || 0;
            }
        }

        // Funciones de utilidad
        function formatDate(dateString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            };
            return new Date(dateString).toLocaleDateString('es-ES', options);
        }

        function getDailyMessage() {
            const today = new Date().getDate();
            return motivationalMessages[today % motivationalMessages.length];
        }

        // Componentes de la aplicación
        function PatientForm() {
            const formData = appState.patient || {
                name: '', age: '', id: '', phone: '', condition: '', allergies: ''
            };

            return `
                <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div class="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <h2 class="text-xl font-bold mb-4 text-blue-800">Datos del Paciente</h2>
                        <div class="space-y-4">
                            <input type="text" id="patientName" placeholder="Nombre completo" 
                                   class="w-full p-3 border rounded-lg" value="${formData.name}">
                            <input type="number" id="patientAge" placeholder="Edad" 
                                   class="w-full p-3 border rounded-lg" value="${formData.age}">
                            <input type="text" id="patientId" placeholder="Número de identificación" 
                                   class="w-full p-3 border rounded-lg" value="${formData.id}">
                            <input type="tel" id="patientPhone" placeholder="Teléfono" 
                                   class="w-full p-3 border rounded-lg" value="${formData.phone}">
                            <input type="text" id="patientCondition" placeholder="Condición médica principal" 
                                   class="w-full p-3 border rounded-lg" value="${formData.condition}">
                            <textarea id="patientAllergies" placeholder="Alergias (opcional)" 
                                      class="w-full p-3 border rounded-lg h-20">${formData.allergies || ''}</textarea>
                            <div class="flex gap-2">
                                <button onclick="savePatient()" class="flex-1 bg-blue-600 text-white p-3 rounded-lg font-medium">
                                    Guardar
                                </button>
                                <button onclick="closePatientForm()" class="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-medium">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function AddMedicationForm() {
            return `
                <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div class="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <h2 class="text-xl font-bold mb-4 text-blue-800">Agregar Medicamento</h2>
                        <div class="space-y-4">
                            <input type="text" id="medName" placeholder="Nombre del medicamento" class="w-full p-3 border rounded-lg">
                            <input type="text" id="medDose" placeholder="Dosis (ej: 50mg, 1 tableta)" class="w-full p-3 border rounded-lg">
                            <select id="medFrequency" class="w-full p-3 border rounded-lg">
                                <option value="">Seleccionar frecuencia</option>
                                <option value="Cada 4 horas">Cada 4 horas</option>
                                <option value="Cada 6 horas">Cada 6 horas</option>
                                <option value="Cada 8 horas">Cada 8 horas</option>
                                <option value="Cada 12 horas">Cada 12 horas</option>
                                <option value="Una vez al día">Una vez al día</option>
                                <option value="Dos veces al día">Dos veces al día</option>
                                <option value="Tres veces al día">Tres veces al día</option>
                            </select>
                            <input type="number" id="medDuration" placeholder="Duración en días" class="w-full p-3 border rounded-lg">
                            <input type="date" id="medStartDate" class="w-full p-3 border rounded-lg" value="${new Date().toISOString().split('T')[0]}">
                            <input type="time" id="medTime" placeholder="Hora de toma" class="w-full p-3 border rounded-lg">
                            <div class="flex gap-2">
                                <button onclick="saveMedication()" class="flex-1 bg-blue-600 text-white p-3 rounded-lg font-medium">
                                    Agregar
                                </button>
                                <button onclick="closeAddMedForm()" class="flex-1 bg-gray-300 text-gray-700 p-3 rounded-lg font-medium">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function Dashboard() {
            const dailyMessage = getDailyMessage();
            
            return `
                <div class="p-4 space-y-6">
                    <!-- Mensaje motivacional -->
                    <div class="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-4 rounded-lg glass">
                        <div class="flex items-center gap-2">
                            ${ICONS.heart}
                            <span class="font-medium">Mensaje del día</span>
                        </div>
                        <p class="mt-2 text-lg">${dailyMessage}</p>
                    </div>

                    <!-- Racha de adherencia -->
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                ${ICONS.award}
                                <div>
                                    <h3 class="font-bold text-green-800">Racha Actual</h3>
                                    <p class="text-green-600">${appState.adherenceStreak} días consecutivos</p>
                                </div>
                            </div>
                            <div class="text-3xl pulse">🏆</div>
                        </div>
                    </div>

                    <!-- Próximos medicamentos -->
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            ${ICONS.bell}
                            Próximas Tomas
                        </h3>
                        ${appState.medications.length === 0 ? 
                            '<div class="text-center text-gray-500 py-4">No hay medicamentos registrados</div>' :
                            appState.medications.map(med => `
                                <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg mb-2">
                                    <div>
                                        <p class="font-medium">${med.name}</p>
                                        <p class="text-sm text-gray-600">${med.dose} - ${med.nextDose}</p>
                                    </div>
                                    <button onclick="toggleMedication(${med.id})" 
                                            class="p-2 rounded-full ${med.taken ? 'bg-green-500 text-white' : 'bg-white border-2 border-green-500'}">
                                        ${ICONS.check}
                                    </button>
                                </div>
                            `).join('')
                        }
                    </div>

                    <!-- Próximas citas -->
                    <div class="bg-white border rounded-lg p-4">
                        <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            ${ICONS.calendar}
                            Próximas Citas
                        </h3>
                        <div class="text-center text-gray-500 py-4">
                            No hay citas programadas
                        </div>
                    </div>
                </div>
            `;
        }

        function MedicationsList() {
            return `
                <div class="p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-bold text-gray-800">Mis Medicamentos</h2>
                        <button onclick="showAddMedForm()" class="bg-blue-600 text-white p-2 rounded-full">
                            ${ICONS.plus}
                        </button>
                    </div>
                    
                    <div class="space-y-3">
                        ${appState.medications.length === 0 ? 
                            '<div class="text-center text-gray-500 py-8">No hay medicamentos registrados<br><small>Toca + para agregar uno</small></div>' :
                            appState.medications.map(med => `
                                <div class="bg-white border rounded-lg p-4">
                                    <div class="flex justify-between items-start">
                                        <div class="flex-1">
                                            <h3 class="font-bold text-lg">${med.name}</h3>
                                            <p class="text-gray-600">${med.dose}</p>
                                            <p class="text-sm text-blue-600">${med.frequency}</p>
                                            <p class="text-sm text-gray-500">Duración: ${med.duration} días</p>
                                            <p class="text-sm text-orange-600">Resurtir: ${formatDate(med.refillDate)}</p>
                                        </div>
                                        <div class="text-right">
                                            <div class="inline-block px-2 py-1 rounded-full text-xs ${med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}">
                                                ${med.taken ? 'Tomado' : 'Pendiente'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')
                        }
                    </div>
                </div>
            `;
        }

        function PatientProfile() {
            return `
                <div class="p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-bold text-gray-800">Perfil del Paciente</h2>
                        <button onclick="showPatientForm()" class="text-blue-600 text-sm">
                            Editar
                        </button>
                    </div>
                    
                    ${appState.patient ? `
                        <div class="bg-white border rounded-lg p-4 space-y-3">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    ${ICONS.user}
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold">${appState.patient.name}</h3>
                                    <p class="text-gray-600">${appState.patient.age} años</p>
                                </div>
                            </div>
                            
                            <div class="space-y-2">
                                <div><span class="font-medium">ID:</span> ${appState.patient.id}</div>
                                <div><span class="font-medium">Teléfono:</span> ${appState.patient.phone}</div>
                                <div><span class="font-medium">Condición:</span> ${appState.patient.condition}</div>
                                ${appState.patient.allergies ? `<div><span class="font-medium">Alergias:</span> ${appState.patient.allergies}</div>` : ''}
                            </div>
                        </div>
                    ` : `
                        <div class="text-center text-gray-500 py-8">
                            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                ${ICONS.user}
                            </div>
                            <p>No hay información del paciente</p>
                            <button onclick="showPatientForm()" class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
                                Agregar Datos
                            </button>
                        </div>
                    `}
                </div>
            `;
        }

        function AppointmentsTab() {
            return `
                <div class="p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-bold text-gray-800">Citas Médicas</h2>
                        <button class="bg-blue-600 text-white p-2 rounded-full">
                            ${ICONS.plus}
                        </button>
                    </div>
                    
                    <div class="text-center text-gray-500 py-8">
                        ${ICONS.stethoscope}
                        <p class="mt-3">No hay citas programadas</p>
                        <p class="text-sm">Toca + para agregar una cita</p>
                    </div>
                </div>
            `;
        }

        function LabTestsTab() {
            return `
                <div class="p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-bold text-gray-800">Laboratorios</h2>
                        <button class="bg-blue-600 text-white p-2 rounded-full">
                            ${ICONS.plus}
                        </button>
                    </div>
                    
                    <div class="text-center text-gray-500 py-8">
                        ${ICONS.flask}
                        <p class="mt-3">No hay estudios programados</p>
                        <p class="text-sm">Toca + para agregar un estudio</p>
                    </div>
                </div>
            `;
        }

        // Funciones de navegación y estado
        function setActiveTab(tab) {
            appState.activeTab = tab;
            render();
        }

        function showAddMedForm() {
            appState.showAddMed = true;
            render();
        }

        function closeAddMedForm() {
            appState.showAddMed = false;
            render();
        }

        function showPatientForm() {
            appState.showPatientForm = true;
            render();
        }

        function closePatientForm() {
            appState.showPatientForm = false;
            render();
        }

        function savePatient() {
            const name = document.getElementById('patientName').value;
            const age = document.getElementById('patientAge').value;
            const id = document.getElementById('patientId').value;
            const phone = document.getElementById('patientPhone').value;
            const condition = document.getElementById('patientCondition').value;
            const allergies = document.getElementById('patientAllergies').value;

            if (name && age && id) {
                appState.patient = { name, age, id, phone, condition, allergies };
                appState.showPatientForm = false;
                saveData();
                showNotification('Datos del paciente guardados ✅');
                render();
            } else {
                showNotification('Por favor completa los campos obligatorios');
            }
        }

        function saveMedication() {
            const name = document.getElementById('medName').value;
            const dose = document.getElementById('medDose').value;
            const frequency = document.getElementById('medFrequency').value;
            const duration = document.getElementById('medDuration').value;
            const startDate = document.getElementById('medStartDate').value;
            const time = document.getElementById('medTime').value;

            if (name && dose && frequency && duration && startDate && time) {
                const newMed = {
                    id: Date.now(),
                    name,
                    dose,
                    frequency,
                    duration: parseInt(duration),
                    startDate,
                    nextDose: time,
                    taken: false,
                    refillDate: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                };
                
                appState.medications.push(newMed);
                appState.showAddMed = false;
                saveData();
                showNotification('Medicamento agregado correctamente 💊');
                render();
            } else {
                showNotification('Por favor completa todos los campos');
            }
        }

        function toggleMedication(medId) {
            const med = appState.medications.find(m => m.id === medId);
            if (med) {
                med.taken = !med.taken;
                if (med.taken) {
                    appState.adherenceStreak++;
                    showNotification('¡Excelente! Medicamento tomado ✅');
                } else {
                    appState.adherenceStreak = Math.max(0, appState.adherenceStreak - 1);
                }
                saveData();
                render();
            }
        }

        // Función principal de renderizado
        function render() {
            const app = document.getElementById('app');
            
            let content = '';
            
            // Header
            content += `
                <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-xl font-bold">MediControl</h1>
                            <p class="text-blue-100 text-sm">Control de Medicamentos PWA</p>
                            <p class="text-blue-200 text-xs">© 2025 Juan Sebastian Zapien Lechuga</p>
                        </div>
                        <button onclick="requestNotificationPermission()" class="bg-white bg-opacity-20 p-2 rounded-full">
                            ${ICONS.bell}
                        </button>
                    </div>
                </div>
            `;

            // Content
            content += '<div class="pb-20">';
            
            switch(appState.activeTab) {
                case 'dashboard':
                    content += Dashboard();
                    break;
                case 'medications':
                    content += MedicationsList();
                    break;
                case 'appointments':
                    content += AppointmentsTab();
                    break;
                case 'labs':
                    content += LabTestsTab();
                    break;
                case 'profile':
                    content += PatientProfile();
                    break;
            }
            
            content += '</div>';

            // Bottom Navigation
            const tabs = [
                { id: 'dashboard', icon: 'target', label: 'Inicio' },
                { id: 'medications', icon: 'pill', label: 'Medicinas' },
                { id: 'appointments', icon: 'calendar', label: 'Citas' },
                { id: 'labs', icon: 'flask', label: 'Labs' },
                { id: 'profile', icon: 'user', label: 'Perfil' }
            ];

            content += `
                <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t">
                    <div class="flex justify-around py-2">
                        ${tabs.map(tab => `
                            <button onclick="setActiveTab('${tab.id}')" 
                                    class="flex flex-col items-center p-2 ${appState.activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'}">
                                ${ICONS[tab.icon]}
                                <span class="text-xs mt-1">${tab.label}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            // Modals
            if (appState.showPatientForm) {
                content += PatientForm();
            }
            
            if (appState.showAddMed) {
                content += AddMedicationForm();
            }

            // Aviso de copyright en modo desarrollo
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                content += `
                    <div class="fixed top-0 left-0 right-0 bg-red-600 text-white text-center text-xs py-1 z-50">
                        ⚠️ Versión de desarrollo - © 2025 Juan Sebastian Zapien Lechuga - Todos los derechos reservados
                    </div>
                `;
            }

            app.innerHTML = content;
        }

        // Protección anti-copia (deshabilitar clic derecho y atajos)
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showNotification('© 2025 Juan Sebastian Zapien Lechuga - Contenido protegido');
        });

        document.addEventListener('keydown', function(e) {
            // Deshabilitar F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.key === 's')) {
                e.preventDefault();
                showNotification('© Juan Sebastian Zapien Lechuga - Contenido protegido');
            }
        });

        // Deshabilitar selección de texto
        document.addEventListener('selectstart', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });

        // Service Worker para PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', async () => {
                try {
                    const swUrl = 'data:application/javascript;base64,' + btoa(`
                        /*
                         * MediControl Service Worker
                         * Copyright © 2025 Juan Sebastian Zapien Lechuga
                         * Todos los derechos reservados.
                         */
                        
                        const CACHE_NAME = 'medicontrol-v1';
                        const urlsToCache = [
                            '/',
                            'https://cdn.tailwindcss.com'
                        ];

                        self.addEventListener('install', event => {
                            console.log('MediControl SW © 2025 Juan Sebastian Zapien Lechuga');
                            event.waitUntil(
                                caches.open(CACHE_NAME)
                                    .then(cache => cache.addAll(urlsToCache))
                            );
                        });

                        self.addEventListener('fetch', event => {
                            event.respondWith(
                                caches.match(event.request)
                                    .then(response => {
                                        if (response) {
                                            return response;
                                        }
                                        return fetch(event.request);
                                    })
                            );
                        });
                    `);
                    
                    const registration = await navigator.serviceWorker.register(swUrl);
                    console.log('Service Worker registrado:', registration);
                } catch (error) {
                    console.log('Error al registrar Service Worker:', error);
                }
            });
        }

        // Inicialización de la aplicación
        document.addEventListener('DOMContentLoaded', () => {
            // Mostrar información de copyright
            console.log('Iniciando MediControl...');
            console.log(`Aplicación desarrollada por: ${COPYRIGHT_INFO.author}`);
            
            loadData();
            render();
            
            // Mostrar prompt de instalación después de 3 segundos
            setTimeout(() => {
                if (!isInstalled && !deferredPrompt) {
                    showInstallPrompt();
                }
            }, 3000);
            
            // Solicitar permisos de notificación después de 5 segundos
            setTimeout(() => {
                requestNotificationPermission();
            }, 5000);

            // Mostrar aviso de copyright inicial
            setTimeout(() => {
                showNotification(`Bienvenido a MediControl v${COPYRIGHT_INFO.version} © ${COPYRIGHT_INFO.author}`);
            }, 1000);
        });

        // Hacer funciones globales
        window.setActiveTab = setActiveTab;
        window.showAddMedForm = showAddMedForm;
        window.closeAddMedForm = closeAddMedForm;
        window.showPatientForm = showPatientForm;
        window.closePatientForm = closePatientForm;
        window.savePatient = savePatient;
        window.saveMedication = saveMedication;
        window.toggleMedication = toggleMedication;
        window.requestNotificationPermission = requestNotificationPermission;
    </script>
</body>
</html>