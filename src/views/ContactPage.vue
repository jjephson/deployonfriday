<template>
  <div>
    <header class="page-hero">
      <div class="container">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1 id="page-heading" class="hero-title">{{ copy.title }}</h1>
        <p class="hero-subtitle">{{ copy.subtitle }}</p>
      </div>
    </header>

    <main id="main" class="page-content">
      <div class="container">
        <div class="content-grid two-col">
          <aside class="contact-sidebar">
            <h2>{{ copy.sidebarTitle }}</h2>
            <p>{{ copy.sidebarText }}</p>
            <a
              href="https://linkedin.com/in/jimmiejephson"
              class="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn — jimmiejephson
              <span class="visually-hidden"> (opens in new tab)</span>
            </a>
          </aside>

          <div class="contact-form-wrap">
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
              <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true">
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
          sidebarText: 'You can also reach me on LinkedIn. I respond to all accessibility inquiries within two business days.',
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
          successMessage: 'Thanks! Your message has been sent. I will get back to you within two business days.',
          errorMessage: 'Something went wrong. Please try again in a moment.'
        },
        sv: {
          eyebrow: 'Kontakt',
          title: 'Låt oss prata tillgänglighet.',
          subtitle: 'Berätta om er produkt, tidsplan och vad ni behöver. Ingen säljpitch — bara ett rakt samtal om hur jag kan hjälpa.',
          sidebarTitle: 'Föredrar du LinkedIn?',
          sidebarText: 'Du kan också nå mig på LinkedIn. Jag svarar på alla förfrågningar inom två arbetsdagar.',
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
          successMessage: 'Tack! Ditt meddelande har skickats. Jag återkommer inom två arbetsdagar.',
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
