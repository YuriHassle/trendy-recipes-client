import type { $Fetch } from 'nitropack';
import type { NuxtApp } from 'nuxt/app';

export const getAPI = <T>(nuxtApp: NuxtApp) => nuxtApp.$api as $Fetch<T>;
