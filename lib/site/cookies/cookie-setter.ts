import { setCookie, deleteCookie, getCookie } from 'cookies-next';

export async function setCookieConsent(consent: boolean) {
  const oneDay = 24 * 60 * 60 * 1000 
  const oneWeek = oneDay * 7
  const expires = Date.now() - oneDay 

  if (consent) {
    setCookie('cribConsentCookie', 'accepted', { maxAge: oneWeek });
    return true
  //  console.log(cookie.get('cribConsentCookie'))
  } else {
    deleteCookie('cribConsentCookie');
    return false
  }
 // return getCookie('cribConsentCookie')
}

