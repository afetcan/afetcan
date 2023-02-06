<script setup lang="ts">
import { lightTheme } from 'naive-ui'
</script>

<template>
  <NConfigProvider
    :theme="lightTheme"
  >
    <NDialogProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <NLoadingBarProvider>
            <RouterView />
            <NGlobalStyle />
          </NLoadingBarProvider>
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NConfigProvider>
</template>
