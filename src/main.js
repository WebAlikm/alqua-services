import listings from "../data/sample-listings.json";
import "./styles.css";

const app = document.querySelector("#app");

const dictionaries = {
  ar: {
    appName: "خدمات القوع",
    appDescription: "دليل المجتمع المحلي",
    logoAlt: "شعار خدمات القوع",
    communityImageTitle: "صورة مجتمع القوع",
    communityImageCaption: "تصور بصري مولد للنموذج الأولي يعكس الوصول إلى الخدمات المحلية في القوع",
    communityImageAlt: "تصور مولد لسكان يصلون إلى خدمة مجتمعية بجوار مزارع القوع",
    conceptImage: "صورة تصورية مولدة",
    prideContext: "من القوع، لخدمة كل مجتمع في دولة الإمارات",
    language: "English",
    searchPrompt: "ما الذي تحتاج إليه اليوم؟",
    searchHelp: "اكتب حاجتك بالعربية أو الإنجليزية للوصول إلى الخدمة المناسبة دون تسجيل دخول.",
    searchLabel: "صف ما تحتاج إليه",
    searchPlaceholder: "مثال: أحتاج إلى توصيل دواء",
    examplesLabel: "جرّب مثالاً",
    examples: [
      { label: "أحتاج إلى توصيل دواء", query: "توصيل دواء" },
      { label: "أبحث عن تدريب للشباب", query: "تدريب شباب" },
      { label: "مساعدة لمزرعتي", query: "مزرعة" }
    ],
    categoryLabel: "تصفح حسب الفئة",
    audienceLabel: "الفئة المستفيدة",
    urgencyLabel: "الأولوية",
    typeLabel: "نوع القائمة",
    all: "الكل",
    resultsRegion: "نتائج البحث",
    resultOne: "نتيجة",
    resultMany: "نتيجة",
    reset: "إعادة ضبط",
    moreFilters: "فلاتر إضافية",
    fewerFilters: "إخفاء الفلاتر",
    source: "حالة البيانات",
    updated: "آخر تحديث",
    availability: "التوفر",
    location: "الموقع",
    action: "اتخذ إجراء",
    call: "اتصال",
    whatsapp: "واتساب",
    map: "الخريطة",
    share: "مشاركة",
    details: "التفاصيل",
    openDetails: "عرض التفاصيل",
    close: "إغلاق",
    noResults: "لا توجد نتائج مطابقة. جرّب وصفًا أقصر أو فئة أخرى.",
    sampleNotice: "بيانات تجريبية وليست سجلات رسمية",
    sampleStatus: "قائمة تجريبية",
    sampleSource: "نموذج أولي - يحتاج إلى تحقق من الجهة المقدمة",
    locations: {
      "Al Qua'a": "القوع",
      "Al Qua'a Desert Area": "منطقة القوع الصحراوية",
      "Al Qua'a and Al Ain Region": "القوع ومنطقة العين",
      "Al Qua'a and nearby farms": "القوع والمزارع القريبة",
      "Al Qua'a farms": "مزارع القوع",
      "Community Center": "المركز المجتمعي",
      "Community Majlis": "المجلس المجتمعي",
      "Community Market Area": "منطقة السوق المجتمعي"
    },
    categories: {
      healthcare: "الرعاية الصحية",
      education: "التعليم",
      business: "الأعمال والفرص",
      community: "المجتمع والفعاليات",
      "farm-services": "خدمات المزارع"
    },
    audiences: {
      families: "الأسر",
      youth: "الشباب",
      entrepreneurs: "رواد الأعمال",
      "farm-owners": "أصحاب المزارع",
      seniors: "كبار السن",
      visitors: "الزوار"
    },
    urgencies: {
      normal: "عادي",
      "this-week": "هذا الأسبوع",
      urgent: "عاجل"
    },
    types: {
      service: "خدمة",
      event: "فعالية",
      opportunity: "فرصة"
    }
  },
  en: {
    appName: "Al Qua'a Services",
    appDescription: "Local community directory",
    logoAlt: "Al Qua'a Services logo",
    communityImageTitle: "Al Qua'a community",
    communityImageCaption: "A generated prototype visual representing access to local services in Al Qua'a",
    communityImageAlt: "Generated concept of residents accessing a community service beside farms in Al Qua'a",
    conceptImage: "Generated concept image",
    prideContext: "From Al Qua'a, built to serve communities across the UAE",
    language: "العربية",
    searchPrompt: "What do you need today?",
    searchHelp: "Describe your need in Arabic or English and reach the right service without creating an account.",
    searchLabel: "Describe what you need",
    searchPlaceholder: "Example: I need medicine delivered",
    examplesLabel: "Try an example",
    examples: [
      { label: "I need medicine delivered", query: "medicine delivery" },
      { label: "Find youth training", query: "youth workshop" },
      { label: "Help for my farm", query: "farm" }
    ],
    categoryLabel: "Browse by category",
    audienceLabel: "Audience",
    urgencyLabel: "Priority",
    typeLabel: "Listing type",
    all: "All",
    resultsRegion: "Search results",
    resultOne: "result",
    resultMany: "results",
    reset: "Reset",
    moreFilters: "More filters",
    fewerFilters: "Hide filters",
    source: "Data status",
    updated: "Last updated",
    availability: "Availability",
    location: "Location",
    action: "Take action",
    call: "Call",
    whatsapp: "WhatsApp",
    map: "Map",
    share: "Share",
    details: "Details",
    openDetails: "View details",
    close: "Close",
    noResults: "No matching results. Try a shorter description or another category.",
    sampleNotice: "Demo data, not official records",
    sampleStatus: "Demo listing",
    sampleSource: "Prototype entry - provider verification required",
    locations: {},
    categories: {
      healthcare: "Healthcare",
      education: "Education",
      business: "Business",
      community: "Community",
      "farm-services": "Farm services"
    },
    audiences: {
      families: "Families",
      youth: "Youth",
      entrepreneurs: "Entrepreneurs",
      "farm-owners": "Farm owners",
      seniors: "Seniors",
      visitors: "Visitors"
    },
    urgencies: {
      normal: "Normal",
      "this-week": "This week",
      urgent: "Urgent"
    },
    types: {
      service: "Service",
      event: "Event",
      opportunity: "Opportunity"
    }
  }
};

