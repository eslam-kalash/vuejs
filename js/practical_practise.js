Vue.component('eslam-message',{
    props:['title','body'] ,
    
    data(){
        return {
            isVisible : true
        };
    },
    template: `
    
    <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" aria-label="delete" @click="isVisible = false"></button>
        </div>
        <div class="message-body">
                {{body}}. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
    </article>
    
    `,
})



new Vue({

    el: '#app'
});