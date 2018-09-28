Vue.component('modal',{
    template : `
    <div class="modal is-active">
        <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus labore autem blanditiis! Veniam facere, voluptates
                        placeat est optio, ipsum adipisci voluptas, illo ullam quibusdam dolores blanditiis.
                        Eum officia dicta unde.
                    </p>
                </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('eslam')"></button>
    </div>
    
    `,
}); 



new Vue({
    el : '#app',
    data: {
        showModal: false
    }
});