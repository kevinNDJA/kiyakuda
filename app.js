const PRODUCTS = [
    {
        id: "KYK-A001",
        name: "Adaptateur secteur 20W",
        price: 8500,
        stock: 18,
        category: "Accessoire",
        description: "Adaptateur compact pense pour les clients qui veulent une recharge propre, rapide et facile a glisser dans un sac. Son format reste discret mais sa finition garde un rendu premium.",
        variants: ["Noir graphite", "Ivoire mat"],
        highlights: [
            "Recharge rapide et sortie stable pour usage quotidien.",
            "Format de poche pratique pour les deplacements.",
            "Finition sobre adaptee a une boutique premium."
        ],
        palette: ["#efc279", "#8d4623"]
    },
    {
        id: "KYK-B002",
        name: "Balance cuisine digitale",
        price: 14500,
        stock: 9,
        category: "Maison",
        description: "Cette balance cuisine digitale aide a preparer les portions avec precision. Elle convient aux clients qui veulent un accessoire simple, net et fiable pour leur cuisine ou leur petit atelier culinaire.",
        variants: ["Blanc sable"],
        highlights: [
            "Mesure stable pour portions et recettes.",
            "Surface lisse facile a nettoyer.",
            "Design discret pour cuisine moderne."
        ],
        palette: ["#f2d6bf", "#7b5a48"]
    },
    {
        id: "KYK-C003",
        name: "Casque audio sans fil",
        price: 32000,
        stock: 12,
        category: "Audio",
        description: "Casque audio au style urbain, concu pour ecouter musique, videos et appels avec plus de confort. Le coussinage doux et la silhouette elegante renforcent l'impression de produit bien fini.",
        variants: ["Noir nuit", "Beige sable"],
        highlights: [
            "Confort d'ecoute longue duree.",
            "Bonne isolation pour appels et musique.",
            "Look moderne facile a mettre en valeur."
        ],
        palette: ["#4f5968", "#c59b6a"]
    },
    {
        id: "KYK-D004",
        name: "Diffuseur d'aromes premium",
        price: 26500,
        stock: 7,
        category: "Bien-etre",
        description: "Diffuseur a l'allure elegante, imagine pour installer une ambiance calme dans une chambre, un salon ou un bureau. Le produit donne tout de suite une impression de soin et de raffinement.",
        variants: ["Sable dore", "Bois fume"],
        highlights: [
            "Presence visuelle douce et haut de gamme.",
            "Format stable pour chambre, bureau ou salon.",
            "Convient aux routines bien-etre et cadeaux."
        ],
        palette: ["#d9b896", "#5a3f32"]
    },
    {
        id: "KYK-E005",
        name: "Etagere de rangement pliable",
        price: 28500,
        stock: 6,
        category: "Maison",
        description: "Etagere pliable pour organiser chaussures, accessoires ou linge. Elle offre une solution pratique aux clients qui aiment l'ordre tout en gardant un rendu propre dans leur interieur.",
        variants: ["Chene clair", "Noir mat"],
        highlights: [
            "Structure facile a installer.",
            "Gain de place pour maison ou boutique.",
            "Presentation nette de plusieurs objets."
        ],
        palette: ["#dcb786", "#645243"]
    },
    {
        id: "KYK-G006",
        name: "Gourde thermique 1L",
        price: 12000,
        stock: 22,
        category: "Quotidien",
        description: "Gourde thermique au format genereux pour garder les boissons a bonne temperature pendant les trajets, le sport ou le bureau. La prise en main reste agreable et la silhouette inspire confiance.",
        variants: ["Olive satine", "Bleu profond", "Argent brosse"],
        highlights: [
            "Bonne contenance pour journee complete.",
            "Corps solide adapte aux deplacements.",
            "Couleurs utiles pour une vitrine variee."
        ],
        palette: ["#7ea088", "#204158"]
    },
    {
        id: "KYK-L007",
        name: "Lampe de bureau LED",
        price: 19500,
        stock: 11,
        category: "Bureau",
        description: "Lampe LED de bureau pour eclairage plus propre lors du travail, de la lecture ou de l'etude. Son design structure l'espace et contribue a un bureau mieux organise.",
        variants: ["Noir carbone", "Blanc craie"],
        highlights: [
            "Eclairage net pour travail quotidien.",
            "Silhouette fine et stable.",
            "Produit facile a mettre en scene sur photo."
        ],
        palette: ["#808596", "#d7c7b1"]
    },
    {
        id: "KYK-O008",
        name: "Organisateur de voyage",
        price: 13500,
        stock: 15,
        category: "Voyage",
        description: "Organisateur pense pour rassembler documents, cartes, accessoires et petits objets essentiels. Il renforce l'idee de preparation et de maitrise avant un depart ou un deplacement professionnel.",
        variants: ["Marron tabac", "Noir classique"],
        highlights: [
            "Organisation simple des indispensables.",
            "Format compact a glisser dans un bagage.",
            "Allure serieuse adaptee a un cadeau."
        ],
        palette: ["#bf8f67", "#34373d"]
    },
    {
        id: "KYK-S009",
        name: "Sac cabas signature",
        price: 22500,
        stock: 10,
        category: "Mode",
        description: "Sac cabas souple et visuel, ideal pour les clientes qui cherchent un produit pratique mais presentable. Il se tient bien, accompagne les sorties du quotidien et donne une belle presence a la collection.",
        variants: ["Cafe intense", "Beige naturel"],
        highlights: [
            "Bonne contenance pour usage quotidien.",
            "Presence forte en vitrine et sur fiche produit.",
            "Variantes faciles a proposer en boutique."
        ],
        palette: ["#9f6c50", "#dcc39e"]
    },
    {
        id: "KYK-T010",
        name: "Trousse beauty week-end",
        price: 11000,
        stock: 14,
        category: "Beaute",
        description: "Trousse de rangement pour produits de toilette, maquillage ou accessoires de voyage. Elle aide a composer une offre pratique, feminine et facile a commander rapidement.",
        variants: ["Rose poudre", "Taupe moderne"],
        highlights: [
            "Format utile pour week-end et deplacements.",
            "Rangement propre de petits produits.",
            "Produit cadeau facile a recommander."
        ],
        palette: ["#d9a3a3", "#8f7772"]
    }
];

