export default {
    data(){
        return {
           
            count: 0
        }
    },
    template:"<h1>子组件</h1> <button @click='count++'>点我一下</button> <span>{{count}}</span>"

}
   