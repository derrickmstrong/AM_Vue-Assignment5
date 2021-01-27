const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            tasks: [],
            isTaskListVisible: true,
            showButton: 'Show Task'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputTask);
            this.inputTask = ''
        },
        toggleTasks() {
            this.isTaskListVisible = !this.isTaskListVisible;
        }
    },
    // We use a computed property here because we only want this to run when isTaskListVisible value changes.
    computed: {
        buttonCaption() {
            return this.isTaskListVisible ? 'Hide' : 'Show';
        }
    }
}).mount('#assignment');