const state = {
  lang: "ar",
  query: "",
  category: "all",
  audience: "all",
  urgency: "all",
  type: "all",
  selectedId: "",
  moreFilters: false
};

const showLaunchScreen = () => {
  if (document.querySelector("#launch-screen")) return;

  const launchScreen = document.createElement("div");
  launchScreen.id = "launch-screen";
  launchScreen.className = "launch-screen";
  launchScreen.setAttribute("role", "status");
  launchScreen.setAttribute("aria-label", "Proud of the UAE");
  launchScreen.innerHTML = `
    <span class="launch-color-rule" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
    <div class="launch-content">
      <img src="/images/alqua-services-logo.png" alt="Al Qua'a Services logo" width="512" height="512" />
      <p>Al Qua'a Services · خدمات القوع</p>
      <h1>Proud of the UAE</h1>
      <strong>نفخر بالإمارات</strong>
    </div>
  `;

  document.body.classList.add("is-launching");
  app.setAttribute("aria-hidden", "true");
  document.body.prepend(launchScreen);

  window.setTimeout(() => {
    launchScreen.classList.add("is-leaving");
    document.body.classList.remove("is-launching");
    app.removeAttribute("aria-hidden");
    window.setTimeout(() => launchScreen.remove(), 420);
  }, 3000);
};

const getText = (value) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[state.lang] || value.ar || value.en || "";
};

const unique = (items) => [...new Set(items)];
const categoryKeys = unique(listings.map((item) => item.category));
const audienceKeys = unique(listings.flatMap((item) => item.audience));
const urgencyKeys = ["urgent", "this-week", "normal"];
const typeKeys = ["service", "event", "opportunity"];

