---
layout: home

hero:
  name: Monitorando as Águas
  text: Ponte Cidade Jardim
  tagline: Insper - Química Tecnológica e Ambiental
  image:
    src: data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-0.1em%22 y=%22.90em%22 font-size=%2286%22>🔬</text></svg>
    alt: Monitorando as Águas
  actions:
  - theme: brand
    text: 📰 Relatório 2022
    link: /reports/2022
  - theme: alt
    text: Sobre
    link: /sobre/

features:
- icon: 👩‍🔬
  title: Paulina Achurra
  details: Ph.D.
  link: http://lattes.cnpq.br/8604197623762869
  linkText: Lattes
- icon: 👩‍🔬
  title: Carolina Costrino
  details: Master
  link: https://www.linkedin.com/in/carolina-costrino/
  linkText: LinkedIn

members:
- name: Guilherme Fontana
  avatar: https://www.github.com/guifl2001.png
  links:
  - link: https://github.com/guifl2001
    icon: github
- name: Letícia Coelho
  avatar: https://www.github.com/leticiacb1.png
  links:
  - link: https://github.com/leticiacb1
    icon: github
- name: Lídia Domingos
  avatar: https://www.github.com/LidiaDomingos.png
  links:
  - link: https://github.com/LidiaDomingos
    icon: github
- name: Luciano Felix
  avatar: https://www.github.com/FelixLuciano.png
  links:
  - link: https://github.com/FelixLuciano
    icon: github
- name: Pedro Andrade
  avatar: https://www.github.com/Pedro2712.png
  links:
  - link: https://github.com/Pedro2712
    icon: github
- name: Pedro Altobelli
  avatar: https://www.github.com/pedroaltobelli23.png
  links:
  - link: https://github.com/pedroaltobelli23
    icon: github
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'
</script>

<style>
:root {
    --vp-c-brand: #06b6d4;
    --vp-c-brand-light: #22d3ee;
    --vp-c-brand-lighter: #67e8f9;
    --vp-c-brand-dark: #0891b2;
    --vp-c-brand-darker: #0e7490;

    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #06b6d4, #22c55e);
    --vp-home-hero-image-background-image: linear-gradient( -45deg, #06b6d4B0 50%, #22c55eB0 50% );
    --vp-home-hero-image-filter: blur(6rem);
}

img, iframe {
	border-radius: .25rem;
}

.VPButton.brand {
  animation-name: bounce;
  animaiton-delay: 3s;
  animation-duration: 1s;
  animation-iteration-count: 3;
  transform-origin: center bottom;
}
@keyframes bounce {
  /* Source: https://github.com/animate-css/animate.css/blob/main/source/attention_seekers/bounce.css */
  from, 20%, 53%, to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }
  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }
  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}

.VPFeature .title {
  font-size: 1.5rem;
}
</style>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nossa Equipe
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers :members="$frontmatter.members" />
</VPTeamPage>