const FEATURED_IDS = ["KYK-C003", "KYK-G006", "KYK-S009", "KYK-T010"];
const SHIPPING_REGIONS = [
    { id: "kara", label: "Region de la Kara", fee: 1000, eta: "24h a 48h" },
    { id: "savanes", label: "Region des Savanes", fee: 1500, eta: "24h a 72h" },
    { id: "centrale", label: "Region Centrale", fee: 1800, eta: "24h a 72h" },
    { id: "plateaux", label: "Region des Plateaux", fee: 2500, eta: "2 a 4 jours" },
    { id: "maritime", label: "Region Maritime", fee: 3200, eta: "3 a 5 jours" },
    { id: "lome", label: "Lome et Golfe", fee: 3500, eta: "3 a 5 jours" }
];

const APPS_SCRIPT_URL = "";
const PAYMENT_PAGES = {
    mixx: "paiement-mixx.html",
    moov: "paiement-moov.html",
    visa: "paiement-visa.html"
};
const SHOP_LINKS = {
    whatsapp: "https://wa.me/22879664863",
    telegram: "https://t.me/BahamKevin",
    phone: "tel:+22879664863",
    email: "mailto:bahamkevinsonn@gmail.com"
};

const STORAGE_KEYS = {
    cart: "kiyakuda-cart",
    order: "kiyakuda-last-order",
    shipping: "kiyakuda-shipping-region",
    theme: "kiyakuda-theme"
};

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initBackgroundVideo();
    initNavigation();
    initMarketplaceChrome();
    markCurrentPage();
    initStaticIcons();
    initHomeIntro();
    initRevealAnimations();
    renderCartBadges();
    initFeaturedProducts();
    initCatalogPage();
    initProductPage();
    initCartPage();
    initPaymentChoicePage();
    initPaymentPage();
    initPaymentReturnPage();
});

function initBackgroundVideo() {
    const wrappers = document.querySelectorAll(".bg-video-wrap");
    if (!wrappers.length) return;

    if (document.body.dataset.page !== "home") {
        wrappers.forEach((wrapper) => wrapper.classList.add("is-disabled"));
        return;
    }

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const shouldDisableVideo =
        window.matchMedia("(max-width: 760px)").matches
        || window.matchMedia("(prefers-reduced-motion: reduce)").matches
        || Boolean(connection && (connection.saveData || /2g/.test(connection.effectiveType || "")));

    wrappers.forEach((wrapper) => {
        const video = wrapper.querySelector("[data-bg-video]");
        const source = video ? video.querySelector("source[data-src]") : null;
        if (!video || !source) return;

        if (shouldDisableVideo) {
            wrapper.classList.add("is-disabled");
            return;
        }

        const activateVideo = () => {
            if (video.dataset.loaded === "true") return;
            source.src = source.dataset.src || "";
            video.load();
            video.dataset.loaded = "true";

            video.addEventListener("canplay", () => {
                wrapper.classList.add("is-active");
                const playPromise = video.play();
                if (playPromise && typeof playPromise.catch === "function") {
                    playPromise.catch(() => {});
                }
            }, { once: true });
        };

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(activateVideo, { timeout: 1200 });
        } else {
            window.setTimeout(activateVideo, 500);
        }
    });
}

function initStaticIcons() {
    document.querySelectorAll("[data-icon]").forEach((node) => {
        node.innerHTML = icon(node.getAttribute("data-icon"), node.dataset.iconClass || "icon-svg");
    });
}

function initTheme() {
    const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);
    const theme = storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    applyTheme(theme);

    const nav = document.querySelector(".navbar");
    const navLinks = document.querySelector("[data-nav-links]");
    if (!nav || !navLinks || nav.querySelector("[data-theme-toggle]")) return;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "theme-toggle";
    toggle.setAttribute("data-theme-toggle", "true");
    nav.appendChild(toggle);

    const render = () => {
        const activeTheme = document.body.dataset.theme === "dark" ? "dark" : "light";
        toggle.innerHTML = icon(activeTheme === "dark" ? "sun" : "moon");
        toggle.setAttribute("aria-label", activeTheme === "dark" ? "Passer en mode clair" : "Passer en mode sombre");
        toggle.setAttribute("title", activeTheme === "dark" ? "Mode clair" : "Mode sombre");
    };

    render();
    toggle.addEventListener("click", () => {
        const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        render();
    });
}

function applyTheme(theme) {
    document.body.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEYS.theme, theme);
}

function initMarketplaceChrome() {
    decorateNavigation();
    decorateFooters();
}

function decorateNavigation() {
    const navMap = {
        "index.html": { label: "Accueil", icon: "home" },
        "boutique.html": { label: "Boutique", icon: "shop" },
        "panier.html": { label: "Panier", icon: "cart" },
        "contact.html": { label: "Contact", icon: "phone" }
    };

    document.querySelectorAll("[data-nav-links] a").forEach((link) => {
        if (link.dataset.chromeReady === "true") return;

        const href = link.getAttribute("href");
        const cartBadge = link.querySelector("[data-cart-count]");
        const config = navMap[href];
        if (!config) return;

        link.dataset.chromeReady = "true";
        link.setAttribute("aria-label", config.label);
        link.setAttribute("title", config.label);
        link.innerHTML = `<span class="nav-icon-wrap">${icon(config.icon)}</span><span class="nav-label">${config.label}</span>`;
        if (cartBadge) link.appendChild(cartBadge);
    });
}

function decorateFooters() {
    document.querySelectorAll(".footer-shell").forEach((footer) => {
        const meta = footer.querySelector(".footer-meta");
        if (meta) meta.remove();

        const copy = footer.querySelector(".footer-top p");
        if (copy) {
            copy.textContent = "Boutique en ligne de produits physiques, validation manuelle des commandes et paiements selon le mode choisi.";
        }

        if (footer.querySelector("[data-footer-market]")) return;

        const wrapper = document.createElement("div");
        wrapper.setAttribute("data-footer-market", "true");
        wrapper.className = "footer-market";
        wrapper.innerHTML = `
            <div class="footer-logos">
                <img class="brand-logo-image" src="logo-mixx.svg" alt="Mixx Togo">
                <img class="brand-logo-image" src="logo-moov.svg" alt="Moov Togo">
                <img class="brand-logo-image" src="logo-visa.svg" alt="Visa">
            </div>
            <div class="footer-socials">
                <a class="social-logo" href="${SHOP_LINKS.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="logo-whatsapp.svg" alt="WhatsApp"></a>
                <a class="social-logo" href="${SHOP_LINKS.telegram}" target="_blank" rel="noopener" aria-label="Telegram"><img src="logo-telegram.svg" alt="Telegram"></a>
                <a class="social-logo" href="${SHOP_LINKS.phone}" aria-label="Appel"><img src="logo-call.svg" alt="Appel"></a>
            </div>
            <p class="legal-note">Copyright &copy; ${new Date().getFullYear()} Kiyakuda.</p>
        `;
        footer.appendChild(wrapper);
    });
}