const ignoredWords = new Set([
  "i",
  "need",
  "want",
  "find",
  "for",
  "the",
  "help",
  "with",
  "أحتاج",
  "احتاج",
  "إلى",
  "الى",
  "أريد",
  "اريد",
  "عن",
  "في",
  "لي"
]);

const normalize = (value) =>
  String(value || "")
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .toLowerCase()
    .trim();

const escapeAttribute = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const listingMatchesQuery = (listing, query) => {
  if (!query) return true;

  const haystack = normalize(
    [
      listing.title.en,
      listing.title.ar,
      listing.summary.en,
      listing.summary.ar,
      listing.category,
      listing.type,
      listing.location,
      ...listing.audience,
      ...listing.tags
    ].join(" ")
  );
  const tokens = normalize(query)
    .split(/\s+/)
    .filter((token) => token.length > 1 && !ignoredWords.has(token));

  return tokens.length ? tokens.some((token) => haystack.includes(token)) : haystack.includes(normalize(query));
};

const getFilteredListings = () =>
  listings.filter((listing) => {
    const categoryMatch = state.category === "all" || listing.category === state.category;
    const audienceMatch = state.audience === "all" || listing.audience.includes(state.audience);
    const urgencyMatch = state.urgency === "all" || listing.urgency === state.urgency;
    const typeMatch = state.type === "all" || listing.type === state.type;
    return categoryMatch && audienceMatch && urgencyMatch && typeMatch && listingMatchesQuery(listing, state.query);
  });

const t = () => dictionaries[state.lang];
const getLocation = (listing) => t().locations[listing.location] || listing.location;

const createChip = ({ group, value, label, active }) => `
  <button class="chip ${active ? "is-active" : ""}" type="button" data-filter-group="${group}" data-filter-value="${value}" aria-pressed="${active}">
    ${label}
  </button>
`;

const renderChipGroup = ({ label, group, keys, labels, selected }) => `
  <section class="filter-group" aria-label="${label}">
    <div class="filter-label">${label}</div>
    <div class="chip-row">
      ${createChip({ group, value: "all", label: t().all, active: selected === "all" })}
      ${keys
        .map((key) =>
          createChip({
            group,
            value: key,
            label: labels[key] || key,
            active: selected === key
          })
        )
        .join("")}
    </div>
  </section>
`;

const getShareText = (listing) =>
  `${getText(listing.title)} - ${getText(listing.summary)}\n${getLocation(listing)}\n${listing.mapUrl}`;

const renderListingCard = (listing) => `
  <article class="listing-card">
    <button class="listing-main" type="button" data-select-listing="${listing.id}" aria-label="${t().openDetails}: ${getText(listing.title)}">
      <span class="listing-kicker">
        <span class="listing-type">${t().types[listing.type]}</span>
        <span class="demo-status">${t().sampleStatus}</span>
      </span>
      <h3>${getText(listing.title)}</h3>
      <p>${getText(listing.summary)}</p>
      <span class="listing-facts">
        <span><b>${t().location}:</b> ${getLocation(listing)}</span>
        <span><b>${t().availability}:</b> ${getText(listing.availability)}</span>
      </span>
    </button>
    <div class="listing-actions" aria-label="${t().action}">
      <a class="whatsapp-action" href="${listing.whatsapp}" target="_blank" rel="noreferrer" aria-label="${t().whatsapp}: ${getText(listing.title)}">${t().whatsapp}</a>
      <a href="tel:${listing.contact}" aria-label="${t().call}: ${getText(listing.title)}">${t().call}</a>
      <button type="button" data-select-listing="${listing.id}">${t().details}</button>
    </div>
  </article>
`;

