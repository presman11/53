const translations = {
  en: {
    title: "Welcome to 52bOT",
    description: "An intelligent trading app with advanced security. Start with test mode or go live to earn.",
    button: "Start Test",
    note: "This is the initial version. More features coming soon..."
  },
  sw: {
    title: "Karibu 5252bOT",
    description: "App ya kutrade yenye akili ya kipekee na usalama wa hali ya juu. Tumia test mode au anza moja kwa moja kupata faida.",
    button: "Anza Test",
    note: "Toleo la mwanzo. Maboresho zaidi yanakuja hivi karibuni..."
  },
  fr: {
    title: "Bienvenue à 5252bOT",
    description: "Une application de trading intelligente avec une sécurité avancée. Commencez en mode test ou passez en direct pour gagner.",
    button: "Commencer le test",
    note: "Ceci est la version initiale. Plus de fonctionnalités à venir..."
  }
};

const languageSelect = document.getElementById("languageSelect");

function updateLanguage(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("description").textContent = translations[lang].description;
  document.getElementById("startTest").textContent = translations[lang].button;
  document.getElementById("note").textContent = translations[lang].note;
}

languageSelect.addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

// default language
updateLanguage("en");

document.getElementById("startTest").addEventListener("click", () => {
  alert("Test mode started! More features coming soon...");
});
