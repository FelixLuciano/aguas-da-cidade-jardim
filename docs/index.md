---
layout: home

hero:
  name: Monitorando as Águas
  text: Ponte Cidade Jardim
  tagline: Insper - Química Tecnológica e Ambiental
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
}

img, iframe {
	border-radius: .25rem;
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
