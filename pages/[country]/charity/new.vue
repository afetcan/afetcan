<script setup lang="ts">
import type { Charity } from '~~/composables/useFormApi'
import type { AnyConvert } from '~~/types'

const { newCharity } = useFormApi()

const { toFormValidator, useForm, zod } = useFormFn()

const validationSchema
    = toFormValidator(zod.object<AnyConvert<Charity>>({
      description: zod.string().min(10).max(1000),
      donationUrl: zod.string().url(),
      name: zod.string().min(3).max(100),
      shortDescription: zod.string().min(10).max(100),
      websiteUrl: zod.string().url(),
    }))

const { handleSubmit, errors, values, setValues, setErrors } = useForm<Charity>({
  validationSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const data = await newCharity({
      ...values,
    })
    console.log(data)
  }
  catch (error) {
    console.log(error)
  }
})

const { t } = useI18n()

const route = useRoute()
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
            Charity New
          </h1>
        </div>
      </div>
      <MonoOrgForm :schema="validationSchema" class="text-left" @post="onSubmit">
        <div class="grid grid-cols-4 gap-3">
          <MonoAtomInput
            name="name"
            type="text"
            label="name"
            placeholder="Your name"
            success-message="Nice and secure!"
          />
          <MonoAtomInput
            name="shortDescription"
            type="text"
            label="shortDescription"
            placeholder="Your shortDescription"
            success-message="Nice and secure!"
          />

          <MonoAtomInput
            name="description"
            type="text"
            label="description"
            placeholder="Your description"
            success-message="Nice and secure!"
          />

          <MonoAtomInput
            name="websiteUrl"
            type="text"
            label="websiteUrl"
            placeholder="Your websiteUrl"
            success-message="Nice and secure!"
          />

          <MonoAtomInput
            name="donationUrl"
            type="text"
            label="donationUrl"
            placeholder="Your donationUrl"
            success-message="Nice and secure!"
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
