import listings from "../data/sample-listings.json";
import "./styles.css";

const app = document.querySelector("#app");

const dictionaries = {
  ar: {
    appName: "خدمات القوع",
    eyebrow: "نموذج تجريبي لتحدي تطوير 2026",
    headline: "اكتشف الخدمات والفرص والفعاليات المحلية بسرعة",
    subhead:
      "دليل مجتمعي عربي أولاً، بدون تسجيل دخول، يساعد سكان القوع على الوصول إلى الخدمة المناسبة والتصرف فورًا عبر الاتصال أو واتساب أو الخريطة.",
    methodology: "مبني بمنهجية تقييم واضحة: مشكلة، معايير نجاح، اختبار، وأدلة.",
    searchLabel: "ابحث عن خدمة أو فعالية",
    searchPlaceholder: "مثال: عيادة، مدرسة، إبل، سوق",
    categoryLabel: "الفئة",
    audienceLabel: "الفئة المستفيدة",
    urgencyLabel: "الأولوية",
    typeLabel: "نوع القائمة",
    all: "الكل",
    results: "النتائج",
    reset: "إعادة ضبط",
    source: "المصدر",
    updated: "آخر تحديث",
    action: "اتخذ إجراء",
    call: "اتصال",
    whatsapp: "واتساب",
    map: "الخريطة",
    share: "مشاركة",
    details: "عرض التفاصيل",
    close: "إغلاق",
    noResults: "لا توجد نتائج مطابقة. جرّب فئة أو كلمة بحث أخرى.",
    sampleNotice: "هذه بيانات تجريبية للعرض وليست سجلات رسمية معتمدة.",
    clicksProof: "مسار العرض: الأسرة ← الرعاية الصحية ← عيادة القوع الصحية",
    metricsListings: "قائمة",
    metricsCategories: "فئات",
    metricsTypes: "أنواع",
    offline: "جاهز مبدئيًا للتحميل السريع والعمل من رابط مشترك",
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
    eyebrow: "Tatweer Hackathon 2026 prototype",
    headline: "Find local services, opportunities, and events fast",
    subhead:
      "An Arabic-first, no-login community directory that helps Al Qua'a residents find the right listing and act through call, WhatsApp, or map.",
    methodology: "Built with an evaluation-first method: problem, success criteria, testing, and evidence.",
    searchLabel: "Search services or events",
    searchPlaceholder: "Try clinic, school, camel, market",
    categoryLabel: "Category",
    audienceLabel: "Audience",
    urgencyLabel: "Priority",
    typeLabel: "Listing type",
    all: "All",
    results: "Results",
    reset: "Reset",
    source: "Source",
    updated: "Last updated",
    action: "Take action",
    call: "Call",
    whatsapp: "WhatsApp",
    map: "Map",
    share: "Share",
    details: "Details",
    close: "Close",
    noResults: "No matching results. Try another category or search term.",
    sampleNotice: "Sample demo data only. These are not official verified records.",
    clicksProof: "Demo path: Families → Healthcare → Al Qua'a Health Clinic",
    metricsListings: "listings",
    metricsCategories: "categories",
    metricsTypes: "types",
    offline: "Fast, no-login access from a shared link",
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
  selectedId: "health-clinic-001"
};

const getText = (value) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[state.lang] || value.en || value.ar || "";
};

const unique = (items) => [...new Set(items)];

const categoryKeys = unique(listings.map((item) => item.category));
const audienceKeys = unique(listings.flatMap((item) => item.audience));
const urgencyKeys = ["urgent", "this-week", "normal"];
const typeKeys = ["service", "event", "opportunity"];