function initHomeIntro() {
    if (document.body.dataset.page !== "home") return;
    document.body.classList.add("home-cinema");
}

function initNavigation() {
    const button = document.querySelector("[data-menu-toggle]");
    const links = document.querySelector("[data-nav-links]");
    if (!button || !links) return;

    renderMenuToggle(button, false);

    button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        links.classList.toggle("is-open", !expanded);
        renderMenuToggle(button, !expanded);
    });

    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            links.classList.remove("is-open");
            button.setAttribute("aria-expanded", "false");
            renderMenuToggle(button, false);
        });
    });
}

function renderMenuToggle(button, expanded) {
    button.innerHTML = icon(expanded ? "close" : "menu");
    button.setAttribute("aria-label", expanded ? "Fermer le menu" : "Ouvrir le menu");
    button.setAttribute("title", expanded ? "Fermer le menu" : "Ouvrir le menu");
}

function markCurrentPage() {
    const page = document.body.dataset.page;
    document.querySelectorAll("[data-nav-links] a").forEach((link) => {
        const href = link.getAttribute("href");
        const isActive =
            (page === "home" && href === "index.html")
            || (page === "catalog" && href === "boutique.html")
            || (page === "cart" && href === "panier.html")
            || (page === "payment-choice" && href === "panier.html")
            || (page === "payment" && href === "panier.html")
            || (page === "payment-return" && href === "panier.html")
            || (page === "contact" && href === "contact.html");
        link.classList.toggle("is-active", isActive);
    });
}

function initRevealAnimations() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    items.forEach((item) => observer.observe(item));
}

function initFeaturedProducts() {
    const container = document.querySelector("[data-featured-products]");
    if (!container) return;

    const featured = sortProducts(PRODUCTS).filter((product) => FEATURED_IDS.includes(product.id));
    container.innerHTML = featured.map((product) => buildProductCard(product)).join("");
    bindCatalogActions(container);
}

function initCatalogPage() {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;

    const emptyState = document.querySelector("[data-empty-state]");
    const counter = document.querySelector("[data-result-count]");
    const searchInput = document.querySelector("[data-product-search]");
    const filterBar = document.querySelector("[data-category-filters]");
    const products = sortProducts(PRODUCTS);
    let activeCategory = "all";

    if (filterBar) {
        const categories = ["all", ...new Set(products.map((product) => product.category))];
        filterBar.innerHTML = categories.map((category) => {
            const label = category === "all" ? "Tout" : category;
            return `<button class="ghost-button filter-chip${category === "all" ? " is-selected" : ""}" type="button" data-category-chip="${escapeAttribute(category)}">${escapeHtml(label)}</button>`;
        }).join("");
    }

    const render = (query = "") => {
        const lowered = query.trim().toLowerCase();
        const filtered = products.filter((product) => {
            const categoryMatch = activeCategory === "all" || product.category === activeCategory;
            return categoryMatch && (
                product.name.toLowerCase().includes(lowered)
                || product.id.toLowerCase().includes(lowered)
                || product.category.toLowerCase().includes(lowered)
            );
        });

        grid.innerHTML = filtered.map((product) => buildProductCard(product)).join("");
        bindCatalogActions(grid);
        if (counter) counter.textContent = `${filtered.length} produit${filtered.length > 1 ? "s" : ""}`;
        if (emptyState) emptyState.classList.toggle("is-hidden", filtered.length !== 0);
    };

    render();
    if (searchInput) searchInput.addEventListener("input", (event) => render(event.target.value));
    if (filterBar) {
        filterBar.querySelectorAll("[data-category-chip]").forEach((button) => {
            button.addEventListener("click", () => {
                activeCategory = button.getAttribute("data-category-chip");
                filterBar.querySelectorAll("[data-category-chip]").forEach((item) => {
                    item.classList.toggle("is-selected", item === button);
                });
                render(searchInput ? searchInput.value : "");
            });
        });
    }
}