const renderSelectedPanel = (listing) => {
  if (!listing) return "";

  return `
    <button class="detail-backdrop" type="button" data-close-detail aria-label="${t().close}"></button>
    <aside class="detail-panel" role="dialog" aria-modal="true" aria-label="${t().details}">
      <div class="detail-header">
        <span class="listing-type">${t().types[listing.type]}</span>
        <button class="ghost-button" type="button" data-close-detail>${t().close}</button>
      </div>
      <h2>${getText(listing.title)}</h2>
      <p>${getText(listing.summary)}</p>
      <dl class="detail-list">
        <div><dt>${t().location}</dt><dd>${getLocation(listing)}</dd></div>
        <div><dt>${t().availability}</dt><dd>${getText(listing.availability)}</dd></div>
        <div><dt>${t().audienceLabel}</dt><dd>${listing.audience.map((key) => t().audiences[key]).join(" · ")}</dd></div>
        <div><dt>${t().urgencyLabel}</dt><dd>${t().urgencies[listing.urgency]}</dd></div>
        <div><dt>${t().updated}</dt><dd>${listing.lastUpdated}</dd></div>
        <div><dt>${t().source}</dt><dd>${t().sampleSource}</dd></div>
      </dl>
      <div class="detail-actions" aria-label="${t().action}">
        <a class="primary-action" href="${listing.whatsapp}" target="_blank" rel="noreferrer">${t().whatsapp}</a>
        <a class="secondary-action" href="tel:${listing.contact}">${t().call}</a>
        <a class="secondary-action" href="${listing.mapUrl}" target="_blank" rel="noreferrer">${t().map}</a>
        <button class="secondary-action" type="button" data-share-listing="${listing.id}">${t().share}</button>
      </div>
    </aside>
  `;
};

const activeFilterCount = () => [state.audience, state.urgency, state.type].filter((value) => value !== "all").length;

const render = () => {
  const dict = t();
  const filtered = getFilteredListings();
  const selected = state.selectedId ? listings.find((listing) => listing.id === state.selectedId) : null;
  const resultWord = filtered.length === 1 ? dict.resultOne : dict.resultMany;
  const extraFilterCount = activeFilterCount();

  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("has-detail", Boolean(selected));

  app.innerHTML = `
    <header class="site-header">
      <div class="brand">
        <img class="brand-logo" src="/images/alqua-services-logo.png" alt="${dict.logoAlt}" width="512" height="512" />
        <div>
          <h1>${dict.appName}</h1>
          <p>${dict.appDescription}</p>
        </div>
      </div>
      <button class="language-toggle" type="button" data-toggle-language>${dict.language}</button>
    </header>

    <section class="uae-pride" aria-label="Proud of the UAE">
      <div class="uae-pride-inner">
        <span class="uae-flag" aria-hidden="true">
          <span class="flag-red"></span>
          <span class="flag-bands"><i></i><i></i><i></i></span>
        </span>
        <div class="pride-message">
          <strong>Proud of the UAE</strong>
          <span>نفخر بالإمارات</span>
        </div>
        <p>${dict.prideContext}</p>
      </div>
    </section>

    <main>
      <figure class="community-image">
        <img src="/images/al-quaa-community.webp" alt="${dict.communityImageAlt}" width="1600" height="640" />
        <figcaption>
          <span>${dict.conceptImage}</span>
          <h2>${dict.communityImageTitle}</h2>
          <p>${dict.communityImageCaption}</p>
        </figcaption>
      </figure>

      <section class="search-panel" aria-labelledby="search-heading">
        <div class="search-intro">
          <h2 id="search-heading">${dict.searchPrompt}</h2>
          <p>${dict.searchHelp}</p>
        </div>

        <label class="search-label" for="service-search">${dict.searchLabel}</label>
        <input
          id="service-search"
          class="search-input"
          type="search"
          value="${escapeAttribute(state.query)}"
          placeholder="${dict.searchPlaceholder}"
          autocomplete="off"
        />

        <div class="search-examples" aria-label="${dict.examplesLabel}">
          <span>${dict.examplesLabel}:</span>
          ${dict.examples
            .map(
              (example) =>
                `<button type="button" data-search-example="${escapeAttribute(example.query)}">${example.label}</button>`
            )
            .join("")}
        </div>

        ${renderChipGroup({
          label: dict.categoryLabel,
          group: "category",
          keys: categoryKeys,
          labels: dict.categories,
          selected: state.category
        })}

        <div class="filter-toolbar">
          <button class="more-filters-button" type="button" data-toggle-more-filters aria-expanded="${state.moreFilters}">
            ${state.moreFilters ? dict.fewerFilters : dict.moreFilters}${extraFilterCount ? ` (${extraFilterCount})` : ""}
          </button>
          <button class="reset-button" type="button" data-reset-filters>${dict.reset}</button>
        </div>

        ${
          state.moreFilters
            ? `<div class="advanced-filters">
                ${renderChipGroup({
                  label: dict.audienceLabel,
                  group: "audience",
                  keys: audienceKeys,
                  labels: dict.audiences,
                  selected: state.audience
                })}
                ${renderChipGroup({
                  label: dict.urgencyLabel,
                  group: "urgency",
                  keys: urgencyKeys,
                  labels: dict.urgencies,
                  selected: state.urgency
                })}
                ${renderChipGroup({
                  label: dict.typeLabel,
                  group: "type",
                  keys: typeKeys,
                  labels: dict.types,
                  selected: state.type
                })}
              </div>`
            : ""
        }
      </section>

      <section class="results-panel" aria-label="${dict.resultsRegion}">
        <div class="results-header">
          <h2>${filtered.length} ${resultWord}</h2>
          <p>${dict.sampleNotice}</p>
        </div>
        <div class="listings-grid">
          ${filtered.length ? filtered.map(renderListingCard).join("") : `<p class="empty-state">${dict.noResults}</p>`}
        </div>
      </section>
    </main>

    ${renderSelectedPanel(selected)}
  `;
};

