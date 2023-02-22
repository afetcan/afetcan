export default defineNuxtRouteMiddleware((to, from) => {
  const { isApp } = useWhatPlatform()
  if (!isApp)
    return '/'
})