function initProductPage() {
    const mount = document.querySelector("[data-product-detail]");
    if (!mount) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const product = PRODUCTS.find((item) => item.id === id);

    if (!product) {
        mount.innerHTML = `
            <div class="empty-state">
                <span class="eyebrow">Produit indisponible</span>
                <h2>Il semble que cet article ne soit pas disponible.</h2>
                <p>La reference que vous avez ouverte ne correspond pas a un produit actif du catalogue. Vous pouvez revenir a la boutique pour consulter les produits actuellement proposes.</p>
                <a class="primary-button" href="boutique.html">Retour a la boutique</a>
            </div>
        `;
        return;
    }

    document.title = `${product.name} | Kiyakuda`;
    const stockClass = product.stock <= 8 ? "stock-pill is-low" : "stock-pill";
    const variantOptions = product.variants.map((variant) => `<option value="${escapeAttribute(variant)}">${escapeHtml(variant)}</option>`).join("");

    mount.innerHTML = `
        <article class="detail-shell reveal is-visible">
            <div class="detail-media">
                <img class="product-art" src="${buildProductArt(product)}" alt="${escapeAttribute(product.name)}" loading="lazy">
                <div class="badge-line">
                    <span class="badge">${escapeHtml(product.id)}</span>
                    <span class="${stockClass}">${icon("box", "tag-icon")}${product.stock} en stock</span>
                </div>
                <div class="product-tags">
                    <span class="product-tag">${icon("layers", "tag-icon")}${product.variants.length} variante${product.variants.length > 1 ? "s" : ""}</span>
                    <span class="product-tag">${icon("truck", "tag-icon")}Livraison selon region</span>
                </div>
            </div>
            <div class="detail-copy">
                <span class="eyebrow">${escapeHtml(product.category)}</span>
                <h1>${escapeHtml(product.name)}</h1>
                <p class="price-tag">${formatMoney(product.price)}</p>
                <p class="copy-muted">${escapeHtml(product.description)}</p>
                <div class="variant-box">
                    <div class="field">
                        <label for="product-variant">Variantes disponibles</label>
                        <select id="product-variant" data-product-variant>${variantOptions}</select>
                    </div>
                </div>
                <div class="quantity-box">
                    <label for="product-quantity">Quantite souhaitee</label>
                    <div class="qty-stepper">
                        <button class="icon-button" type="button" data-qty-minus aria-label="Reduire la quantite">-</button>
                        <input id="product-quantity" type="number" min="1" max="${product.stock}" value="1" data-qty-input>
                        <button class="icon-button" type="button" data-qty-plus aria-label="Augmenter la quantite">+</button>
                    </div>
                </div>
                <div class="detail-actions">
                    <button class="primary-button" type="button" data-add-detail>${icon("cart", "tag-icon")}Ajouter au panier</button>
                    <button class="secondary-button" type="button" data-buy-now>${icon("wallet", "tag-icon")}Acheter maintenant</button>
                </div>
            </div>
        </article>
    `;

    const qtyInput = mount.querySelector("[data-qty-input]");
    const variantInput = mount.querySelector("[data-product-variant]");
    mount.querySelector("[data-qty-minus]").addEventListener("click", () => updateQuantityInput(qtyInput, -1, product.stock));
    mount.querySelector("[data-qty-plus]").addEventListener("click", () => updateQuantityInput(qtyInput, 1, product.stock));
    qtyInput.addEventListener("input", () => {
        qtyInput.value = clampQuantity(qtyInput.value, product.stock);
    });

    mount.querySelector("[data-add-detail]").addEventListener("click", () => {
        addToCart(product.id, Number(qtyInput.value), variantInput.value);
    });

    mount.querySelector("[data-buy-now]").addEventListener("click", () => {
        addToCart(product.id, Number(qtyInput.value), variantInput.value);
        window.location.href = "panier.html";
    });
}

function initCartPage() {
    const cartList = document.querySelector("[data-cart-list]");
    if (!cartList) return;

    const shippingSelect = document.querySelector("[data-shipping-region]");
    const subtotalNode = document.querySelector("[data-subtotal]");
    const shippingNode = document.querySelector("[data-shipping-fee]");
    const totalNode = document.querySelector("[data-total]");
    const statusPanel = document.querySelector("[data-order-status]");
    const form = document.querySelector("[data-order-form]");
    const checkoutButton = document.querySelector("[data-checkout-button]");
    const emptyState = document.querySelector("[data-cart-empty]");

    if (shippingSelect) {
        shippingSelect.innerHTML = SHIPPING_REGIONS.map((region) => {
            return `<option value="${region.id}">${escapeHtml(region.label)} - ${formatMoney(region.fee)}</option>`;
        }).join("");
        shippingSelect.value = getStoredShippingRegion();
    }

    const render = () => {
        const cartItems = getDetailedCart();
        const region = getShippingRegion(shippingSelect ? shippingSelect.value : getStoredShippingRegion());
        const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
        const total = subtotal + region.fee;

        cartList.innerHTML = cartItems.map((item) => buildCartItem(item)).join("");
        if (subtotalNode) subtotalNode.textContent = formatMoney(subtotal);
        if (shippingNode) shippingNode.textContent = `${formatMoney(region.fee)} (${region.label})`;
        if (totalNode) totalNode.textContent = formatMoney(total);
        if (emptyState) emptyState.classList.toggle("is-hidden", cartItems.length !== 0);
        if (checkoutButton) checkoutButton.disabled = cartItems.length === 0;

        bindCartActions(cartList, render);
        renderCartBadges();
        updatePaymentLinks([], total);
    };

    render();

    if (shippingSelect) {
        shippingSelect.addEventListener("change", () => {
            saveJson(STORAGE_KEYS.shipping, shippingSelect.value);
            render();
        });
    }

    if (checkoutButton && form) {
        checkoutButton.addEventListener("click", async () => {
            if (checkoutButton.dataset.loading === "true") return;

            const cartItems = getDetailedCart();
            if (!cartItems.length) {
                showStatus(statusPanel, "Veuillez ajouter au moins un produit au panier avant de passer au paiement.", "error");
                return;
            }

            const formData = new FormData(form);
            if (!formData.get("delivery-policy") || !formData.get("privacy-policy")) {
                showStatus(statusPanel, "La commande ne peut pas etre envoyee sans acceptation de la politique de livraison et de la politique de confidentialite.", "error");
                return;
            }

            const customer = {
                lastName: String(formData.get("last-name") || "").trim(),
                firstName: String(formData.get("first-name") || "").trim(),
                city: String(formData.get("city") || "").trim(),
                phone: String(formData.get("phone") || "").trim(),
                email: String(formData.get("email") || "").trim()
            };

            if (!customer.lastName || !customer.firstName || !customer.city || !customer.phone || !customer.email) {
                showStatus(statusPanel, "Veuillez renseigner nom, prenom, ville, email et numero de telephone avant le paiement.", "error");
                return;
            }

            const region = getShippingRegion(shippingSelect ? shippingSelect.value : getStoredShippingRegion());
            const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
            const total = subtotal + region.fee;
            const order = {
                reference: buildOrderReference(),
                status: "Commande en attente de validation",
                createdAt: new Date().toISOString(),
                customer,
                shipping: region,
                subtotal,
                total,
                items: cartItems.map((item) => ({
                    id: item.product.id,
                    name: item.product.name,
                    variant: item.variant,
                    qty: item.qty,
                    unitPrice: item.product.price
                }))
            };

            checkoutButton.dataset.loading = "true";
            checkoutButton.disabled = true;
            saveJson(STORAGE_KEYS.order, order);

            try {
                await submitOrderToBackoffice(order);
            } catch (error) {
                // Le parcours client continue avec la commande locale si le backoffice n'est pas encore actif.
            }

            clearCart();
            render();
            flashMessage("Commande enregistree. Choisissez maintenant le paiement.");
            window.location.href = "paiement.html";
        });
    }
}

