<template>
    <div class="content-block">
        <div ref="heading-box" class="content-block__heading">
        </div>
        <div class="content-block__body flex flex-wrap p-3">
            <div ref="cont-box" class="sm:w-1 md:w-full lg:w-1/2 xl:w-1/2 content-block__cont lg:p-3">
                <slot></slot>
            </div>
            <div ref="example-box" class="sm:w-1 md:w-full lg:w-1/2 xl:w-1/2 content-block__examples">
                <slot name="example"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Block',
        methods: {
            resolveLayout() {
                const heading = this.$el.querySelector('h1, h2')

                if (heading) {
                    this.$refs['heading-box'].appendChild(heading)
                }

                const examples = this.$refs['cont-box'].querySelector('.examples')

                if (examples) {
                    this.$refs['example-box'].appendChild(examples)
                }
            },
        },
        mounted() {
            this.resolveLayout()

            this.$parent.$parent.$emit('addBlock', this)
        },
    }
</script>
