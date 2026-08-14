<template>
  <main id="main" tabindex="-1">
    <header class="page-hero">
      <div class="container">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1 class="hero-title">{{ copy.title }}</h1>
        <p class="hero-subtitle">{{ copy.subtitle }}</p>
      </div>
    </header>

    <div class="page-content">
      <div class="container">
        <div class="content-grid">
          <aside class="contact-sidebar">
            <h2>{{ copy.sidebarTitle }}</h2>
            <p>{{ copy.sidebarText }}</p>
            <a
              href="https://www.linkedin.com/company/deploy-on-friday/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn — Deploy on Friday
              <span class="visually-hidden"> (opens in new tab)</span>
            </a>
          </aside>

          <div>
            <div v-if="submitted" class="form-status success" role="status" aria-live="polite">
              <span class="form-status-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.667 5.833 8.333 14.167 3.333 9.167" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <div class="form-status-content">
                <p class="form-status-title">{{ copy.successTitle }}</p>
                <p class="form-status-desc">{{ copy.successFollowUp }}</p>
              </div>
            </div>
            <div v-if="error" class="form-status error" role="alert">
              <span class="form-status-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6.667v4.166M10 13.75h.008" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="2"/>
                </svg>
              </span>
              <div class="form-status-content">
                <p class="form-status-title">{{ copy.errorTitle }}</p>
                <p class="form-status-desc">{{ copy.errorMessage }}</p>
              </div>
            </div>

            <form
              v-if="!submitted"
              ref="contactForm"
              class="contact-form"
              action="https://formsubmit.co/why@deployonfriday.dev"
              method="POST"
              :aria-labelledby="copy.formTitleId"
              @submit="onSubmit"
            >
              <input type="hidden" name="_subject" :value="copy.formSubject">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <input type="text" name="_honey" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">
              <input type="hidden" name="_next" :value="redirectUrl">

              <h2 :id="copy.formTitleId" class="visually-hidden">{{ copy.formTitle }}</h2>

              <div class="form-group">
                <label for="name">{{ copy.nameLabel }}</label>
                <input
                  id="name"
                  ref="nameInput"
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
                <select id="service" name="service" required v-model="selectedService">
                  <option value="" disabled hidden>{{ copy.servicePlaceholder }}</option>
                  <option v-for="opt in copy.serviceOptions" :key="opt.slug" :value="opt.label">{{ opt.label }}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">{{ copy.messageLabel }}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-describedby="message-hint"
                  :placeholder="copy.messagePlaceholder"
                ></textarea>
                <p id="message-hint" class="form-hint">{{ copy.messageHint }}</p>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                :disabled="submitting"
                :aria-busy="submitting"
              >
                {{ submitting ? copy.submitting : copy.submitLabel }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      submitted: false,
      error: false,
      submitting: false,
      selectedService: '',
      contentByLocale: {
        en: {
          eyebrow: 'Contact',
          title: 'Let\'s talk accessibility.',
          subtitle: 'Tell me about your product, timeline, and what you need. No sales pitch — just a straight conversation about whether I can help.',
          sidebarTitle: 'Prefer LinkedIn?',
          sidebarText: 'You can also reach me on LinkedIn.',
          formSubject: 'New audit inquiry from deployonfriday.dev',
          formTitle: 'Contact form',
          formTitleId: 'contact-form-title',
          nameLabel: 'Name',
          namePlaceholder: 'Your name',
          emailLabel: 'Email',
          emailPlaceholder: 'you@company.com',
          companyLabel: 'Company (optional)',
          companyPlaceholder: 'Your company',
          serviceLabel: 'What do you need?',
          servicePlaceholder: 'Select a service',
          serviceOptions: [
            { slug: 'small', label: 'Small audit' },
            { slug: 'medium', label: 'Medium audit' },
            { slug: 'large', label: 'Large audit' },
            { slug: 'ongoing', label: 'Ongoing support' },
            { slug: 'workshop', label: 'Workshop / training' },
            { slug: 'other', label: 'Other / not sure' }
          ],
          messageLabel: 'Message',
          messagePlaceholder: 'Tell me about your product, current accessibility status, and any deadlines...',
          messageHint: 'Include URLs if you have a live product to review.',
          submitLabel: 'Send message',
          submitting: 'Sending…',
          successTitle: 'Thanks! Your message has been sent.',
          successFollowUp: 'I\'ll get back to you as quickly as possible.',
          errorTitle: 'Something went wrong',
          errorMessage: 'Please try again in a moment.'
        },
        sv: {
          eyebrow: 'Kontakt',
          title: 'Låt oss prata tillgänglighet.',
          subtitle: 'Berätta om er produkt, tidsplan och vad ni behöver. Ingen säljpitch — bara ett rakt samtal om hur jag kan hjälpa.',
          sidebarTitle: 'Föredrar du LinkedIn?',
          sidebarText: 'Du kan också nå mig på LinkedIn.',
          formSubject: 'Ny granskningsförfrågan från deployonfriday.dev',
          formTitle: 'Kontaktformulär',
          formTitleId: 'contact-form-title',
          nameLabel: 'Namn',
          namePlaceholder: 'Ditt namn',
          emailLabel: 'E-post',
          emailPlaceholder: 'du@foretag.se',
          companyLabel: 'Företag (valfritt)',
          companyPlaceholder: 'Ert företag',
          serviceLabel: 'Vad behöver ni?',
          servicePlaceholder: 'Välj tjänst',
          serviceOptions: [
            { slug: 'small', label: 'Liten granskning' },
            { slug: 'medium', label: 'Medium granskning' },
            { slug: 'large', label: 'Stor granskning' },
            { slug: 'ongoing', label: 'Löpande stöd' },
            { slug: 'workshop', label: 'Workshop / utbildning' },
            { slug: 'other', label: 'Annat / osäker' }
          ],
          messageLabel: 'Meddelande',
          messagePlaceholder: 'Berätta om er produkt, nuvarande tillgänglighetsstatus och eventuella deadlines...',
          messageHint: 'Inkludera URL:er om ni har en liveprodukt att granska.',
          submitLabel: 'Skicka meddelande',
          submitting: 'Skickar…',
          successTitle: 'Tack! Ditt meddelande har skickats.',
          successFollowUp: 'Jag återkommer så snart som möjligt.',
          errorTitle: 'Något gick fel',
          errorMessage: 'Försök igen om en stund.'
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
    this.applyServiceFromQuery()
    this.focusFormIfRequested()
  },
  watch: {
    '$route.query.service'(newSlug, oldSlug) {
      this.applyServiceFromQuery()
      if (newSlug && newSlug !== oldSlug) {
        this.focusFormIfRequested()
      }
    },
    locale() {
      this.applyServiceFromQuery()
    }
  },
  methods: {
    applyServiceFromQuery() {
      const slug = this.$route.query.service
      if (!slug || typeof slug !== 'string') {
        this.selectedService = ''
        return
      }
      const match = this.copy.serviceOptions.find((opt) => opt.slug === slug)
      this.selectedService = match ? match.label : ''
    },
    focusFormIfRequested() {
      const slug = this.$route.query.service
      if (this.submitted || !slug || typeof slug !== 'string') return
      if (!this.copy.serviceOptions.some((opt) => opt.slug === slug)) return

      this.$nextTick(() => {
        this.$refs.contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        this.$refs.nameInput?.focus()
      })
    },
    onSubmit() {
      this.submitting = true
    }
  }
}
</script>

<style scoped>
.page-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border);
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
  border-radius: var(--radius-box);
  scroll-margin-top: calc(var(--header-height) + 1rem);
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

