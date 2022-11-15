---
layout: home

hero:
  name: Monitorando as Águas
  text: Ponte Cidade Jardim
  tagline: Química Tecnológica e Ambiental
  actions:
    - theme: brand
      text: 📰 Relatório 2022
      link: /reports/2022
    - theme: alt
      text: Relatórios
      link: /reports/

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
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/guifl2001.png',
    name: 'Guilherme Fontana',
    links: [
      { icon: 'github', link: 'https://github.com/guifl2001' },
    ]
  },
  {
    avatar: 'https://www.github.com/leticiacb1.png',
    name: 'Letícia Coelho',
    links: [
      { icon: 'github', link: 'https://github.com/leticiacb1' },
    ]
  },
  {
    avatar: 'https://www.github.com/LidiaDomingos.png',
    name: 'Lídia Domingos',
    links: [
      { icon: 'github', link: 'https://github.com/LidiaDomingos' },
    ]
  },
  {
    avatar: 'https://www.github.com/FelixLuciano.png',
    name: 'Luciano Felix',
    links: [
      { icon: 'github', link: 'https://github.com/FelixLuciano' },
    ]
  },
  {
    avatar: 'https://www.github.com/Pedro2712.png',
    name: 'Pedro Andrade',
    links: [
      { icon: 'github', link: 'https://github.com/Pedro2712' },
    ]
  },
  {
    avatar: 'https://www.github.com/pedroaltobelli23.png',
    name: 'Pedro Altobelli',
    links: [
      { icon: 'github', link: 'https://github.com/pedroaltobelli23' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nossa Equipe
    </template>
    <!-- <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template> -->
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<style>
:root {
  --vp-c-brand: #ef4444;
  --vp-c-brand-light: #f87171;
  --vp-c-brand-lighter: #fca5a5;
  --vp-c-brand-dark: #dc2626;
  --vp-c-brand-darker: #b91c1c;
}
</style>