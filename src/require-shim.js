// Vite no soporta require(); este shim resuelve llamadas require('@/assets/...')
// que quedaron en plantillas migradas desde Vue CLI/webpack.
const assetModules = import.meta.glob('/src/assets/**/*', { eager: true, import: 'default' })

globalThis.require = function require(path) {
  const key = path.replace(/^@/, '/src')
  const mod = assetModules[key]
  if (mod) return mod
  console.error(`[require-shim] No se pudo resolver: ${path}`)
  return path
}
