<template>
  <div class="grid p-6">
    <div class="col-12">
      <h1 class="post-title">Posts</h1>
    </div>
    <div class="col-3" v-for="(post, index) in state.posts"
         :key="index">
      <Card class="card shadow-4">
        <template #header>
          <img class="card-image" v-if="post.featured_image_url" :src="post.featured_image_url">
        </template>
        <template #title>
          {{ post.title.rendered }}
        </template>
        <template #subtitle>
        </template>
        <template #content>
          <p>{{ post.excerpt.rendered }}</p>
        </template>
        <template #footer>
        </template>
      </Card>
    </div>
  </div>

  <!--  <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise"/>-->
  <!--  <Accordion>-->
  <!--    <AccordionTab header="Header I">-->
  <!--      Content-->
  <!--    </AccordionTab>-->
  <!--    <AccordionTab header="Header II">-->
  <!--      Content-->
  <!--    </AccordionTab>-->
  <!--    <AccordionTab header="Header III">-->
  <!--      Content-->
  <!--    </AccordionTab>-->
  <!--  </Accordion>-->
  <!--  <div class="grid">-->
  <!--    <div class="col">1</div>-->
  <!--    <div class="col">2</div>-->
  <!--    <div class="col">3</div>-->
  <!--  </div>-->
  <!--  <Button label="Submit" icon="pi pi-check" iconPos="right"/>-->
  <!--  <i class="pi pi-check"></i>-->
  <!--  <i class="pi pi-times"></i>-->
  <!--  <Card>-->
  <!--    <template #header>-->
  <!--      <div class="flex justify-content-center flex-wrap card-container yellow-container">-->
  <!--        <div-->
  <!--            class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">-->
  <!--          1-->
  <!--        </div>-->
  <!--        <div-->
  <!--            class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">-->
  <!--          2-->
  <!--        </div>-->
  <!--        <div-->
  <!--            class="flex align-items-center justify-content-center w-4rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">-->
  <!--          3-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </template>-->
  <!--    <template #title>-->
  <!--      Advanced Card-->
  <!--    </template>-->
  <!--    <template #content>-->
  <!--      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam-->
  <!--      deserunt-->
  <!--      quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!-->
  <!--    </template>-->
  <!--    <template #footer>-->
  <!--      <Button icon="pi pi-check" label="Save"/>-->
  <!--      <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em"/>-->
  <!--    </template>-->
  <!--  </Card>-->

</template>

<script lang="ts">
import axios from "axios";
import {ref} from "vue";
import type {WP_REST_API_Posts} from 'wp-types';

declare var wpFrontendLocalizer: any;

export default {
  name: 'HomePage',
  components: {},
  setup() {
    const state = ref<{
      posts: WP_REST_API_Posts
    }>({
      posts: []
    });
    const getPosts = async (): Promise<WP_REST_API_Posts> => {
      console.log(`${wpFrontendLocalizer.devApiUrl}/wp/v2/posts`);
      return (await axios.get<WP_REST_API_Posts>(`${wpFrontendLocalizer.devApiUrl}/wp/v2/posts`)).data;
    }

    getPosts().then(posts => {
      state.value.posts = posts;
    })

    return {state};
  },
  methods: {},
  data() {
    return {
      value: 0
    }
  }
}
</script>

<style>
.card {
  background: #ffffff30 !important;
  backdrop-filter: blur(10px);
  border-radius: 10px !important;
}

.card-image {
  border-radius: 10px 10px 0 0;
  height: 15rem
}

.post-title {
  font-family: sans-serif;
  font-size: 60px;
}
</style>