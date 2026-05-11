const data = {
  challenges: {
    items: [
      "Heb je het gevoel dat je sterk moet zijn voor je team?",
      "Pas jij je gedrag aan uit angst voor afwijzing?",
      "Doe je wat je baas van je verwacht en luister je niet naar je eigen inzichten?",
      "Vertrouw je in moeilijke situaties op rationeel denken?",
      "Voel je weerstand of sabotage binnen je team?",
      "Zijn jouw afdelingen meer bezig met hun eigen resultaten dan met het grotere geheel?",
    ],
  },
  training: {
    description:
      "Wij helpen leiders van alle niveaus om de principes uit Leidinggeven met en Zonder Ego in de praktijk te brengen. We leren je leidinggeven op de gulde middenweg van controle en loslaten. Je leert op een diep niveau wisselen tussen directief en dienstbaar leidinggeven, waardoor je dat gaat doen wat nodig is om een team naar duurzame prestaties te leiden. Ben jij klaar om de volgende stap te zetten in je leiderschap en jezelf uit te dagen?",
  },
  program: {
    description:
      "We werken met het 8-stappenmodel uit Leidinggeven met en zonder Ego dat is onderverdeeld in 3 fases. Met deze methode leer je hoe je als kapitein de juiste balans creëert tussen het zetten van de koers en vertrouwen op de bemanning, waardoor je samen en met plezier de stip aan de horizon bereikt.",
    modules: [
      {
        title: "DEEL 1",
        subtitle: "LEIDING GEVEN AAN JEZELF",
        items: [
          "Ik weet wie ik ben (en hoe anderen over mij denken)",
          "Ik weet wat ik wil (en wat de organisatie van mij verwacht)",
          "Ik zeg wat ik wil (en consulteer anderen)",
          "Ik doe wat ik zeg (en dat herkent mijn omgeving)",
        ],
      },
      {
        title: "DEEL 2",
        subtitle: "LEIDING GEVEN IN HET HIER EN NU",
        items: ["Ik ontwikkel volwassen relaties (en blijf zelf volwassen)"],
      },
      {
        title: "DEEL 3",
        subtitle: "ANDEREN IN STAAT STELLEN OM SUCCESVOL TE ZIJN",
        items: [
          "Ik bied individuen een veilige en uitdagende context",
          "Ik bied teams een veilige en uitdagende context",
          "Ik bevorder een werkstructuur waarin mensen kunnen leren en presteren",
        ],
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: "Mark",
        role: "Manager",
        review:
          "De training gaf me inzicht en praktische tools om beter te leiden.",
        rating: 5,
      },
      {
        name: "Saskia",
        role: "Teamlead",
        review: "Zeer waardevol en direct toepasbaar in de praktijk.",
        rating: 4,
      },
    ],
  },
  benefits: {
    items: [
      "Persoonlijk",
      "Absolute expertise",
      "Systemisch, meer dimensionaal",
      "Maatwerk",
      "Methode gebaseerd op de praktijk van grote ondernemingen",
      "Duidelijk en direct",
      "Levendig vanuit flow",
      "Goedkoop",
      "Gedreven door de wetenschap",
      "Flexibel, alles mogelijk",
    ],
  },
  initiative: {
    description:
      "Alfred, auteur van Leidinggeven met en zonder Ego, heeft tientallen jaren ervaring in leiderschapstraining en het begeleiden van prestatieverbeteringen binnen organisaties. Stefanie is expert in het aanpakken van stress en burn-out in organisaties en heeft uitgebreide ervaring met ervaringsgericht leren.\n\nSamen zijn ze geen traditioneel adviesbureau. Ze zijn helder, hebben lef, en staan altijd naast je.",
  },
  book_section: {
    description:
      "Leidinggeven met en zonder Ego, geschreven door Paul van Schaik, Alfred Schmits en Dennis Stout, ligt vanaf november 2024 in de schappen.\n\nHet boek beschrijft wat we als leiders vaak doen, waarom we dat (on)bewust doen, en wat de effecten daarvan zijn. Met een concreet 8-stappenplan biedt het boek je alternatief gedrag dat leidt tot diepere samenwerking, meer werkplezier en bovengemiddelde prestaties.",
    authors: [
      {
        name: "Paul van Schaik",
        linkedin: "https://linkedin.com/in/paulvanschaik",
      },
      {
        name: "Alfred Schmits",
        linkedin: "https://linkedin.com/in/alfredschmits",
      },
      { name: "Dennis Stout", linkedin: "https://linkedin.com/in/dennisstout" },
    ],
  },
  newsletter: {
    description:
      "Wil jij praktische tips om jouw leiderschap naar een hoger niveau te tillen? Ontvang regelmatig korte achtergrondartikelen en blijf op de hoogte van de ontwikkelingen van de training Leidinggeven met en zonder Ego.",
  },
};

