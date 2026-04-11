var klaroConfig = {
    version: 1,
    lang: 'es',
    privacyPolicy: '/politica-cookies.html',
    translations: {
        es: {
            consentNotice: {
                description: 'Usamos analítica anónima y herramientas de asistencia para ecommerce. Puedes aceptar, rechazar o personalizar.',
            },
            acceptAll: 'Aceptar todo',
            declineAll: 'Rechazar todo',
            save: 'Guardar preferencias',
            consentModal: { title: 'Preferencias de cookies' },
        },
        en: {
            consentNotice: {
                description: 'We use anonymous analytics and ecommerce assistant tools. You can accept, reject or customize.',
            },
            acceptAll: 'Accept all',
            declineAll: 'Reject all',
            save: 'Save preferences',
            consentModal: { title: 'Cookie preferences' },
        }
    },
    services: [
        {
            name: 'plausible',
            title: 'Plausible Analytics',
            description: 'Anonymous web analytics. No cookies or personal data collected.',
            purposes: ['analytics'],
            default: true,
        },
        {
            name: 'digiprompts-chat',
            title: 'ShopIA Assistant',
            description: 'Virtual ecommerce assistant. May use session cookies to maintain conversation.',
            purposes: ['functional'],
            default: false,
        }
    ]
};
