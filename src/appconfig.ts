// ATTENTION => Jamais d'infos sensibles ici (passwords, keys, etc)

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiBaseUrl = import.meta.env.VITE_API_URL;
const env = import.meta.env.VITE_ENV;
const isDevEnv = import.meta.env.DEV;


// ATTENTION => Jamais d'infos sensibles ici (passwords, keys, etc)
export let appconfig = {
  env,
  isDevEnv,
	urls: {
		baseUrl,
		apiBaseUrl,
	},
}
