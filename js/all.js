Vue.config.devtools = true;
new Vue({
    el: '#app',
    data: {
        products: [{
                id: 1586934917210,
                unit: '盤',
                category: '鬆餅',
                title: '藍莓鬆餅',
                origin_price: 300,
                price: 250,
                description: '自製的比利時藍莓鬆餅❤',
                content: '店內招牌厚鬆餅使用日式麵粉、小農鮮奶、以及農場直送鮮雞蛋，充滿蛋香接近入口即化的厚鬆餅無敵好吃',
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1552690731-757c35f67a6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                calories: 227.1,
            },
            {
                id: 1196934917910,
                unit: '盤',
                category: '蛋糕',
                title: '草莓煉乳蛋糕',
                origin_price: 799,
                price: 200,
                description: '可愛又美味不加任何色素與香味添加的草莓煉乳蛋糕出爐囉',
                content: '甜而不膩的口感，適合搭配飲品一同品嚐，是親密好友聚會剛好的份量',
                is_enabled: 0,
                imageUrl: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
                calories: 300,
            }
        ],
        //暫存的資料，點擊確認後才會更新
        tempProduct: {
            imageUrl: [],
        },
    },
    methods: {
        openModal(action, product) {
            switch (action) {
                case 'new':
                    this.tempProduct = {
                        imageUrl: [],
                    };
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, product);
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    this.tempProduct = Object.assign({}, product);
                    $('#productDelete').modal('show');
                    break;
                default:
                    break;
            }
        },
        updateProduct() {
            //如果有id，將選中id符合的資料覆蓋原來的data
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((product, index) => {
                    if (product.id === id) {
                        this.products[index] = this.tempProduct;
                    }
                });
            } else {
                //如果沒有id，用時間戳記給個id值
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            //確認後恢復為空
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        delProduct() {
            if (this.tempProduct.id) {
                const id = this.tempProduct.id;
                this.products.forEach((product, index) => {
                    if (product.id === id) {
                        this.products.splice(index, 1);
                        this.tempProduct = {};
                    }
                })
            }
            $('#productDelete').modal('hide');
        }
    }
})