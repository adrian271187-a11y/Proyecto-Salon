const CONFIG = {
  negocio: "Salón de Belleza",
  tipo: "salon",
  slogan: "Tu belleza, nuestra pasión",
  logo: "",
  colores: {
    primario: "#D4537E",
    secundario: "#993556",
    fondo: "#FFF8FA",
    texto: "#2C2C2A"
  },
  servicios: [
    { id: "s1", nombre: "Manicure clásico",     duracion: 45, precio: 0, activo: true },
    { id: "s2", nombre: "Manicure semipermanente", duracion: 60, precio: 0, activo: true },
    { id: "s3", nombre: "Pedicure spa",          duracion: 60, precio: 0, activo: true },
    { id: "s4", nombre: "Uñas en gel",           duracion: 90, precio: 0, activo: true },
    { id: "s5", nombre: "Diseño de cejas",       duracion: 30, precio: 0, activo: true },
    { id: "s6", nombre: "Lifting de pestañas",   duracion: 60, precio: 0, activo: true }
  ],
  horario: {
    inicio: 8,
    fin: 18,
    diasHabiles: [1, 2, 3, 4, 5, 6]
  },
  contacto: {
    whatsapp: "",
    ubicacion: "",
    googleMaps: "",
    waze: "",
    correoAdmin: "admin@salon.com"
  },
  emailjs: {
    serviceId: "service_mlmct2l",
    templateId: "template_8ns7id3",
    templateCancelacion: "template_5nluude",
    publicKey: "wbu7jftXOgmyV__Vc"
  },
  admin: {
    timeoutMinutos: 10
  }
};
