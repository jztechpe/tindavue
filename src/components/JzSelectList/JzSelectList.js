export default {
    name: "JzSelectList",
    props: {
        value: null,
        title: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => []
        },
        itemText: {
            type: String,
            default: "text"
        },
        itemValue: {
            type: String,
            default: "value"
        },
        disabled: Boolean
    },
    computed: {
        classes() {
            return { "is-disabled": this.disabled };
        },
        valueTextToShow() {
            if (!this.value) return "";
            if (this.itemText) return this.value[this.itemText];
            return this.value;
        }
    },
    methods: {
        classItem(item) {
            let isSelected = false;
            let isDisabled = false;

            if (this.value) {
                isSelected = item[this.itemValue] === this.value[this.itemValue];
            };

            if (item.disabled) isDisabled = item.disabled;

            return {
                'is-selected': isSelected,
                'is-disabled': isDisabled
            }
        },
        selectItem(item) {
            // Only $emit when it is not disabled:
            if (!item.disabled && !this.disabled) {
                this.$emit('input', item);
                this.$emit('change', item);
            }
        }
    }
};