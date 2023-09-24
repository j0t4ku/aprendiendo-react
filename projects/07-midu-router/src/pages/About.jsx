import {Link} from '../Link'

const i18n= {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola me llamo Joel Ismar Florentin',
    button: 'Ir a la home'
  },
  en: {
    title: 'Sobre nosotros',
    description: 'Hola me llamo Joel Ismar Florentin',
    button: 'Go to Home'

  }
}

const useI18n=(lang)=>{
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
   const i18n= useI18n(routeParams.lang ?? 'es') 

  return (
      <>
        <h1>{i18n.title}</h1>
        <p>{i18n.description}</p>
        <Link to='/home'>{i18n.button}</Link>
      </>
    )
  }