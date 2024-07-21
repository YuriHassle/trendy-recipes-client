<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';
import { useRecipeStore } from '@/store/recipe';

const recipeStore = useRecipeStore();

const newRecipe = reactive({
  title: '',
  description: '',
  video: {
    url: '',
    source: 'tiktok',
  },
  ingredients: '',
  preparation: '',
  user_id: 1,
  language_id: 1,
});

const rules = {
  title: { required },
  description: { required },
  video: {
    url: { required, url },
  },
  ingredients: { required },
  preparation: { required },
};

const v$ = useVuelidate(rules, newRecipe);

function handleSubmit() {
  v$.value.$validate();
  if (!v$.value.$error) {
    recipeStore.createRecipe(newRecipe);
  }
}
</script>

<template>
  <div class="section">
    <h3 class="new-recipe__header">Create a new Recipe</h3>
    <form class="new-recipe__form" @submit.prevent="handleSubmit">
      <div class="new-recipe__field">
        <label for="title">Title: </label>
        <input
          id="title"
          v-model="newRecipe.title"
          type="text"
          class="new-recipe__title"
          :class="{ 'new-recipe--error': v$.title.$error }"
          @blur="v$.title.$touch"
        />
        <span v-if="v$.title.$error">{{ v$.title.$errors[0].$message }}</span>
      </div>
      <div class="new-recipe__field">
        <label for="description">Description: </label>
        <input
          id="description"
          v-model="newRecipe.description"
          type="text"
          class="new-recipe__description"
          :class="{ 'new-recipe--error': v$.description.$error }"
          @blur="v$.description.$touch"
        />
        <span v-if="v$.description.$error">{{ v$.description.$errors[0].$message }}</span>
      </div>
      <div class="new-recipe__field">
        <label for="video-url">Video URL: </label>
        <input
          id="video-url"
          v-model="newRecipe.video.url"
          type="url"
          class="new-recipe__video-url"
          :class="{ 'new-recipe--error': v$.video.url.$error }"
          @blur="v$.video.url.$touch"
        />
        <span v-if="v$.video.url.$error">{{ v$.video.url.$errors[0].$message }}</span>
      </div>
      <div class="new-recipe__field">
        <label for="ingredients">Ingredients: </label>
        <textarea
          id="ingredients"
          v-model="newRecipe.ingredients"
          type="text"
          class="new-recipe__ingredients"
          :class="{ 'new-recipe--error': v$.ingredients.$error }"
          @blur="v$.ingredients.$touch"
        />
        <span v-if="v$.ingredients.$error">{{ v$.ingredients.$errors[0].$message }}</span>
      </div>
      <div class="new-recipe__field">
        <label for="preparation">Preparation: </label>
        <textarea
          id="preparation"
          v-model="newRecipe.preparation"
          type="text"
          class="new-recipe__preparation"
          :class="{ 'new-recipe--error': v$.preparation.$error }"
          @blur="v$.preparation.$touch"
        />
        <span v-if="v$.preparation.$error">{{ v$.preparation.$errors[0].$message }}</span>
      </div>
      <button class="btn btn--primary" type="submit">Create Recipe</button>
      <span v-if="v$.$error">Please, check the form data</span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.new-recipe {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__field {
    display: flex;
    flex-direction: column;
  }

  &--error {
    border: 1px solid red;
  }
}
</style>