// Populate challenges
const challengeList = document.getElementById("challengeList");
if (challengeList) {
  data.challenges.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    challengeList.appendChild(li);
  });
}

// Populate training description
document.getElementById("trainingDesc").textContent = data.training.description;

// Populate program
const programDescEl = document.getElementById("programDesc");
if (programDescEl) programDescEl.textContent = data.program.description;
const modulesGrid = document.getElementById("modulesGrid");
if (modulesGrid) {
  data.program.modules.forEach((mod) => {
    const card = document.createElement("div");
    card.className = "module-card";
    const listItems = mod.items.map((i) => `<li>${i}</li>`).join("");
    card.innerHTML = `<h3>${mod.title}</h3><h4>${mod.subtitle}</h4><ul>${listItems}</ul>`;
    modulesGrid.appendChild(card);
  });
}

// Testimonial carousel data
const testimonials = [
  {
    name: "Sarah",
    role: "HR Director",
    company: "XYZ Company",
    review:
      '"Wat een eye-opener! Ik had nooit verwacht dat kleine aanpassingen in mijn leiderschapsstijl zo\'n groot effect zouden hebben. De tools die we hebben geleerd, helpen me om beter in te spelen op de behoeften van mijn team"',
    linkedin: "#",
  },
  {
    name: "Tom",
    role: "Projectleider",
    company: "ABC Groep",
    review:
      '"Dank voor deze waardevolle training. Ik heb veel geleerd over mijn eigen leiderschapsstijl en hoe ik mijn team beter kan ondersteunen in mijn rol."',
    linkedin: "#",
  },
  {
    name: "Mark",
    role: "Manager",
    company: "Bedrijf BV",
    review:
      '"De training gaf me inzicht en praktische tools om beter te leiden. Zeer aanbevolen voor iedereen die zijn leiderschap naar een hoger niveau wil tillen."',
    linkedin: "#",
  },
  {
    name: "Saskia",
    role: "Teamlead",
    company: "Innovatie NL",
    review:
      '"Zeer waardevol en direct toepasbaar in de praktijk. Na de training merk ik dat mijn team meer betrokken is en beter presteert."',
    linkedin: "#",
  },
];

// Build carousel
const track = document.getElementById("carouselTrack");
const dotsContainer = document.getElementById("carouselDots");
const nextBtn = document.getElementById("carouselNext");
let currentIndex = 0;

if (track) {
  const linkedinIcon = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  testimonials.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "carousel-card" + (i === 0 ? " active" : "");
    card.innerHTML = `
      <div class="carousel-card-header">
        <span class="carousel-card-name">${t.name}</span>
        <span class="carousel-card-meta">${t.role}<span class="dot"></span>${t.company}</span>
      </div>
      <p class="carousel-card-review">${t.review}</p>
      <a href="${t.linkedin}" target="_blank" rel="noopener noreferrer" class="carousel-card-linkedin">${linkedinIcon}</a>
    `;
    track.appendChild(card);

    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    currentIndex = index;
    const cardWidth = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    document.querySelectorAll(".carousel-card").forEach((c, i) => {
      c.classList.toggle("active", i === currentIndex);
    });
    document.querySelectorAll(".carousel-dot").forEach((d, i) => {
      d.classList.toggle("active", i === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    const next = (currentIndex + 1) % testimonials.length;
    goTo(next);
  });
}

// Populate benefits
const benefitsList = document.getElementById("benefitsList");
data.benefits.items.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="benefit-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </span>
    <span>${item}</span>
  `;
  benefitsList.appendChild(li);
});

// Populate initiative
document.getElementById("initiativeDesc").style.whiteSpace = "pre-line";
document.getElementById("initiativeDesc").textContent =
  data.initiative.description;

// Populate book section
document.getElementById("bookDesc").textContent = data.book_section.description;
const authorsList = document.getElementById("authorsList");
data.book_section.authors.forEach((author) => {
  const a = document.createElement("a");
  a.href = author.linkedin;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "author-chip";
  a.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>${author.name}`;
  authorsList.appendChild(a);
});

// Populate newsletter
document.getElementById("newsletterDesc").textContent =
  data.newsletter.description;

// Newsletter form
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Bedankt voor uw aanmelding!");
  e.target.reset();
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Uw bericht is verstuurd. We nemen zo snel mogelijk contact op!");
  e.target.reset();
});
