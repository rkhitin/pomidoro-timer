// @flow
import intervals from '../constants/intervals'

export function getPermission(): void {
  if (!('Notification' in window))
    return alert('Ваш браузер не поддерживает уведомления.')

  const { Notification } = window

  if (Notification.permission === 'granted') return

  if (window.Notification.permission !== 'denied')
    window.Notification.requestPermission()
}

export function notify(nextInterval: Interval): void {
  if (!('Notification' in window))
    return alert('Ваш браузер не поддерживает уведомления.')

  const { Notification } = window

  if (Notification.permission !== 'granted')
    return alert('Нужно разрешить уведомления в браузере!')

  new Notification(getMessage(nextInterval))
}

function getMessage(nextInterval: Interval): string {
  switch (nextInterval) {
    case intervals.smallBreak:
      return 'Маленький перерыв'
    case intervals.bigBreak:
      return 'Большой перерыв'
    default:
      return 'Пора поработать'
  }
}
