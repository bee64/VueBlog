<template>
    <transition name="post">
        <article v-if="allReady" class="post">
            <header class="post__header">
                <h2 class="post__title">{{ title }}</h2>
                <h3 class="post__meta">by <router-link class="post_author" :to="`/by/${kebabify(author)}`">{{ author }}</router-link>
                    <span class="post__sep"></span>
                    <time>{{ prettyDate(published) }}</time>
                </h3>

                <blockquote class="post__subtitle">{{ description }}</blockquote>
            </header>

            <section class="post__body rte" v-html="content"></section>

            <footer class="post_footer">
                ♥
            </footer>
        </article>
    </transition>
</template>

<script>
import { kebabify, prettyDate } from '../helpers';

export default {
    name: 'blog-post',
    resource: 'BlogPost',
    props: {
        post: String
    },

    data() {
        return {
            title: '',
            author: '',
            content: '',
            published: '',
            description: '',
            ready: false
        }
    },

    computed: {
        allReady() {
            return this.ready && this.post;
        }
    },

    watch: {
        post(to, from) {
            if( to === from || !this.post) return;

            this.$getResource('post', to)
            .then(() => {
                this.ready = true;
            });
        }
    },

    methods: {
        kebabify,
        prettyDate
    },

    mounted() {
        if(!this.post) {
            this.ready = true;
            return;
        }

        this.$getResource('post', this.post)
        .then(() => {
            this.ready = true;
        });
    }
}
</script>