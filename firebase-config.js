// 1) Créez un projet gratuit sur https://console.firebase.google.com
// 2) Ajoutez une "Web App" et copiez ici la config qu'on vous donne
// 3) Activez "Realtime Database" (mode test) dans la console Firebase
// 4) Remplacez les valeurs ci-dessous par les vôtres

const firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyAqUm5fOp_WitrVFz84R3Pc9GMoTEaCKfw",
  authDomain: "engage221.firebaseapp.com",
  projectId: "engage221",
  storageBucket: "engage221.firebasestorage.app",
  messagingSenderId: "491140962829",
  appId: "1:491140962829:web:8663e5f691895b57af5344",
  measurementId: "G-B7DS3VPT0V"
};

// Numéro WhatsApp des autorités locales à alerter (format international, sans "+")
const AUTHORITY_WHATSAPP_NUMBER = "221776346673";

// Centre par défaut de la carte (Dakar). Changez si votre zone est différente.
const MAP_CENTER = [14.6928, -17.4467];
const MAP_ZOOM = 12;
