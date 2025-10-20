export function assetUrl(path = '') {
  const base = import.meta.env.BASE_URL || '/'
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base
  const trimmedPath = path.startsWith('/') ? path.slice(1) : path
  if (!trimmedPath) {
    return `${trimmedBase}/`
  }
  return `${trimmedBase}/${trimmedPath}`
}
