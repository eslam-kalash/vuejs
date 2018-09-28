Vue.component('task-list',{
    template : `
        <ul>
            <slot></slot>
        </ul>
    `
});
Vue.component('task',{
    template : `
        <li> eslam testtetette </li>
    `
});


new Vue({
    el: '#app'
});