const setFilter = (group, value) => {
  state[group] = value;
  state.selectedId = "";
  render();
};

const resetFilters = () => {
  state.query = "";
  state.category = "all";
  state.audience = "all";
  state.urgency = "all";
  state.type = "all";
  state.selectedId = "";
  state.moreFilters = false;
  render();
};

app.addEventListener("click", async (event) => {
  const filterButton = event.target.closest("[data-filter-group]");
  if (filterButton) {
    setFilter(filterButton.dataset.filterGroup, filterButton.dataset.filterValue);
    return;
  }

  const exampleButton = event.target.closest("[data-search-example]");
  if (exampleButton) {
    state.query = exampleButton.dataset.searchExample;
    state.selectedId = "";
    render();
    document.querySelector("#service-search")?.focus();
    return;
  }

  if (event.target.closest("[data-toggle-more-filters]")) {
    state.moreFilters = !state.moreFilters;
    render();
    return;
  }

  if (event.target.closest("[data-toggle-language]")) {
    state.lang = state.lang === "ar" ? "en" : "ar";
    render();
    return;
  }

  if (event.target.closest("[data-reset-filters]")) {
    resetFilters();
    return;
  }

  const listingButton = event.target.closest("[data-select-listing]");
  if (listingButton) {
    state.selectedId = listingButton.dataset.selectListing;
    render();
    document.querySelector("[data-close-detail]")?.focus();
    return;
  }

  if (event.target.closest("[data-close-detail]")) {
    state.selectedId = "";
    render();
    return;
  }

  const shareButton = event.target.closest("[data-share-listing]");
  if (shareButton) {
    const listing = listings.find((item) => item.id === shareButton.dataset.shareListing);
    if (!listing) return;
    const text = getShareText(listing);
    if (navigator.share) {
      await navigator.share({ title: getText(listing.title), text }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
  }
});

app.addEventListener("input", (event) => {
  if (!event.target.matches("#service-search")) return;

  const cursorPosition = event.target.selectionStart || event.target.value.length;
  state.query = event.target.value;
  state.selectedId = "";
  render();

  const searchInput = document.querySelector("#service-search");
  searchInput?.focus();
  searchInput?.setSelectionRange(cursorPosition, cursorPosition);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.selectedId) {
    state.selectedId = "";
    render();
  }
});

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { updateViaCache: "none" })
      .then((registration) => registration.update())
      .catch(() => {});
  });
}

showLaunchScreen();
render();
