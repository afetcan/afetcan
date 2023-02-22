<script setup lang="ts">
import type { Charity } from '~~/composables/useFormApi'
import type { AnyConvert } from '~~/types'

const { t } = useI18n()
const route = useRoute()
const { toFormValidator, useForm, zod } = useFormFn()

const { newCharity } = useFormApi()

const validationSchema
    = toFormValidator(zod.object<AnyConvert<Charity>>({
      description: zod.string().min(10,
        t('form.error.minLength', ['10']))
        .max(1000, t('form.error.maxLength', ['1000'])),
      donationUrl: zod.string().url(t('form.error.url')),
      name: zod.string()
        .min(3, t('form.error.minLength', ['1']))
        .max(100, t('form.error.maxLength', ['100'])),
      shortDescription: zod.string()
        .min(10, t('form.error.minLength', ['10']))
        .max(100, t('form.error.maxLength', ['100'])),
      websiteUrl: zod.string().url(t('form.error.url')),
    }))

const { handleSubmit } = useForm<Charity>({
  validationSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const data = await newCharity({
      ...values,
    })
  }
  catch (error) {
  }
})

const getCountry = computed(() => {
  return route.params.country
})
</script>

<template>
  <NuxtLayout name="web">
    <WebMainContent>
      <template #header>
        <div class="pt-4">
          <NuxtLink
            :to="`/${getCountry}/charity/`"
            class="bg-gray-200 hover:bg-gray-400 h-10 px-4 rounded flex items-center w-full"
          >
            <div class="icon-[ph--caret-left-bold] w-5 h-5 mr-1" />
            {{ t('charity.allCharities') }}
            <div class="icon-[ph--heart-duotone] w-5 h-5 ml-auto" />
          </NuxtLink>
        </div>
      </template>
      <div>
        <div>
          <h1 class="text-lg font-bold my-4">
            {{ t('charity.newForm.newCharity') }}
          </h1>
        </div>
      </div>
      <MonoOrgForm :schema="validationSchema" class="text-left" @post="onSubmit">
        <div class="grid grid-cols-4 gap-3">
          <MonoAtomInput
            name="name"
            type="text"
            :label="t('charity.newForm.name')"
            :placeholder="t('form.placeholder.name')"
          />
          <MonoAtomInput
            name="shortDescription"
            type="text"
            :label="t('charity.newForm.shortDescription')"
            :placeholder="t('form.placeholder.shortDescription')"
          />

          <MonoAtomInput
            name="description"
            type="text"
            :label="t('charity.newForm.description')"
            :placeholder="t('form.placeholder.description')"
          />

          <MonoAtomInput
            name="websiteUrl"
            type="text"
            :label="t('charity.newForm.websiteUrl')"
            :placeholder="t('form.placeholder.websiteUrl')"
          />

          <MonoAtomInput
            name="donationUrl"
            type="text"
            :label="t('charity.newForm.donationUrl')"
            :placeholder="t('form.placeholder.donationUrl')"
          />

          <div class="mt-4 col-span-full">
            <button full type="submit" class="h-10 bg-green-600 text-white font-bold w-full rounded">
              {{ t('global.save') }}
            </button>
          </div>
        </div>
      </MonoOrgForm>
    </WebMainContent>
  </NuxtLayout>
</template>
