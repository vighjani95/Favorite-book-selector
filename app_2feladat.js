const app = Vue.createApp({
    data () {
        return {
            showBooks: true,
            books: [
                { title: 'H.P és a bölcsek köve', author: 'J.K Rowling', img: 'assets/1.jpg', isFav: true},
                { title: 'H.P és a titkok kamrája', author: 'J.K Rowling', img: 'assets/2.jpg', isFav: false},
                { title: 'H.P és az azkabani fogoly', author: 'J.K Rowling', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav (book){
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')