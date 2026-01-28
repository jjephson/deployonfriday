<template>
  <div>
    <a href="#main" class="skip-link">Skip to main content</a>
    <main id="main" role="main">
      <h1 class="section-title visually-hidden">{{ copy.homeTitle }}</h1>
      <section id="about" class="about" aria-labelledby="about-heading">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2 id="about-heading" class="section-title">{{ copy.aboutTitle }}</h2>
              <p>{{ copy.aboutIntro }}</p>
              <p>{{ copy.aboutDetail }}</p>
            </div>
            <div class="about-image">
              <img src="/images/assets/jimmie.png" 
                   :alt="copy.aboutImageAlt" 
                   loading="lazy">
            </div>
          </div>
        </div>
      </section>
      <section id="clients" class="clients" aria-labelledby="clients-heading">
        <div class="container">
          <h2 id="clients-heading" class="section-title visually-hidden">{{ copy.clientsTitle }}</h2>
          <div class="clients-grid" role="list" :aria-label="copy.clientsAria">
            <div class="client-logo" role="listitem" v-for="client in clients" :key="client.name">
              <img :src="client.image" :alt="client.name + ' logo'" loading="lazy">
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact" aria-labelledby="contact-heading">
        <div class="container">
          <h2 id="contact-heading" class="section-title">{{ copy.contactTitle }}</h2>
          <p class="contact-text">{{ copy.contactText }}</p>
          <div class="contact-info" role="list" :aria-label="copy.contactAria">
            <div class="contact-item" role="listitem">
              <h3>{{ copy.linkedinTitle }}</h3>
              <a href="https://linkedin.com/in/jimmiejephson" target="_blank" rel="noopener noreferrer" :aria-label="copy.linkedinAria">linkedin.com/in/jimmiejephson</a>
            </div>
            <div class="contact-item" role="listitem">
              <h3>{{ copy.githubTitle }}</h3>
              <a href="https://github.com/jimmiejephson" target="_blank" rel="noopener noreferrer" :aria-label="copy.githubAria">github.com/jimmiejephson</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      contentByLocale: {
        en: {
          homeTitle: 'Deploy on Friday',
          aboutTitle: 'About Me',
          aboutIntro: 'I’m Jimmie Jephson, an Accessibility Specialist and Senior Frontend Developer focused on inclusive, user-centered digital experiences.',
          aboutDetail: 'I partner with teams to build accessible interfaces, improve usability, and ship reliable products for real-world users.',
          aboutImageAlt: 'Jimmie Jephson - Professional headshot',
          clientsTitle: 'Client Portfolio',
          clientsAria: 'Client company logos',
          contactTitle: 'Get In Touch',
          contactText: 'Looking for an accessibility specialist and senior frontend developer for your next project? I\'m available for consulting, full-time positions, and accessibility-focused development roles. Let\'s discuss how I can help create inclusive, user-centered digital experiences.',
          contactAria: 'Contact information',
          linkedinTitle: 'LinkedIn',
          linkedinAria: 'Visit LinkedIn profile (opens in new tab)',
          githubTitle: 'GitHub',
          githubAria: 'Visit GitHub profile (opens in new tab)'
        },
        sv: {
          homeTitle: 'Deploy on Friday',
          aboutTitle: 'Om mig',
          aboutIntro: 'Jag är Jimmie Jephson, tillgänglighetsspecialist och senior frontendutvecklare med fokus på inkluderande, användarcentrerade digitala upplevelser.',
          aboutDetail: 'Jag hjälper team att bygga tillgängliga gränssnitt, förbättra användbarhet och leverera stabila produkter för verkliga användare.',
          aboutImageAlt: 'Jimmie Jephson - Porträtt',
          clientsTitle: 'Kundportfölj',
          clientsAria: 'Kundlogotyper',
          contactTitle: 'Kontakt',
          contactText: 'Behöver du en tillgänglighetsspecialist och senior frontendutvecklare för ditt nästa projekt? Jag är tillgänglig för konsultuppdrag, heltidstjänster och roller med fokus på tillgänglighet. Hör av dig så pratar vi vidare.',
          contactAria: 'Kontaktinformation',
          linkedinTitle: 'LinkedIn',
          linkedinAria: 'Besök min LinkedIn-profil (öppnas i ny flik)',
          githubTitle: 'GitHub',
          githubAria: 'Besök min GitHub-profil (öppnas i ny flik)'
        }
      },
      clients: [
        { name: 'Specsavers', image: '/images/specsavers.png' },
        { name: 'Polestar', image: '/images/polestar.png' },
        { name: 'Ving', image: '/images/ving.png' },
        { name: 'Volvo', image: '/images/volvo.png' },
        { name: 'Zalando', image: '/images/zalando.png' },
        { name: 'SR', image: '/images/sr.png' },
        { name: 'NK', image: '/images/nk.png' },
        { name: 'Kicks', image: '/images/kicks.png' },
        { name: 'Apoteket', image: '/images/apoteket.png' },
        { name: 'SVFF', image: '/images/svff.png' },
        { name: 'Sandvik', image: '/images/sandvik.png' },
        { name: 'Swedol', image: '/images/swedol.png' },
        { name: 'Kustom', image: '/images/kustom.svg' },
        { name: 'Svea', image: '/images/svea.png' },
        { name: 'Keystone', image: '/images/keystone.png' },
        { name: 'Telia', image: '/images/telia.png' },
        { name: 'ICA', image: '/images/ica.png' },
        { name: 'Verisure', image: '/images/verisure.png' },
        { name: 'Skanska', image: '/images/skanska.png' },
        { name: 'Nextory', image: '/images/nextory.png' },
        { name: 'Ahlsell', image: '/images/ahlsell.png' },
        { name: 'Coop', image: '/images/coop.png' },
        { name: 'NCS', image: '/images/ncs.png' },
        { name: 'Nobia', image: '/images/nobia.png' }
      ]
    }
  },
  computed: {
    locale() {
      return this.$route.params.locale === 'sv' ? 'sv' : 'en'
    },
    copy() {
      return this.contentByLocale[this.locale]
    }
  }
}
</script>
