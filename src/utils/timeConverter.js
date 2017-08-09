// @flow
import { getMinutes } from './common'

export default function(time: number): string {
  const seconds = addZero(getSeconds(time))
  const minutes = addZero(getMinutes(time))

  return `${minutes}:${seconds}`
}

function addZero(n: number): string {
  const ns = String(n)

  if (ns.length >= 2) return ns

  return `0${ns}`
}

const getSeconds = (time: number): number => time % 60
