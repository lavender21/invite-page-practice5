Vue.component('contact', {
    props: ['name', 'skill', 'info', 'address', 'avatar', 'id'],
    template: `
        <div class="contact-box">
            <div class="avatar"><img :src="avatar" alt=""></div>
            <div class="info">
                <div class="name">{{name}}</div>
                <div class="skill">{{skill}}</div>
                <div class="contact-box"><span>{{info}}</span>{{address}}</div>
            </div>
            <div class="check-box">
                <input type="checkbox" class="checks" :id="id" v-model="isChecked" @click="$emit('check')"><label :for="id"></label>
            </div>
        </div>
    `,
    data() {
        return {
            isChecked: false
        }
    }
});

Vue.component('search', {
    template: `
        <div class="search-box">
            <input type="text" class="search" id="search" :class="{active:isActive}" @focus="isActive = true" @blur="isActive = false">
            <i class="fa fa-search"></i>
        </div>
    `,
    data() {
        return {
            isActive: false
        }
    }
});

Vue.component('submit', {
    template: `
       <input @click="$emit('submit')" type="submit" class="submit" id="submit" value="invite" >
   `,
    data() {
        return {
            isDisable: true
        }
    }
});


let app = new Vue({
    el: '#root',
    data: {
        count: 0,
        isDisable:true,
        contacts: [
            {
                name: 'Alex',
                skill: 'photoshop,pinanacle studio',
                info: 'Belarus',
                address: 'bymart.by',
                id: 0,
                avatar: 'http://i.pravatar.cc/100?img=3'
            },
            {
                name: 'Alina',
                skill: '',
                info: 'Ukraine Kiev',
                address: 'Kuvshynonva.com',
                id: 1,
                avatar: 'http://i.pravatar.cc/100?img=4'
            },
            {
                name: 'Yolna',
                skill: 'wordpress,web design,joomla,html',
                info: 'palama de Mallorica',
                address: 'yollandagranados.com',
                id: 2,
                avatar: 'http://i.pravatar.cc/100?img=5'
            }
        ]
    },
    methods: {
        changeStatus() {
            this.count = this.$children.filter(item => {
                return item.isChecked;
            }).length;
            this.count === 0 ? this.isDisable = true : this.isDisable = false;
        },
        submit() {
            alert(this.$children.filter(item => {
                    return item.isChecked;
                }).map(item => {
                    return item.name;
                }) + ' has been invited');
        }
    }
});