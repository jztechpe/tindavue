export default {
    name: "JzInputCounter",
    props: {
        value: {
            type: Number,
            required: true,
        },
        min: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: undefined,
        },
    },
    computed: {
        canIncrement() {
            return (this.max === undefined || ((this.value + 1) <= this.max));
        },
        canDecrement() {
            return ((this.value - 1) >= this.min);
        },
        classIncrementButton() {
            return { "input-counter_button--disabled": !this.canIncrement };
        },
        classDecrementButton() {
            return { "input-counter_button--disabled": !this.canDecrement };
        },
    },
    methods: {
        increment() {
            if (this.canIncrement) {
                let newValue = this.value + 1;
                this.$emit('on-increment', newValue);
                this.$emit('input', newValue);
                this.$emit('change', { oldValue: this.value, newValue: newValue });
            }
        },
        decrement() {
            if (this.canDecrement) {
                let newValue = this.value - 1;
                this.$emit('on-decrement', newValue);
                this.$emit('input', newValue);
                this.$emit('change', { oldValue: this.value, newValue: newValue });
            }
        },
    }
};