// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://choeurcassiopee.fr',
  redirects: {
    '/FRONT_OFFICE/pages/presentation.php': '/le-choeur',
    '/FRONT_OFFICE/pages/rejoindre.php': '/nous-rejoindre',
    '/FRONT_OFFICE/pages/chefchoeur.php': '/le-choeur',
    '/FRONT_OFFICE/pages/concerts.php': '/concerts',
    '/FRONT_OFFICE/pages/multimedia.php': '/medias',
    '/FRONT_OFFICE/pages/contact.php': '/contact',
    '/FRONT_OFFICE/pages/mentions.php': '/mentions-legales',
    '/FRONT_OFFICE/pages/repertoire.php': '/le-choeur',
    '/FRONT_OFFICE/pages/plan.php': '/',
  },
});