function initPaymentChoicePage() {
    if (document.body.dataset.page !== "payment-choice") return;

    const order = loadJson(STORAGE_KEYS.order, null);
    const noOrder = document.querySelector("[data-no-order]");
    const orderPanel = document.querySelector("[data-order-panel]");
    const totalNodes = document.querySelectorAll("[data-payment-choice-total]");
    const refNode = document.querySelector("[data-payment-choice-order]");
    const mixxLink = document.querySelector("[data-direct-mixx]");
    const moovLink = document.querySelector("[data-direct-moov]");
    const visaButton = document.querySelector("[data-direct-visa]");
    const mixxAmount = document.querySelector("[data-mixx-amount]");
    const moovAmount = document.querySelector("[data-moov-amount]");
    const mobileDevice = isMobileDevice();

    if (!order) {
        if (noOrder) noOrder.classList.remove("is-hidden");
        if (orderPanel) orderPanel.classList.add("is-hidden");
        return;
    }

    if (noOrder) noOrder.classList.add("is-hidden");
    if (orderPanel) orderPanel.classList.remove("is-hidden");

    totalNodes.forEach((node) => {
        node.textContent = formatMoney(order.total);
    });
    if (refNode) refNode.textContent = order.reference;
    if (mixxAmount) mixxAmount.textContent = formatMoney(order.total);
    if (moovAmount) moovAmount.textContent = formatMoney(order.total);

    if (mixxLink) {
        mixxLink.setAttribute("href", buildPaymentPageHref("mixx", order, { launch: mobileDevice, handoff: !mobileDevice }));
    }
    if (moovLink) {
        moovLink.setAttribute("href", buildPaymentPageHref("moov", order, { launch: mobileDevice, handoff: !mobileDevice }));
    }
    if (visaButton) {
        visaButton.setAttribute("href", buildPaymentPageHref("visa", order));
    }
}

function initPaymentPage() {
    const method = document.body.dataset.payment;
    if (!method) return;

    const config = getPaymentMethodConfig(method);
    const order = getPaymentContext();
    const noOrder = document.querySelector("[data-no-order]");
    const panel = document.querySelector("[data-payment-panel]");
    const logo = document.querySelector("[data-payment-logo]");
    const label = document.querySelector("[data-payment-label]");
    const title = document.querySelector("[data-payment-title]");
    const helper = document.querySelector("[data-payment-helper]");
    const amount = document.querySelector("[data-payment-amount]");
    const reference = document.querySelector("[data-payment-reference]");
    const shipping = document.querySelector("[data-payment-region]");
    const merchantRow = document.querySelector("[data-payment-merchant-row]");
    const merchant = document.querySelector("[data-payment-merchant]");
    const note = document.querySelector("[data-payment-note]");
    const mobileLinkField = document.querySelector("[data-payment-mobile-link]");
    const mobileLinkWrap = document.querySelector("[data-payment-mobile-link-wrap]");
    const primaryAction = document.querySelector("[data-payment-action]");
    const secondaryAction = document.querySelector("[data-payment-secondary-action]");
    const isPhone = isMobileDevice();
    const params = new URLSearchParams(window.location.search);

    if (!config || !panel || !primaryAction) return;

    if (!order) {
        if (noOrder) noOrder.classList.remove("is-hidden");
        panel.classList.add("is-hidden");
        return;
    }

    if (noOrder) noOrder.classList.add("is-hidden");
    panel.classList.remove("is-hidden");

    if (logo) {
        logo.src = config.logo;
        logo.alt = config.label;
    }
    if (label) label.textContent = config.label;
    if (title) title.textContent = config.title;
    if (helper) helper.textContent = config.helper;
    if (amount) amount.textContent = formatMoney(order.total);
    if (reference) reference.textContent = order.reference;
    if (shipping) shipping.textContent = order.shippingLabel || "Region selectionnee";

    if (config.type === "mobile") {
        const launchHref = config.launch(order);
        const phoneReceiptUrl = buildPaymentPageHref(method, order, { launch: true });
        const handoffLabel = `Envoyer vers mon telephone`;

        if (merchantRow) merchantRow.classList.remove("is-hidden");
        if (merchant) merchant.textContent = config.merchant;
        if (mobileLinkField) mobileLinkField.value = phoneReceiptUrl;

        if (isPhone) {
            if (mobileLinkWrap) mobileLinkWrap.classList.add("is-hidden");
            if (secondaryAction) secondaryAction.classList.add("is-hidden");
            primaryAction.setAttribute("href", launchHref);
            primaryAction.innerHTML = `${icon("phone", "tag-icon")}Finaliser sur ce telephone`;

            const launchKey = `${method}:${order.reference}:launch`;
            if (params.get("launch") === "1" && window.sessionStorage.getItem(launchKey) !== "done") {
                window.sessionStorage.setItem(launchKey, "done");
                window.setTimeout(() => {
                    window.location.href = launchHref;
                }, 420);
            }
        } else {
            primaryAction.setAttribute("href", phoneReceiptUrl);
            primaryAction.innerHTML = `${icon("share", "tag-icon")}${handoffLabel}`;
            primaryAction.addEventListener("click", async (event) => {
                event.preventDefault();
                await handoffPaymentToPhone(phoneReceiptUrl);
            });

            if (secondaryAction) {
                secondaryAction.classList.remove("is-hidden");
                secondaryAction.type = "button";
                secondaryAction.innerHTML = `${icon("copy", "tag-icon")}Copier le lien mobile`;
                secondaryAction.addEventListener("click", () => {
                    copyText(phoneReceiptUrl);
                    flashMessage("Lien mobile copie.");
                });
            }

            if (params.get("handoff") === "1") {
                window.setTimeout(() => {
                    handoffPaymentToPhone(phoneReceiptUrl);
                }, 250);
            }

            if (note) {
                note.textContent = "Depuis un ordinateur, ouvrez ce recu sur votre telephone pour confirmer le paiement.";
            }
        }

        return;
    }

    if (merchantRow) merchantRow.classList.add("is-hidden");
    if (mobileLinkWrap) mobileLinkWrap.classList.add("is-hidden");
    if (secondaryAction) secondaryAction.classList.add("is-hidden");
    if (note) {
        note.textContent = APPS_SCRIPT_URL
            ? "Le paiement carte s'ouvre sur une page securisee. La commande reste ensuite en attente de validation par la boutique."
            : "Le paiement carte sera disponible des que le backoffice sera connecte.";
    }

    primaryAction.setAttribute("href", "#");
    primaryAction.innerHTML = `${icon("card", "tag-icon")}Acceder au paiement securise`;
    primaryAction.addEventListener("click", async (event) => {
        event.preventDefault();

        if (!APPS_SCRIPT_URL) {
            flashMessage("Le paiement carte est indisponible pour le moment.");
            return;
        }

        const storedOrder = loadJson(STORAGE_KEYS.order, null);
        if (!storedOrder || storedOrder.reference !== order.reference) {
            flashMessage("Rouvrez cette page depuis l'appareil utilise pour la commande.");
            return;
        }

        try {
            const result = await requestCardPaymentLink(storedOrder);
            if (result.ok && result.link) {
                window.location.href = result.link;
                return;
            }
            flashMessage("Le paiement carte est indisponible pour le moment.");
        } catch (error) {
            flashMessage("Impossible de preparer le paiement carte.");
        }
    });
}

