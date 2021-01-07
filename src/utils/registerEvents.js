export default function registerEvent(action, category){
  if(!window.gtag) return

  window.gtag('event', action, { event_category: category});    
}