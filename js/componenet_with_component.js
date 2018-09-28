Vue.component('task-list',{
    template : `
    <div>
        <task v-for="task in tasks">{{task.task}}</task>
        </div>
        `,


    data() {
        return {
            tasks: [
                {task: 'Go to hell' , complete: true},
                {task: 'Go to fuckin hell' , complete: false},
                {task: 'Go to shit  hell' , complete: true},
                {task: 'Go to  bitch hell' , complete: false},
                {task: 'Go to  mother fucker hell' , complete: true},
            ]
        }
    }
});

Vue.component('task',{
    template : `
        <li>
            <slot> </slot>
        </li>
    `
});


new Vue({
    el: '#app'
});