function initPaymentReturnPage() {
    if (document.body.dataset.page !== "payment-return") return;

    const titleNode = document.querySelector("[data-payment-return-title]");
    const copyNode = document.querySelector("[data-payment-return-copy]");
    const refNode = document.querySelector("[data-payment-return-reference]");
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const txRef = params.get("tx_ref") || "";
    const transactionId = params.get("transaction_id") || "";
    const order = loadJson(STORAGE_KEYS.order, null);

    if (refNode && txRef) {
        refNode.textContent = txRef;
    }

    if (order && txRef && order.reference === txRef) {
        order.payment = {
            method: "card",
            status: status || "pending",
            transactionId,
            checkedAt: new Date().toISOString()
        };
        saveJson(STORAGE_KEYS.order, order);
    }

    if (!titleNode || !copyNode) return;

    if (status === "successful") {
        titleNode.textContent = "Paiement carte confirme.";
        copyNode.textContent = txRef
            ? `Le reglement de la reference ${txRef} a ete recu. La commande reste en attente de validation par la boutique.`
            : "Le reglement a ete recu. La commande reste en attente de validation par la boutique.";
        return;
    }

    if (status === "cancelled" || status === "failed") {
        titleNode.textContent = "Paiement carte non finalise.";
        copyNode.textContent = "Vous pouvez retourner au panier ou relancer un paiement quand vous le souhaitez.";
        return;
    }

    titleNode.textContent = "Retour de paiement recu.";
    copyNode.textContent = "La commande reste soumise a validation par la boutique avant confirmation finale.";
}

function buildMixxPaymentHref() {
    return "tel:*145*5%23";
}

function buildMoovPaymentHref(order) {
    const amount = Math.max(0, Math.round(Number(order && order.total) || 0));
    if (!amount) {
        return "tel:*155*2*2%23";
    }
    return `tel:*155*2*2*22879664863*${amount}%23`;
}

function buildCardRedirectUrl() {
    try {
        const current = new URL(window.location.href);
        current.pathname = current.pathname.replace(/[^/]+$/, "paiement-carte-retour.html");
        current.search = "";
        return current.toString();
    } catch (error) {
        return "paiement-carte-retour.html";
    }
}

function getPaymentMethodConfig(method) {
    const methods = {
        mixx: {
            type: "mobile",
            label: "Mixx Togo",
            title: "Recu de paiement Mixx",
            helper: "Finalisez le paiement Mixx depuis votre telephone.",
            logo: "logo-mixx.svg",
            merchant: "+228 93 32 63 88",
            launch: () => buildMixxPaymentHref()
        },
        moov: {
            type: "mobile",
            label: "Moov Togo",
            title: "Recu de paiement Moov",
            helper: "Finalisez le paiement Moov depuis votre telephone.",
            logo: "logo-moov.svg",
            merchant: "+228 79 66 48 63",
            launch: (order) => buildMoovPaymentHref(order)
        },
        visa: {
            type: "card",
            label: "Visa",
            title: "Recu de paiement carte",
            helper: "Accedez au paiement carte securise depuis cette page.",
            logo: "logo-visa.svg"
        }
    };

    return methods[method] || null;
}

function buildPaymentPageHref(method, order, options = {}) {
    const file = PAYMENT_PAGES[method] || "paiement.html";

    try {
        const url = new URL(file, window.location.href);
        if (order) {
            url.searchParams.set("ref", order.reference || "");
            url.searchParams.set("amount", String(order.total || 0));
            url.searchParams.set("shipping", order.shippingLabel || (order.shipping && order.shipping.label) || "");
        }
        if (options.launch) url.searchParams.set("launch", "1");
        if (options.handoff) url.searchParams.set("handoff", "1");
        return url.toString();
    } catch (error) {
        const params = [];
        if (order) {
            params.push(`ref=${encodeURIComponent(order.reference || "")}`);
            params.push(`amount=${encodeURIComponent(String(order.total || 0))}`);
            params.push(`shipping=${encodeURIComponent(order.shippingLabel || (order.shipping && order.shipping.label) || "")}`);
        }
        if (options.launch) params.push("launch=1");
        if (options.handoff) params.push("handoff=1");
        return `${file}${params.length ? `?${params.join("&")}` : ""}`;
    }
}

function getPaymentContext() {
    const stored = loadJson(STORAGE_KEYS.order, null);
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || "";
    const amount = Number(params.get("amount") || 0);
    const shippingLabel = params.get("shipping") || "";

    if (stored && (!ref || stored.reference === ref)) {
        return {
            reference: stored.reference,
            total: stored.total,
            shippingLabel: (stored.shipping && stored.shipping.label) || ""
        };
    }

    if (ref && amount > 0) {
        return {
            reference: ref,
            total: amount,
            shippingLabel
        };
    }

    return null;
}

async function handoffPaymentToPhone(url) {
    if (navigator.share && window.isSecureContext) {
        try {
            await navigator.share({
                title: "Paiement Kiyakuda",
                text: "Ouvrez ce recu sur votre telephone pour finaliser le paiement.",
                url
            });
            flashMessage("Lien envoye vers votre telephone.");
            return true;
        } catch (error) {
            // Fallback copie.
        }
    }

    copyText(url);
    flashMessage("Lien mobile copie. Ouvrez-le sur votre telephone.");
    return false;
}

function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent)
        || window.matchMedia("(max-width: 760px)").matches;
}

async function requestCardPaymentLink(order) {
    const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "create_card_payment",
            order,
            redirectUrl: buildCardRedirectUrl()
        })
    });

    return response.json();
}

