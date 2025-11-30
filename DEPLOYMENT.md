# Configuration du déploiement GitHub Pages avec Contentful

## Configuration GitHub

### 1. Activer GitHub Pages

1. Allez dans les paramètres de votre repository GitHub
2. Naviguez vers **Settings** > **Pages**
3. Sous **Source**, sélectionnez **GitHub Actions**

### 2. Configurer les secrets

Ajoutez les secrets suivants dans **Settings** > **Secrets and variables** > **Actions** :

- `CONTENTFUL_SPACE_ID` : Votre Space ID Contentful (sera exposé comme `PUBLIC_CONTENTFUL_SPACE_ID`)
- `CONTENTFUL_ACCESS_TOKEN` : Votre Content Delivery API access token (sera exposé comme `PUBLIC_CONTENTFUL_ACCESS_TOKEN`)

Note : Les secrets sont stockés sans le préfixe `PUBLIC_` pour plus de sécurité, mais sont exposés avec ce préfixe dans le workflow pour correspondre aux variables d'environnement utilisées par Astro.

### 3. Créer un Personal Access Token (PAT)

Pour permettre à Contentful de déclencher le workflow :

1. Allez dans **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. Cliquez sur **Generate new token (classic)**
3. Donnez un nom au token (ex: "Contentful Webhook")
4. Sélectionnez la portée **repo** (Full control of private repositories)
5. Générez et copiez le token

## Configuration Contentful

### Configurer le webhook

1. Dans Contentful, allez dans **Settings** > **Webhooks**
2. Cliquez sur **Add Webhook**
3. Configurez comme suit :
   - **Name** : GitHub Pages Deploy
   - **URL** : `https://api.github.com/repos/VOTRE_USERNAME/VOTRE_REPO/dispatches`
   - **Method** : POST
   - **Headers** :
     - `Accept: application/vnd.github.v3+json`
     - `Authorization: Bearer VOTRE_GITHUB_PAT`
     - `Content-Type: application/json`
   - **Payload** :
     ```json
     {
       "event_type": "contentful-update",
       "client_payload": {
         "entry_id": "{/payload/sys/id}",
         "content_type": "{/payload/sys/contentType/sys/id}"
       }
     }
     ```
   - **Triggers** : Sélectionnez les événements qui doivent déclencher le rebuild :
     - Entry publish
     - Entry unpublish
     - Entry delete
     - Asset publish
     - Asset unpublish
     - Asset delete

4. Sauvegardez le webhook

## Déploiement manuel

Le workflow se déclenche automatiquement dans les cas suivants :
- Push sur la branche `main`
- Mise à jour de contenu sur Contentful (via webhook)
- Déclenchement manuel via l'interface GitHub Actions

Pour déclencher manuellement :
1. Allez dans l'onglet **Actions** de votre repository
2. Sélectionnez le workflow **Deploy to GitHub Pages**
3. Cliquez sur **Run workflow**

## Vérification

Après le premier déploiement réussi, votre site sera accessible à :
`https://VOTRE_USERNAME.github.io/VOTRE_REPO/`

Si vous utilisez un domaine personnalisé, configurez-le dans **Settings** > **Pages** > **Custom domain**.