.form-group select:invalid {
  color: var(--ink-dull);
}

.form-group select option {
  color: var(--ink);
  background: var(--bg-card);
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
  border-color: var(--accent-border-strong);
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-soft-border);
}

.form-hint {
  font-size: 0.75rem;
  color: var(--ink-dull);
  margin-top: 0.375rem;
}

.form-status {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1rem 1.125rem;
  border-radius: var(--radius-box);
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.form-status-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
}

.form-status-icon svg {
  display: block;
}

.form-status-content {
  flex: 1;
  min-width: 0;
}

.form-status-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.form-status-desc {
  font-size: 0.875rem;
  margin: 0;
}

.form-status.success {
  --status-bg: hsl(142 35% 15%);
  --status-border: hsl(142 40% 38%);
  --status-ink: hsl(142 20% 93%);
  --status-desc: hsl(142 15% 82%);
  --status-icon-bg: hsl(142 45% 28%);
  --status-icon-fg: hsl(142 20% 96%);
  background: var(--status-bg);
  border: 1px solid var(--status-border);
  color: var(--status-ink);
}

.form-status.success .form-status-desc {
  color: var(--status-desc);
}

.form-status.success .form-status-icon {
  background: var(--status-icon-bg);
  color: var(--status-icon-fg);
}

:global([data-theme='light']) .form-status.success {
  --status-bg: hsl(142 45% 95%);
  --status-border: hsl(142 45% 30%);
  --status-ink: hsl(142 55% 14%);
  --status-desc: hsl(142 40% 22%);
  --status-icon-bg: hsl(142 50% 26%);
  --status-icon-fg: hsl(0 0% 100%);
}

.form-status.error {
  --status-bg: hsl(0 40% 16%);
  --status-border: hsl(0 45% 40%);
  --status-ink: hsl(0 15% 93%);
  --status-desc: hsl(0 12% 82%);
  --status-icon-bg: hsl(0 50% 32%);
  --status-icon-fg: hsl(0 10% 96%);
  background: var(--status-bg);
  border: 1px solid var(--status-border);
  color: var(--status-ink);
}

.form-status.error .form-status-desc {
  color: var(--status-desc);
}

.form-status.error .form-status-icon {
  background: var(--status-icon-bg);
  color: var(--status-icon-fg);
}

:global([data-theme='light']) .form-status.error {
  --status-bg: hsl(0 55% 96%);
  --status-border: hsl(0 50% 32%);
  --status-ink: hsl(0 55% 16%);
  --status-desc: hsl(0 45% 24%);
  --status-icon-bg: hsl(0 55% 38%);
  --status-icon-fg: hsl(0 0% 100%);
}
</style>
