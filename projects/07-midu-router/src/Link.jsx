import { EVENTS } from "./const/const"

export function navigate(href){
    window.history.pushState({},'', href)
    const navigationEvent= new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }


export function Link ({target, to, ...props}){
    const handleClick=(event)=>{
        const isMainEvent= event.button=== 0
        const isModifiedEvent= event.metakey || event.altkey || event.ctrlkey || event.shiftkey
        const isManageableEvent= target=== undefined || target === '__self'
        if (isMainEvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            navigate(to)
        }

    }

    return <a href={to} target={target} onClick={handleClick} {...props}></a>
}