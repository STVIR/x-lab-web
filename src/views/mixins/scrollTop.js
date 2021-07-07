export default {
    mounted() {

        window.addEventListener("scroll", this.handleScroll);
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop > 300) {
                this.add();
            } else {
                this.remove();
            }
        },

        add() {
            this.$refs.header && (this.$refs.header.className = "HeaderMenu-wraper scrolled");
        },

        remove() {
            this.$refs.header && (this.$refs.header.className = "HeaderMenu-wraper ");
        }
    }
}
