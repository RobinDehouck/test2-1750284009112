export const SITE = {
  name: 'test2',
  origin: 'https://test2.vercel.app',
  basePathname: '/',
  title: 'test2',
  description: 'Seu guia completo sobre test2. Encontre as melhores informações, dicas e recomendações.',
  defaultImage: 'default.png',
  defaultTheme: 'system',
  language: 'pt-BR',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }),
};

export const BLOG = {
  disabled: false,
  postsPerPage: 6,
  post: {
    permalink: '/blog/%slug%',
    noindex: false,
  },
  list: {
    pathname: 'blog',
    noindex: false,
  },
  category: {
    pathname: 'category',
    noindex: true,
  },
  tag: {
    pathname: 'tag',
    noindex: true,
  },
};