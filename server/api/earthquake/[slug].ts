import { turkiyeEarthquakeApi } from '~/server/services/turkiye.earthquake'

export default defineEventHandler(async (context) => {
  const slug = context.context.params && context.context.params.slug
  try {
    if (slug === 'turkiye') {
      const _data = await turkiyeEarthquakeApi()

      return {
        lastUpdate: new Date().toISOString(),
        data: _data,
      }
    }

    return {
      lastUpdate: new Date().toISOString(),
      data: null,
    }
  }
  catch (error) {
    return {
      lastUpdate: new Date().toISOString(),
      data: null,
    }
  }
})
