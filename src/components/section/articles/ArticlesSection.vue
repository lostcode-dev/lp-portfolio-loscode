<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
</script>

<template>
  <div class="relative">
    <section class="relative z-20">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto lg:mx-0 text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
              From the blog
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div
            class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-gray-500">
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores,
                  possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum
                  eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo
                  tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis
                  voluptatem?
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <AboutBackground
      :show-layer-corner="false"
      animation-line="30s"
      secondary-color="rgb(143, 0, 255)"
      primary-color="rgb(128, 0, 128)"
    />
  </div>
</template>
