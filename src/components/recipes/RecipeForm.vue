<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';
import { useRecipeStore } from '@/store/recipe';
import { useAddRecipe } from '@/repository/recipe';

const recipeStore = useRecipeStore();

const recipe = reactive({
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

const v$ = useVuelidate(rules, recipe);

async function handleSubmit() {
  v$.value.$validate();
  if (!v$.value.$error) {
    const newRecipe = await useAddRecipe(recipe);
    recipeStore.addRecipe(newRecipe);
    clearForm();
  }
}

function clearForm() {
  recipe.title = '';
  recipe.description = '';
  recipe.video.url = '';
  recipe.ingredients = '';
  recipe.preparation = '';
  v$.value.$reset();
}
</script>

<template>
  <div class="section">
    <h3 class="new-recipe__title">Create a new Recipe</h3>
    <form class="new-recipe__form" @submit.prevent="handleSubmit">
      <div class="new-recipe__field-container">
        <label for="title">Title: </label>
        <input
          id="title"
          v-model="recipe.title"
          type="text"
          class="field"
          :class="{ 'field--error': v$.title.$error, 'field--success': !v$.title.$invalid }"
          @blur="v$.title.$touch"
        />
        <span v-if="v$.title.$error" class="field-message field-message--error">
          {{ v$.title.$errors[0].$message }}
        </span>
      </div>
      <div class="new-recipe__field-container">
        <label for="description">Description: </label>
        <input
          id="description"
          v-model="recipe.description"
          type="text"
          class="field"
          :class="{
            'field--error': v$.description.$error,
            'field--success': !v$.description.$invalid,
          }"
          @blur="v$.description.$touch"
        />
        <span v-if="v$.description.$error" class="field-message field-message--error">
          {{ v$.description.$errors[0].$message }}
        </span>
      </div>
      <div class="new-recipe__field-container">
        <label for="video-url">Video URL: </label>
        <input
          id="video-url"
          v-model="recipe.video.url"
          type="url"
          class="field"
          :class="{ 'field--error': v$.video.url.$error, 'field--success': !v$.video.url.$invalid }"
          @blur="v$.video.url.$touch"
        />
        <span v-if="v$.video.url.$error" class="field-message field-message--error">
          {{ v$.video.url.$errors[0].$message }}
        </span>
      </div>
      <div class="new-recipe__field-container">
        <label for="ingredients">Ingredients: </label>
        <textarea
          id="ingredients"
          v-model="recipe.ingredients"
          type="text"
          class="field"
          :class="{
            'field--error': v$.ingredients.$error,
            'field--success': !v$.ingredients.$invalid,
          }"
          @blur="v$.ingredients.$touch"
        />
        <span v-if="v$.ingredients.$error" class="field-message field-message--error">
          {{ v$.ingredients.$errors[0].$message }}
        </span>
      </div>
      <div class="new-recipe__field-container">
        <label for="preparation">Preparation: </label>
        <textarea
          id="preparation"
          v-model="recipe.preparation"
          type="text"
          class="field"
          :class="{
            'field--error': v$.preparation.$error,
            'field--success': !v$.preparation.$invalid,
          }"
          @blur="v$.preparation.$touch"
        />
        <span v-if="v$.preparation.$error" class="field-message field-message--error">
          {{ v$.preparation.$errors[0].$message }}
        </span>
      </div>
      <div class="new-recipe__field-container">
        <button class="btn btn--primary" type="submit">Create Recipe</button>
        <span v-if="v$.$error" class="message message--error">Please, check the form data</span>
      </div>
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

  &__field-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
