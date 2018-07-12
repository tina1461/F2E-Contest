<template lang="pug">
    .page
        .page-wrapper
            .top
                .logo CCCLOTHES
                .product-category MEN’S TOPS
            .item-list
                .item(:class="'item-'+ (index+1)" :key="index" v-for="(item,index) in this.itemData")
                    .item-border
                    .item-img(:style="{'background-image':'url('+item.productData.image[0]+')'}")
                    .item-cate {{item.itemCategory}}
                    .item-name(:data-content="item.slogan") {{item.slogan}}
                    .item-num {{item.id}}
                    div(:class="item.pattern? 'item-pattern': 'item-box'")
</template>

<script>
export default {
    name: 'productGallery',
    components:{

    },
    data(){
        return{
            itemData:[
                {
                    id: '01',
                    slogan: 'LINEN BLAZER',
                    itemCategory : 'Men’s outfit',
                    pattern: true,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=9b19616e232bd3897c5033df23102c6e&auto=format&fit=crop&w=1534&q=80',
                            'https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=9b19616e232bd3897c5033df23102c6e&auto=format&fit=crop&w=1534&q=80',
                            'https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=9b19616e232bd3897c5033df23102c6e&auto=format&fit=crop&w=1534&q=80'
                        ]
                    }
                    
                },
                {
                    id: '02',
                    slogan: 'FREELIFT',
                    itemCategory : 'Men’s basics',
                    pattern: false,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=668&q=80',
                            'https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=668&q=80',
                            'https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=668&q=80'
                        ]
                    }
                },
                {
                    id: '03',
                    slogan: 'SUPER SKINNY',
                    itemCategory : 'Men’s pattern shirts',
                    pattern: false,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1650&q=80',
                            'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1650&q=80',
                            'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1650&q=80'
                        ]
                    }
                },
                {
                    id: '04',
                    slogan: 'DENIM',
                    itemCategory : 'Men’s cadual',
                    pattern: true,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1650&q=80',
                            'https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1650&q=80',
                            'https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1650&q=80'
                        ]
                    }
                },
                {
                    id: '05',
                    slogan: 'SWEATSHIRTS',
                    itemCategory : 'Men’s jacket',
                    pattern: true,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-0.3.5&s=4003105ab1d3400536b333fc1d06d6d0&auto=format&fit=crop&w=800&q=60',
                            'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-0.3.5&s=4003105ab1d3400536b333fc1d06d6d0&auto=format&fit=crop&w=800&q=60',
                            'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-0.3.5&s=4003105ab1d3400536b333fc1d06d6d0&auto=format&fit=crop&w=800&q=60'
                        ]
                    }
                },
                {
                    id: '06',
                    slogan: 'VINTAGE DENIM',
                    itemCategory : 'Men’s classic',
                    pattern: false,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=668&q=80',
                            'https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=668&q=80',
                            'https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=668&q=80'
                        ]
                    }
                },
                {
                    id: '07',
                    slogan: 'EDITION',
                    itemCategory : 'Men’s shirts',
                    pattern: false,
                    productData:{
                        name: 'VINTAGE DENIM',
                        desc: "Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache retro four loko, church-key Thundercats Portland Helvetica Cosby sweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.",
                        intro: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
                        image:[
                            'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=668&q=80',
                            'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=668&q=80',
                            'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=668&q=80'
                        ]
                    }
                }

            ]
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/pages/productGallery/productGallery.scss';
</style>