function buildProductCard(product) {
    return `
        <article class="product-card reveal is-visible">
            <button class="icon-button product-bag" type="button" data-add-product="${product.id}" aria-label="Ajouter ${escapeAttribute(product.name)} au panier">${bagIcon()}</button>
            <a class="product-link" href="produit.html?id=${encodeURIComponent(product.id)}">
                <img class="product-art" src="${buildProductArt(product)}" alt="${escapeAttribute(product.name)}" loading="lazy">
                <div class="product-meta">
                    <span class="product-id">${escapeHtml(product.id)}</span>
                    <h3 class="product-name">${escapeHtml(product.name)}</h3>
                    <div class="product-tags">
                        <span class="product-tag">${icon("tag", "tag-icon")}${escapeHtml(product.category)}</span>
                        <span class="product-tag">${icon("box", "tag-icon")}${product.stock} stock</span>
                    </div>
                    <strong class="product-price">${formatMoney(product.price)}</strong>
                </div>
            </a>
        </article>
    `;
}

function buildCartItem(item) {
    return `
        <article class="cart-item">
            <img class="product-art" src="${buildProductArt(item.product)}" alt="${escapeAttribute(item.product.name)}" loading="lazy">
            <div class="cart-item-meta">
                <strong>${escapeHtml(item.product.name)}</strong>
                <span class="copy-muted">${escapeHtml(item.product.id)}${item.variant ? ` - ${escapeHtml(item.variant)}` : ""}</span>
                <span class="copy-muted">${formatMoney(item.product.price)} unite</span>
            </div>
            <div class="cart-item-actions">
                <div class="qty-stepper">
                    <button class="icon-button" type="button" data-cart-change="-1" data-cart-id="${item.product.id}" data-cart-variant="${escapeAttribute(item.variant || "")}" aria-label="Reduire la quantite">-</button>
                    <input type="number" value="${item.qty}" min="1" max="${item.product.stock}" readonly>
                    <button class="icon-button" type="button" data-cart-change="1" data-cart-id="${item.product.id}" data-cart-variant="${escapeAttribute(item.variant || "")}" aria-label="Augmenter la quantite">+</button>
                </div>
                <strong>${formatMoney(item.product.price * item.qty)}</strong>
                <button class="ghost-button" type="button" data-cart-remove="${item.product.id}" data-cart-variant="${escapeAttribute(item.variant || "")}">Retirer</button>
            </div>
        </article>
    `;
}

function bindCatalogActions(container) {
    container.querySelectorAll("[data-add-product]").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            const id = button.getAttribute("data-add-product");
            const product = PRODUCTS.find((item) => item.id === id);
            if (!product) return;
            addToCart(product.id, 1, product.variants[0] || "");
        });
    });
}

function bindCartActions(container, render) {
    container.querySelectorAll("[data-cart-change]").forEach((button) => {
        button.addEventListener("click", () => {
            updateCartItem(
                button.getAttribute("data-cart-id"),
                button.getAttribute("data-cart-variant") || "",
                Number(button.getAttribute("data-cart-change"))
            );
            render();
        });
    });

    container.querySelectorAll("[data-cart-remove]").forEach((button) => {
        button.addEventListener("click", () => {
            removeCartItem(button.getAttribute("data-cart-remove"), button.getAttribute("data-cart-variant") || "");
            render();
            flashMessage("Produit retire du panier.");
        });
    });
}

function addToCart(id, qty, variant) {
    const product = PRODUCTS.find((item) => item.id === id);
    if (!product) return;

    const cart = loadJson(STORAGE_KEYS.cart, []);
    const safeVariant = variant || product.variants[0] || "";
    const existing = cart.find((item) => item.id === id && item.variant === safeVariant);
    if (existing) {
        existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
        cart.push({ id, qty: Math.min(qty, product.stock), variant: safeVariant });
    }

    saveJson(STORAGE_KEYS.cart, cart);
    renderCartBadges();
    flashMessage(`${product.name} a ete ajoute au panier.`);
}

function updateCartItem(id, variant, change) {
    const cart = loadJson(STORAGE_KEYS.cart, []);
    const product = PRODUCTS.find((item) => item.id === id);
    const entry = cart.find((item) => item.id === id && item.variant === variant);
    if (!product || !entry) return;

    const nextQty = entry.qty + change;
    if (nextQty <= 0) {
        removeCartItem(id, variant);
        return;
    }
    entry.qty = clampQuantity(nextQty, product.stock);
    saveJson(STORAGE_KEYS.cart, cart);
}

function removeCartItem(id, variant) {
    const cart = loadJson(STORAGE_KEYS.cart, []);
    saveJson(STORAGE_KEYS.cart, cart.filter((item) => !(item.id === id && item.variant === variant)));
    renderCartBadges();
}

function clearCart() {
    saveJson(STORAGE_KEYS.cart, []);
    renderCartBadges();
}

function getDetailedCart() {
    return loadJson(STORAGE_KEYS.cart, [])
        .map((item) => {
            const product = PRODUCTS.find((candidate) => candidate.id === item.id);
            return product ? { product, qty: item.qty, variant: item.variant } : null;
        })
        .filter(Boolean);
}

function renderCartBadges() {
    const totalQty = loadJson(STORAGE_KEYS.cart, []).reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = String(totalQty);
    });
}

function updatePaymentLinks(links, total, reference = "") {
    links.forEach((link) => {
        link.classList.remove("ghost-button");
        link.classList.add("secondary-button");
        link.setAttribute("href", link.dataset.paymentLink);
    });

    document.querySelectorAll("[data-order-total-preview]").forEach((node) => {
        node.textContent = formatMoney(total);
    });
    document.querySelectorAll("[data-order-ref-preview]").forEach((node) => {
        node.textContent = reference || "en attente";
    });
}

function getStoredShippingRegion() {
    const stored = loadJson(STORAGE_KEYS.shipping, SHIPPING_REGIONS[0].id);
    return SHIPPING_REGIONS.some((item) => item.id === stored) ? stored : SHIPPING_REGIONS[0].id;
}

function getShippingRegion(id) {
    return SHIPPING_REGIONS.find((region) => region.id === id) || SHIPPING_REGIONS[0];
}

