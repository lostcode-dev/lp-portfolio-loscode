<script setup lang="ts">
import CommandLine from '../../CommandLine.vue'
</script>

<template>
    <CommandLine id="about-me" title="about-me" class="container-text">
        <li class="touch-none reddit-mono-bold">
            {{ $t('about.greeting') }}
            <span class="text-indigo-400 touch-none reddit-mono-bold">Software Developer</span>.
        </li>
        <li class="touch-none reddit-mono-bold">
            {{ $t('about.passion') }}
            <span class="text-teal-400 touch-none reddit-mono-bold">web design</span> {{ $t('about.and') }}
            <span class="text-emerald-400 touch-none reddit-mono-bold">web development</span>, {{ $t('about.with_focus')
            }}
            <span class="text-cyan-400 touch-none reddit-mono-bold">front-end development</span> {{
            $t('about.in_all_aspects') }} <span class="text-sky-400 touch-none reddit-mono-bold">{{ $t('about.technician')
                }}</span> {{ $t('about.and_my') }} <span class="text-indigo-400 touch-none reddit-mono-bold">{{
                $t('about.creativity') }}</span> {{ $t('about.can_be_used_in_better_form') }}
        </li>
        <li class="touch-none reddit-mono-bold">
            {{ $t('about.i_bring_my') }} <span class="text-emerald-400 touch-none reddit-mono-bold">{{
                $t('about.expertise') }} </span> {{
            $t('about.in_my_collaborations_with') }} <span class="text-teal-400 touch-none reddit-mono-bold">web
                agencies</span>,
            <span class="text-red-400 touch-none reddit-mono-bold">startups</span>, {{
            $t('about.and_others') }}
            <span class="text-purple-400 touch-none reddit-mono-bold">{{
                $t('about.freelance_professionals') }}</span> {{
            $t('about.in_the_area') }}
        </li>
        <li class="touch-none reddit-mono-bold">
            <span class="text-purple-400 touch-none reddit-mono-bold">{{ $t('about.coding') }}</span> {{
            $t('about.for_me_its') }} <span class="text-rose-400 touch-none reddit-mono-bold">{{ $t('about.experiment')
                }}</span> {{ $t('about.with_several') }} <span class="text-fuchsia-400 touch-none reddit-mono-bold">{{
                $t('about.technologies') }}</span> {{ $t('about.and_i_also_maintain') }} <span
                class="text-green-400 touch-none reddit-mono-bold">{{ $t('about.personal_projects') }}</span>.
            <span id="cursor" class="silkscreen-regular text-white">_</span>
        </li>
    </CommandLine>
</template>