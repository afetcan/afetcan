<script setup lang="ts">
import lodash from 'lodash'
import { search } from 'fast-fuzzy'
import type { CountryItem } from '../org/country/list.vue'
import { getJSONI18n } from '~/utils/mini'
import type { AnyConvert } from '~~/types'

const props = defineProps({
  app: {
    type: Boolean,
    required: false,
    default: false,
  },
  loadMore: {
    type: Function,
    required: false,
    default: () => {},
  },
  data: {
    type: Array as PropType<CountryItem[]>,
    required: true,
  },
})

interface Search {
  text: string
}

const { t } = useI18n()
const { locale } = useI18n()
const { toFormValidator, zod, useForm } = useFormFn()

const oldSearctText = ref('')
const limit = 20
let offsetStart = 0
let offsetEnd = 20

const searchData = ref<CountryItem[]>([])
const initData = ref<CountryItem[]>([])

const validationSchema
  = toFormValidator(zod.object<AnyConvert<Search>>({
    text: zod.string().optional(),
  }))

const { handleSubmit, values } = useForm<Search>({
  validationSchema,
  validateOnMount: false,
  initialValues: {
    text: '',
  },
})

const sortData = async (searchText?: string): Promise<CountryItem[]> => {
  let countryData: CountryItem[] = []

  if (searchText) {
    if (searchText !== oldSearctText.value) {
      offsetStart = 0
      offsetEnd = limit
    }
    else {
      offsetStart = offsetEnd - 1
      offsetEnd += limit - 1
    }
    countryData = search(searchText, initData.value, {
      keySelector: (item: CountryItem) => item.name,
    }) as CountryItem[]
    console.log(`${countryData.length} ${searchText}`)
  }
  else {
    countryData = initData.value
  }

  // filters
  countryData = lodash.orderBy(countryData, ['level'], 'desc') as CountryItem[]
  countryData = lodash.slice(countryData, offsetStart, offsetEnd) as CountryItem[]

  return countryData
}

const onSubmit = handleSubmit(async (values) => {
  const deneme = await sortData(values.text)
  searchData.value = deneme
  oldSearctText.value = values.text
})

const loadMore = async () => {
  if (searchData.value.length < offsetEnd)
    return
  offsetStart = offsetEnd - 1
  offsetEnd += limit - 1
  const data = await sortData(values.text)
  searchData.value.push(...data)
}

watchDebounced(
  values,
  () => { onSubmit() },
  { debounce: 500, maxWait: 1000 },
)

onMounted(async () => {
  initData.value = props.data.map((item) => {
    return {
      ...item,
      i18n: [getJSONI18n(item.i18n, locale.value)],
    }
  }) as CountryItem[]
  const xx = await sortData()
  searchData.value = xx
})

defineExpose({
  loadMore,
})

const loadmoreNumber = computed(() => {
  return initData.value.length - searchData.value.length
})
</script>

<template>
  <div class="mb-4 flex flex-col w-full">
    <div class="my-4">
      <MonoMolForm :schema="validationSchema" class="text-left" @post="onSubmit">
        <div class="grid grid-cols-4 gap-3">
          <MonoAtomInput
            class="col-span-full"
            name="text"
            type="text"
            :label="t('global.search')"
            :placeholder="t('country.search')"
          />
        </div>
      </MonoMolForm>
    </div>

    <ContentRenderer :value="data">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y">
        <MonoOrgCountryList :data="searchData" :app="app" />
      </div>
    </ContentRenderer>

    <button v-if="loadmoreNumber > 0" class="bg-green-500 w-full h-10 rounded text-white" @click="loadMore">
      Load More {{ loadmoreNumber }}
    </button>
  </div>
</template>
