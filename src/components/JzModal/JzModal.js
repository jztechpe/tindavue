export default {
    name: 'JzModal',
    props: {
        value: false,
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};