function formatMoney(amount) {
    return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(amount)} FCFA`;
}

function sortProducts(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

function updateQuantityInput(input, delta, max) {
    input.value = clampQuantity(Number(input.value) + delta, max);
}

function clampQuantity(value, max) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return 1;
    return Math.max(1, Math.min(max, numeric));
}

function buildOrderReference() {
    return `KYK-${Date.now().toString().slice(-8)}`;
}

async function submitOrderToBackoffice(order) {
    if (!APPS_SCRIPT_URL) {
        return { ok: false, message: "APPS_SCRIPT_URL non configuree." };
    }

    const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "create_order",
            order
        })
    });

    return response.json();
}

function showStatus(panel, message, kind) {
    if (!panel) return;
    panel.classList.remove("is-hidden", "is-success", "is-error");
    panel.classList.add(kind === "success" ? "is-success" : "is-error");
    panel.innerHTML = `<strong>${kind === "success" ? "Validation de commande" : "Verification requise"}</strong><p>${escapeHtml(message)}</p>`;
}

function buildProductArt(product) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700" role="img" aria-label="${escapeAttribute(product.name)}">
            <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${product.palette[0]}"/>
                    <stop offset="100%" stop-color="${product.palette[1]}"/>
                </linearGradient>
                <filter id="blur"><feGaussianBlur stdDeviation="18"/></filter>
            </defs>
            <rect width="700" height="700" rx="48" fill="url(#g)"/>
            <circle cx="570" cy="140" r="110" fill="rgba(255,255,255,0.18)" filter="url(#blur)"/>
            <circle cx="160" cy="560" r="140" fill="rgba(0,0,0,0.18)" filter="url(#blur)"/>
            <rect x="94" y="92" width="512" height="512" rx="44" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.28)" stroke-width="4"/>
            <text x="126" y="182" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="26" letter-spacing="5">${escapeXml(product.id)}</text>
            <text x="126" y="356" fill="#ffffff" font-family="Georgia, serif" font-size="68" font-weight="700">${escapeXml(product.name.split(" ").slice(0, 2).join(" "))}</text>
            <text x="126" y="424" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif" font-size="28">${escapeXml(product.category)}</text>
            <text x="126" y="510" fill="#101010" font-family="Arial, sans-serif" font-size="32" font-weight="700">${escapeXml(formatMoney(product.price))}</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function bagIcon() {
    return icon("bag", "bag-icon");
}

function icon(name, className = "icon-svg") {
    const icons = {
        arrow: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 5 7 7-7 7"></path></svg>`,
        bag: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z"></path><path d="M9 9V7a3 3 0 0 1 6 0v2"></path></svg>`,
        box: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"></path><path d="M12 12 4 7.5"></path><path d="M12 12l8-4.5"></path><path d="M12 12v9"></path></svg>`,
        card: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M3 10h18"></path></svg>`,
        cart: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle><path d="M5 4h2l2.2 10.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 7H8"></path></svg>`,
        close: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 6 12 12"></path><path d="M18 6 6 18"></path></svg>`,
        copy: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
        home: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"></path><path d="M5 9.8V21h14V9.8"></path></svg>`,
        layers: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 4.5L12 12 3 7.5 12 3Z"></path><path d="m3 12 9 4.5 9-4.5"></path><path d="m3 16.5 9 4.5 9-4.5"></path></svg>`,
        mail: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>`,
        menu: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path></svg>`,
        moon: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"></path></svg>`,
        phone: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.2 19.2 0 0 1-5.9-5.9A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.8L7 10a16 16 0 0 0 7 7l1.7-1.8a2 2 0 0 1 1.8-.6l2.8.4A2 2 0 0 1 22 16.9Z"></path></svg>`,
        search: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>`,
        share: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.6 10.7 6.8-3.9"></path><path d="m8.6 13.3 6.8 3.9"></path></svg>`,
        shield: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 5 6v6c0 5 3.4 7.8 7 9 3.6-1.2 7-4 7-9V6l-7-3Z"></path><path d="m9.5 12 1.7 1.7L14.8 10"></path></svg>`,
        shop: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16l-1 4a2 2 0 0 1-2 1.5H7A2 2 0 0 1 5 11L4 7Z"></path><path d="M5 12.5V20h14v-7.5"></path><path d="M9 20v-5h6v5"></path><path d="M6 7V4h12v3"></path></svg>`,
        sun: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2.2"></path><path d="M12 19.8V22"></path><path d="m4.9 4.9 1.6 1.6"></path><path d="m17.5 17.5 1.6 1.6"></path><path d="M2 12h2.2"></path><path d="M19.8 12H22"></path><path d="m4.9 19.1 1.6-1.6"></path><path d="m17.5 6.5 1.6-1.6"></path></svg>`,
        tag: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m20 13-7 7-9-9V4h7l9 9Z"></path><circle cx="7.5" cy="7.5" r="1"></circle></svg>`,
        telegram: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 3-8.5 18-2.8-6.2L3 12.3 21 3Z"></path><path d="M9.7 14.8 21 3"></path></svg>`,
        truck: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17H6a2 2 0 0 1-2-2V7h10v10Z"></path><path d="M14 11h3l3 3v3h-6v-6Z"></path><circle cx="7.5" cy="18.5" r="1.5"></circle><circle cx="17.5" cy="18.5" r="1.5"></circle></svg>`,
        user: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 20a8 8 0 0 1 16 0"></path></svg>`,
        wallet: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path><path d="M16 12h4"></path><path d="M3 9h17"></path></svg>`,
        whatsapp: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.9L4 20l1.1-3.1A8.5 8.5 0 1 1 20 11.5Z"></path><path d="M9.5 9.2c.3-.7.6-.7.9-.7h.6c.2 0 .4 0 .5.3l.8 2c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.2-.1.4.4.8 1.1 1.6 2 2.1.2.1.3 0 .4-.1l.6-.7c.2-.2.4-.2.6-.1l1.9.9c.2.1.3.2.3.4v.7c0 .3-.2.6-.5.8-.5.3-1.2.5-2 .3-1.3-.3-2.6-1.2-3.7-2.3-1.1-1.1-2-2.4-2.3-3.7-.2-.8 0-1.5.3-2.1Z"></path></svg>`
    };

    return icons[name] || icons.tag;
}

function flashMessage(message) {
    let toast = document.querySelector(".global-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "global-toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(flashMessage.timer);
    flashMessage.timer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 2400);
}

function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
        return;
    }

    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "absolute";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    document.body.removeChild(field);
}

function loadJson(key, fallback) {
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveJson(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

function escapeXml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}
