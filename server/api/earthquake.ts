import { parse } from 'muninn'
import type { Earthquake } from '~~/types/earthquake'

// Turkey Data
// https://github.com/ademilter/zelzele

export default defineEventHandler(async ({ context }) => {
  try {
    console.log('params', context)

    const response = await fetch(
      'https://deprem.afad.gov.tr/last-earthquakes.html',
    )
    const content = await response.text()

    // https://github.com/aykutkardas/awesome-muninn/blob/main/configs/tr-last-earthquakes.md
    const data = parse(content, {
      selector: '.content-table tbody tr | array',
      schema: {
        id: 'td:nth-child(8) | number',
        date: 'td:nth-child(1)',
        latitude: 'td:nth-child(2) | float',
        longitude: 'td:nth-child(3) | float',
        depth: {
          schema: {
            value: 'td:nth-child(4) | float',
            unit: { fill: 'km' },
          },
        },
        type: 'td:nth-child(5)',
        magnitude: 'td:nth-child(6) | float',
        location: 'td:nth-child(7)',
      },
    })

    const _data: Earthquake[] = data as any

    return {
      data: {
        lastUpdate: new Date().toISOString(),
        data: _data.slice(0, 10),
      },
    }
  }
  catch (error) {

  }
})
