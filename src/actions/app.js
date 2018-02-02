export const UPDATE_LOCALES = 'UPDATE_LOCALES'

export function updateLocales() {
  return {
    type: UPDATE_LOCALES,
    payload: {
      en: {
        login: {
          'Vapor.Abort.notFound': "This username doesn't exist.",
          'Vapor.Abort.notAcceptable': "This password is incorrect.",
          'Title': 'Login',
          'Username': 'Username',
          'Password': 'Password',
          'Submit': 'Submit',
        },
        register: {
          'Vapor.Abort.badRequest': "This email is not a valid email address.",
          'Vapor.Abort.unauthorized': "This username already exist, please choose an other one.",
          'Title': "Register",
          'Username': 'Username',
          'Email': 'Email',
          'Password': 'Password',
          'Submit': 'Submit',
        },
        search: {
          'Vapor.Abort.notFound': "No results found.",
        },
        menu: {
          'Login': "Login",
          'Logout': "Logout",
          'Trends': "Trends",
          'Search': "Search",
          'Yours': "Yours",
          'Subscriptions': "Subscriptions",
          'Community': 'Create community',
          'CommunityName': 'Community name',
          'Register': "Register",
          'Welcome': "Welcome to KeeepIn",
          'WelcomeMessage': "Select a community or create a new one.",
        },
        chat: {
          'Title': "Chat",
          'Subscribe': 'Subscribe',
          'Unsubscribe': 'Unsubscribe',
          'Send': 'Send',
          'SendMessage': 'Send a message...',
        },
        space: {
          'Title': "Space",
          'Share': "Share",
          'ShareSomething': "Share...",
        },
        community: {
          'Create': "Create",
          'Name': "Name",
          'Vapor.Abort.unauthorized': 'This community already exist.',
        },
      },
      fr: {
        login: {
          'Vapor.Abort.notFound': "Ce nom d'utilisateur n'existe pas.",
          'Vapor.Abort.notAcceptable': "Ce mot de passe est incorrect.",
          'Title': "S'identifier",
          'Username': "Nom d'utilisateur",
          'Password': 'Mot de passe',
          'Submit': 'Soumettre',
        },
        register: {
          'Vapor.Abort.badRequest': "Cette adresse email n'est pas valide.",
          'Vapor.Abort.unauthorized': "Ce nom d'utilisateur est déjà pris. Tu peux en trouver un mieux nan ?",
          'Title': "Créer un compte",
          'Username': "Nom d'utilisateur",
          'Email': 'Email',
          'Password': 'Mot de passe',
          'Submit': 'Soumettre',
        },
        search: {
          'Vapor.Abort.notFound': "Aucun résultat trouvé.",
        },
        menu: {
          'Login': "S'identifier",
          'Logout': "Se déconnecter",
          'Trends': "Tendances",
          'Search': "Recherche",
          'Yours': "Tes communautés",
          'Subscriptions': "Abonnements",
          'Community': 'Créer une communauté',
          'CommunityName': 'Nom de la communauté',
          'Register': "Créer un compte",
          'Welcome': "Bienvenue sur KeeepIn",
          'WelcomeMessage': "Sélectionne une communauté ou crées en une.",
        },
        chat: {
          'Title': "Chat",
          'Subscribe': "S'abonner",
          'Unsubscribe': 'Se désabonner',
          'Send': 'Envoyer',
          'SendMessage': 'Envoyer un message...'
        },
        space: {
          'Title': "Space",
          'Share': "Partager",
          'ShareSomething': "Partage...",
        },
        community: {
          'Create': "Créer",
          'Name': "Nom",
          'Vapor.Abort.unauthorized': 'Cette communauté existe déjà.',
        },
      },
    },
  }
}
