// ============================================================
//  KYOMU NAILS — Configuración general
// ============================================================

const KYOMU_CONFIG = {
  nombre:      "Kyomu Nails",
  slogan:      "Arte en tus manos",
  whatsapp:    "50662472397",
  correoAdmin: "Enviossaloncr@Gmail.com",

  adminUser: "Naty",
  adminPass: "Naty2026",

  firebase: {
    apiKey:            "AIzaSyCaSmB7zGTDDDNEbPeYm-dqyJY-FP0P14Q",
    authDomain:        "kyomu-nails.firebaseapp.com",
    projectId:         "kyomu-nails",
    storageBucket:     "kyomu-nails.firebasestorage.app",
    messagingSenderId: "514396956826",
    appId:             "1:514396956826:web:9356c814010b2c730f9723"
  },

  emailjs: {
    serviceId:       "service_pwktaba",
    templateAviso:   "template_y3zvu9a",
    templateConfirm: "template_jm35zux",
    publicKey:       "wbu7jftXOgmyV__Vc"
  },

  diasHabiles: [0,1,2,3,4,5,6],
  horaInicio:  9,
  horaFin:     19,
  intervalo:   30,

  urls: {
    cliente:    "/kyomu/cliente/",
    admin:      "/kyomu/admin-app/",
    salaEspera: "/kyomu/sala-espera.html",
    qr:         "/kyomu/qr.html",
    etiqueta:   "/kyomu/etiqueta.html"
  }
};
