<template>
    <transition-group tag="ul" class="blog__feed" name="preview"> 

    </transition-group>
</template>

<script>
export default {
    name: 'blog-feed',
    resource: 'BlogFeed',
    props: {
        filters: Object
    },

    data() {
        return { posts: [] }
    },

    computed: {
        reading() {}
    }
}
</script>