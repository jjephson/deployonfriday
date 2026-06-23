<template>
  <div>
    <header class="page-hero">
      <div class="container">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1 class="hero-title">{{ copy.title }}</h1>
        <p class="hero-subtitle">{{ copy.subtitle }}</p>
      </div>
    </header>

    <main id="main" class="page-content">
      <div class="container">
        <div class="content-grid">
          <aside class="contact-sidebar">
            <h2>{{ copy.sidebarTitle }}</h2>
            <p>{{ copy.sidebarText }}</p>
            <a
              href="https://linkedin.com/in/jimmiejephson"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn — jimmiejephson
              <span class="visually-hidden"> (opens in new tab)</span>
            </a>
          </aside>

          <div>
            <div v-if="submitted" class="form-status success" role="status">
              {{ copy.successMessage }}
            </div>
            <div v-if="error" class="form-status error" role="alert">
              {{ copy.errorMessage }}
            </div>

            <form
              v-if="!submitted"
              class="contact-form"
              action="https://formsubmit.co/jimmie.jephson@gmail.com"
              method="POST"
              @submit="onSubmit"
            >
              <input type="hidden" name="_subject" :value="copy.formSubject">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <input type="text" name="_honey" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">
              <input type="hidden" name="_next" :value="redirectUrl">

              <div class="form-group">
                <label for="name">{{ copy.nameLabel }}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autocomplete="name"
                  :placeholder="copy.namePlaceholder"
                >
              </div>

              <div class="form-group">
                <label for="email">{{ copy.emailLabel }}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                  :placeholder="copy.emailPlaceholder"
                >
              </div>

              <div class="form-group">
                <label for="company">{{ copy.companyLabel }}</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autocomplete="organization"
                  :placeholder="copy.companyPlaceholder"
                >
              </div>

              <div class="form-group">
                <label for="service">{{ copy.serviceLabel }}</label>
                <select id="service" name="service" required>
                  <option value="" disabled selected>{{ copy.servicePlaceholder }}</option>
                  <option v-for="opt in copy.serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">{{ copy.messageLabel }}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  :placeholder="copy.messagePlaceholder"
                ></textarea>
                <p class="form-hint">{{ copy.messageHint }}</p>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="submitting">
                {{ submitting ? copy.submitting : copy.submitLabel }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      submitted: false,
      error: false,
      submitting: false,
      contentByLocale: {
        en: {
          eyebrow: 'Contact',
          title: 'Let\'s talk accessibility.',
          subtitle: 'Tell me about your product, timeline, and what you need. No sales pitch — just a straight conversation about whether I can help.',
          sidebarTitle: 'Prefer LinkedIn?',
          sidebarText: 'You can also reach me on LinkedIn.',
          formSubject: 'New audit inquiry from deployonfriday.dev',
          nameLabel: 'Name',
          namePlaceholder: 'Your name',
          emailLabel: 'Email',
          emailPlaceholder: 'you@company.com',
          companyLabel: 'Company (optional)',
          companyPlaceholder: 'Your company',
          serviceLabel: 'What do you need?',
          servicePlaceholder: 'Select a service',
          serviceOptions: [
            'Snapshot audit',
            'Full audit',
            'Ongoing support',
            'Workshop / training',
            'Other / not sure'
          ],
          messageLabel: 'Message',
          messagePlaceholder: 'Tell me about your product, current accessibility status, and any deadlines...',
          messageHint: 'Include URLs if you have a live product to review.',
          submitLabel: 'Send message',
          submitting: 'Sending…',
          successMessage: 'Thanks! Your message has been sent.',
          errorMessage: 'Something went wrong. Please try again in a moment.'
        },
        sv: {
          eyebrow: 'Kontakt',
          title: 'Låt oss prata tillgänglighet.',
          subtitle: 'Berätta om er produkt, tidsplan och vad ni behöver. Ingen säljpitch — bara ett rakt samtal om hur jag kan hjälpa.',
          sidebarTitle: 'Föredrar du LinkedIn?',
          sidebarText: 'Du kan också nå mig på LinkedIn.',
          formSubject: 'Ny granskningsförfrågan från deployonfriday.dev',
          nameLabel: 'Namn',
          namePlaceholder: 'Ditt namn',
          emailLabel: 'E-post',
          emailPlaceholder: 'du@foretag.se',
          companyLabel: 'Företag (valfritt)',
          companyPlaceholder: 'Ert företag',
          serviceLabel: 'Vad behöver ni?',
          servicePlaceholder: 'Välj tjänst',
          serviceOptions: [
            'Snapshot-granskning',
            'Full granskning',
            'Löpande stöd',
            'Workshop / utbildning',
            'Annat / osäker'
          ],
          messageLabel: 'Meddelande',
          messagePlaceholder: 'Berätta om er produkt, nuvarande tillgänglighetsstatus och eventuella deadlines...',
          messageHint: 'Inkludera URL:er om ni har en liveprodukt att granska.',
          submitLabel: 'Skicka meddelande',
          submitting: 'Skickar…',
          successMessage: 'Tack! Ditt meddelande har skickats.',
          errorMessage: 'Något gick fel. Försök igen om en stund.'
        }
      }
    }
  },
  computed: {
    locale() {
      return this.$route.params.locale === 'sv' ? 'sv' : 'en'
    },
    copy() {
      return this.contentByLocale[this.locale]
    },
    redirectUrl() {
      if (typeof window === 'undefined') return ''
      return `${window.location.origin}/${this.locale}/contact?sent=1`
    }
  },
  mounted() {
    if (this.$route.query.sent === '1') {
      this.submitted = true
    }
  },
  methods: {
    onSubmit() {
      this.submitting = true
    }
  }
}
</script>

<style scoped>
.page-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border-subtle);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid hsl(43 50% 50% / 0.25);
  border-radius: 999px;
  background: var(--accent-glow);
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--ink);
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--ink-dull);
  max-width: 40rem;
  line-height: 1.65;
  font-weight: 400;
}

.page-content {
  padding: 3rem 0 5rem;
}

.content-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.contact-sidebar h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--ink);
}

.contact-sidebar p {
  color: var(--ink-dull);
  font-size: 0.9375rem;
  margin-bottom: 1.25rem;
  line-height: 1.65;
}

.contact-sidebar a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 0.9375rem;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.honeypot {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.contact-form {
  padding: 1.75rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.375rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  min-height: 44px;
  padding: 0.625rem 0.875rem;
  font-family: inherit;
  font-size: 0.9375rem;
  color: var(--ink);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.form-group textarea {
  min-height: 8rem;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--ink-faint);
}

.form-group input:focus-visible,
.form-group select:focus-visible,
.form-group textarea:focus-visible {
  border-color: hsl(43 50% 50% / 0.5);
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-glow);
}

.form-hint {
  font-size: 0.75rem;
  color: var(--ink-faint);
  margin-top: 0.375rem;
}

.form-status {
  padding: 0.875rem 1rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.form-status.success {
  background: hsl(142 50% 30% / 0.2);
  border: 1px solid hsl(142 50% 40% / 0.4);
  color: hsl(142 60% 75%);
}

.form-status.error {
  background: hsl(0 50% 30% / 0.2);
  border: 1px solid hsl(0 50% 40% / 0.4);
  color: hsl(0 60% 75%);
}
</style>
