<template>
<div>
    <h1>hello world {{msg}}  title； {{title}}</h1>
</div>
</template>

<script>
export default {
    name:'baseButton',
    props: ['title'],
     data() {
        return {
            msg:'base button'
        }
    },
}
</script>
