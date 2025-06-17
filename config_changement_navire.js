// config_changement_navire.js

// Préfixes pour les appareils spécifiques au navire
const PREFIXES = {
  APPAREIL_PREFIX: 'A36-',
  CABLE_PREFIX: 'A36-C-'
};

// Lien pour télécharger le fichier NEC spécifique au navire
const LINKS = {
  NEC_DOWNLOAD: 'https://share.chantiers-atlantique.com/share/page/repository#filter=path%7C%2FChantiers%2520de%2520l%2527Atlantique%2FConception%2520G%25E9n%25E9rale%2520et%2520D%25E9taill%25E9e%2F03%2520METIERS%2F4%2520Electricit%25E9%2F02%2520-%2520Supports%2FBDEL%2520-%2520IELEC%2520%2528extraction%2520donn%25E9es%2529%2FBord%7C&page=1'
};

// Nom du navire
const SHIP = {
  NAME: 'A36'
};

// Colonnes à utiliser dans les différentes pages
const COLUMNS = ["PT_CBL", "GAM", "STT_CBL_BORD", "RESP_TIRAGE", "LOT_MTG_APO", "LOCAL_APO", "APO", "LOT_MTG_APA", "LOCAL_APA", "APA"];

// Noms des fichiers JSON, ne modifier que si vous maitrisez...
const JSON_FILES = {
  CABLES_PREFIX: 'cables_',
  JSON_EXTENSION: '.json'
};

// Exporter les constantes pour les utiliser dans d'autres fichiers
window.PREFIXES = PREFIXES;
window.LINKS = LINKS;
window.SHIP = SHIP;
window.COLUMNS = COLUMNS;
window.JSON_FILES = JSON_FILES;
