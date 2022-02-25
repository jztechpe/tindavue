export default {
    name: "JzSelectFirstImage",
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
        firstImageByDefault: Boolean,
        disabled: Boolean
    },
    data() {
        return {
            selected: {
                item: null,
                index: -1
            }
        }
    },
    computed: {
        classes() {
            return { "is-disabled": this.disabled };
        },
        titleToShow() {
            if (this.title) return `${this.title}:`;
            return "";
        },
        valueTextToShow() {
            if (!this.value) return "";
            if (this.itemText) return this.value[this.itemText];
            return this.value;
        }
    },
    methods: {
        classItem(item, index) {
            let isSelected = false;
            let isDisabled = false;

            // Select item if has the same index that selected one.
            if (this.value) {
                isSelected = index === this.selected.index;
            };

            //only select by default the first image if this prop is true
            if (!this.value && this.firstImageByDefault) {
                isSelected = index === 0;
                if (isSelected) {
                    this.selectItem(item, index);
                }
            };

            // Get disabled from item prop 
            if (item.disabled) isDisabled = item.disabled;

            return {
                'is-selected': isSelected,
                'is-disabled': isDisabled
            }
        },
        selectItem(item, index) {
            // Save current selected item data:
            this.selected.item = item;
            this.selected.index = index;

            // Emit selected events, only  when it is not disabled:
            if (!item.disabled && !this.disabled) {
                this.$emit('input', item);
                this.$emit('change', item);
            }
        }
    }
};