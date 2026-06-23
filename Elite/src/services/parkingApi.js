const API = import.meta.env.VITE_API_URL;
const INTERNAL_KEY = import.meta.env.VITE_INTERNAL_API_KEY;
const COMPANY_DOMAIN = import.meta.env.VITE_COMPANY_DOMAIN;

/**
 * Wraps fetch() and injects X-Company-Domain so the backend
 * companyMiddleware can resolve the correct company_id tenant.
 */
export function apiFetch(url, options = {}) {
    const headers = new Headers(options.headers);
    if (COMPANY_DOMAIN) headers.set("X-Company-Domain", COMPANY_DOMAIN);
    return fetch(url, { ...options, headers });
}


export async function fetchParkingProducts(dropDate, returnDate, airport) {
    const res = await apiFetch(`${API}/api/parking-product`, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dropDate, returnDate, airport }),
    });
    const data = await res.json();
    return Array.isArray(data.data) ? data.data : [];
}

export async function fetchProductPrice(productId, dropoffDate, returnDate) {
    const res = await apiFetch(`${API}/api/calculate-price`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            product_id: productId,
            dropoff_date: dropoffDate,
            return_date: returnDate,
        }),
    });
    if (!res.ok) return null;
    const result = await res.json();
    return result.success ? Number(result.total_price) : null;
}

export async function fetchProductById(id) {
    const res = await apiFetch(`${API}/api/parking-product/${id}`);
    const data = await res.json();
    return data.success ? data.data : null;
}

export async function fetchTerminalsByProduct(productId) {
    const res = await apiFetch(`${API}/api/data/terminals-by-product/${productId}`);
    return res.json();
}

export async function fetchAirports() {
    try {
        const res = await apiFetch(`${API}/api/data/airports`);
        const data = await res.json();
        if (data.success && Array.isArray(data.airports)) return data.airports;
    } catch {
        /* ignore */
    }
    return [];
}

export async function fetchCancellationCharge() {
    try {
        const res = await apiFetch(`${API}/api/cancellation/charges`);
        const data = await res.json();
        if (data.success && data.data?.length > 0) return data.data[0];
    } catch {
        /* ignore */
    }
    return null;
}

export async function fetchBookingFees() {
    try {
        const res = await apiFetch(`${API}/api/booking-fees`);
        const data = await res.json();
        if (data.success) return Number(data.booking_fees || 0);
    } catch {
        /* ignore */
    }
    return 0;
}

export async function validatePromoCode(code) {
    if (!code?.trim()) return { valid: true };
    try {
        const res = await apiFetch(`${API}/api/promocode/${encodeURIComponent(code.trim())}`);
        const data = await res.json();
        if (data.success) return { valid: true, promo: data.promo };
        return { valid: false, error: "Promo code not available or expired" };
    } catch {
        return { valid: false, error: "Server error while checking promo" };
    }
}

export async function createBooking(payload) {
    const res = await apiFetch(`${API}/api/create-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    return res.json();
}

export async function completeBookingAfterPayment(payload) {
    const res = await apiFetch(`${API}/api/create-booking-after-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    return res.json();
}

export async function notifyPaymentSessionExpired(bookingId) {
    const fallbackLink = `/retry-payment/${bookingId}`;
    if (!INTERNAL_KEY) return { success: true, payment_link: fallbackLink };
    try {
        const res = await apiFetch(`${API}/api/stripe/payment-session-expired`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-internal-api-key": INTERNAL_KEY,
            },
            body: JSON.stringify({ booking_id: bookingId }),
        });
        const data = await res.json();
        return { ...data, payment_link: data.payment_link || fallbackLink };
    } catch {
        return { success: true, payment_link: fallbackLink };
    }
}



export async function fetchCompanyInfo() {
    try {
        const res = await apiFetch(`${API}/api/company-info`);
        const data = await res.json();
        if (data.success) return data.company ;
    } catch {
        /* ignore */
    }
    return null;
}




export async function saveReceiptPdfToDb(bookingId, pdfBase64) {
    try {
        const headers = { "Content-Type": "application/json" };
        if (INTERNAL_KEY) headers["x-internal-api-key"] = INTERNAL_KEY;
        if (COMPANY_DOMAIN) headers["X-Company-Domain"] = COMPANY_DOMAIN;

        const res = await apiFetch(`${API}/api/save-receipt-pdf`, {
            method: "POST",
            headers,
            body: JSON.stringify({ booking_id: bookingId, receipt_pdf: pdfBase64 }),
        });
        return res.json();
    } catch {
        return { success: false };
    }
}

export async function sendBookingEmail(bookingId) {
    try {
        const headers = { "Content-Type": "application/json" };
        if (INTERNAL_KEY) headers["x-internal-api-key"] = INTERNAL_KEY;
        if (COMPANY_DOMAIN) headers["X-Company-Domain"] = COMPANY_DOMAIN;

        const res = await apiFetch(`${API}/api/email-booking`, {
            method: "POST",
            headers,
            body: JSON.stringify({ booking_id: bookingId }),
        });
        const data = await res.json();
        return { ok: res.ok, message: data.message ?? (res.ok ? "Email sent" : "Failed") };
    } catch {
        return { ok: false, message: "Network error — please try again." };
    }
}

export function applyPromoDiscount(basePrice, promo) {
    if (!promo || !basePrice) return basePrice;
    if (promo.discount_type === "percentage") {
        return basePrice - (basePrice * Number(promo.discount_value)) / 100;
    }
    return basePrice - Number(promo.discount_value);
}