const normalize = (value) => String(value || "").toLowerCase().trim();
const escapeAttribute = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const listingMatchesQuery = (listing, query) => {
  if (!query) return true;
  const haystack = [
    listing.title.en,
    listing.title.ar,
    listing.summary.en,
    listing.summary.ar,
    listing.category,
    listing.type,
    listing.location,
    ...listing.audience,
    ...listing.tags
  ]
    .map(normalize)
    .join(" ");

  return haystack.includes(normalize(query));
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

const createChip = ({ group, value, label, active }) => `
  <button class="chip ${active ? "is-active" : ""}" type="button" data-filter-group="${group}" data-filter-value="${value}">
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
  state.lang === "ar"
    ? `${getText(listing.title)} - ${getText(listing.summary)}\n${listing.location}\n${listing.mapUrl}`
    : `${getText(listing.title)} - ${getText(listing.summary)}\n${listing.location}\n${listing.mapUrl}`;

const renderListingCard = (listing) => {
  const selected = listing.id === state.selectedId;
  const audienceLabels = listing.audience.map((key) => t().audiences[key] || key).join(" · ");

  return `
    <article class="listing-card ${selected ? "is-selected" : ""}">
      <button class="listing-main" type="button" data-select-listing="${listing.id}" aria-expanded="${selected}">
        <span class="listing-type">${t().types[listing.type]}</span>
        <h3>${getText(listing.title)}</h3>
        <p>${getText(listing.summary)}</p>
        <span class="listing-meta">${t().categories[listing.category]} · ${audienceLabels}</span>
      </button>
      <div class="listing-actions" aria-label="${t().action}">
        <a href="tel:${listing.contact}" aria-label="${t().call}: ${getText(listing.title)}">${t().call}</a>
        <a href="${listing.whatsapp}" target="_blank" rel="noreferrer" aria-label="${t().whatsapp}: ${getText(listing.title)}">${t().whatsapp}</a>
        <a href="${listing.mapUrl}" target="_blank" rel="noreferrer" aria-label="${t().map}: ${getText(listing.title)}">${t().map}</a>
      </div>
    </article>
  `;
};

const renderSelectedPanel = (listing) => {
  if (!listing) return "";
  const actionText = t().action;

  return `
    <aside class="detail-panel" aria-label="${t().details}">
      <div class="detail-header">
        <span class="listing-type">${t().types[listing.type]}</span>
        <button class="ghost-button" type="button" data-close-detail>${t().close}</button>
      </div>
      <h2>${getText(listing.title)}</h2>
      <p>${getText(listing.summary)}</p>
      <dl class="detail-list">
        <div><dt>${t().categoryLabel}</dt><dd>${t().categories[listing.category]}</dd></div>
        <div><dt>${t().audienceLabel}</dt><dd>${listing.audience.map((key) => t().audiences[key]).join(" · ")}</dd></div>
        <div><dt>${t().urgencyLabel}</dt><dd>${t().urgencies[listing.urgency]}</dd></div>
        <div><dt>${t().updated}</dt><dd>${listing.lastUpdated}</dd></div>
        <div><dt>${t().source}</dt><dd>${listing.source}</dd></div>
      </dl>
      <div class="detail-actions" aria-label="${actionText}">
        <a class="primary-action" href="tel:${listing.contact}">${t().call}</a>
        <a class="primary-action" href="${listing.whatsapp}" target="_blank" rel="noreferrer">${t().whatsapp}</a>
        <a class="primary-action" href="${listing.mapUrl}" target="_blank" rel="noreferrer">${t().map}</a>
        <button class="primary-action" type="button" data-share-listing="${listing.id}">${t().share}</button>
      </div>
    </aside>
  `;
};

const render = () => {
  const dict = t();
  const filtered = getFilteredListings();
  const selected = state.selectedId ? listings.find((listing) => listing.id === state.selectedId) || filtered[0] : null;
  const categoryCount = categoryKeys.length;
  const typeCount = typeKeys.length;

  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";

  app.innerHTML = `
    <header class="site-header">
      <div>
        <p class="eyebrow">${dict.eyebrow}</p>
        <h1>${dict.appName}</h1>
      </div>
      <button class="language-toggle" type="button" data-toggle-language>
        ${state.lang === "ar" ? "English" : "العربية"}
      </button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${dict.offline}</p>
          <h2>${dict.headline}</h2>
          <p>${dict.subhead}</p>
          <div class="method-chip">${dict.methodology}</div>
        </div>
        <div class="metrics" aria-label="Project metrics">
          <div><strong>${listings.length}</strong><span>${dict.metricsListings}</span></div>
          <div><strong>${categoryCount}</strong><span>${dict.metricsCategories}</span></div>
          <div><strong>${typeCount}</strong><span>${dict.metricsTypes}</span></div>
        </div>
      </section>

      <section class="discovery-shell" aria-label="${dict.results}">
        <div class="filters-panel">
          <label class="search-label" for="service-search">${dict.searchLabel}</label>
          <input
            id="service-search"
            class="search-input"
            type="search"
            value="${escapeAttribute(state.query)}"
            placeholder="${dict.searchPlaceholder}"
            autocomplete="off"
          />
          ${renderChipGroup({
            label: dict.categoryLabel,
            group: "category",
            keys: categoryKeys,
            labels: dict.categories,
            selected: state.category
          })}
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
          <button class="reset-button" type="button" data-reset-filters>${dict.reset}</button>
        </div>

        <div class="results-panel">
          <div class="results-header">
            <div>
              <p class="eyebrow">${dict.clicksProof}</p>
              <h2>${filtered.length} ${dict.results}</h2>
            </div>
            <p>${dict.sampleNotice}</p>
          </div>
          <div class="listings-grid">
            ${filtered.length ? filtered.map(renderListingCard).join("") : `<p class="empty-state">${dict.noResults}</p>`}
          </div>
        </div>

        ${renderSelectedPanel(selected)}
      </section>
    </main>
  `;
};

const setFilter = (group, value) => {
  state[group] = value;
  const filtered = getFilteredListings();
  state.selectedId = filtered[0]?.id || "";
  render();
};

app.addEventListener("click", async (event) => {
  const filterButton = event.target.closest("[data-filter-group]");
  if (filterButton) {
    setFilter(filterButton.dataset.filterGroup, filterButton.dataset.filterValue);
    return;
  }

  if (event.target.closest("[data-toggle-language]")) {
    state.lang = state.lang === "ar" ? "en" : "ar";
    render();
    return;
  }

  if (event.target.closest("[data-reset-filters]")) {
    state.query = "";
    state.category = "all";
    state.audience = "all";
    state.urgency = "all";
    state.type = "all";
    state.selectedId = "health-clinic-001";
    render();
    return;
  }

  const listingButton = event.target.closest("[data-select-listing]");
  if (listingButton) {
    state.selectedId = listingButton.dataset.selectListing;
    render();
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
  if (event.target.matches("#service-search")) {
    state.query = event.target.value;
    const filtered = getFilteredListings();
    state.selectedId = filtered[0]?.id || "";
    render();
  }
});

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

render();
