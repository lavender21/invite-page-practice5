Vue.component('contact-list', {
    template: `
        <div @click="$emit('check')"><slot></slot></div>
    `
});

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
                <input type="checkbox" class="checks" :id="id" v-model="isChecked"><label :for="id"></label>
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
       <input @click="$emit('submit')" type="submit" class="submit" id="submit" value="invite" :class="{disabled:isDisable}" :disabled="isDisable">
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
        count: 0
    },
    methods: {
        changeStatus() {
            this.count = this.$children[1].$children.filter(item => {
                return item.isChecked;
            }).length;
            this.count === 0?this.$children[2].isDisable = true:this.$children[2].isDisable = false;
        },
        submit() {
            alert(this.$children[1].$children.filter(item => {
                return item.isChecked;
            }).map(item => {
                return item.name;
            })+ ' has been invited');
        }
    }
});