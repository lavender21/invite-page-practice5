let app = new Vue({
    el: "#app",
    data: {
        count: 0,
        isActive: false,
        isDisable: true,
        isChecked: [false, false, false],
        name: ['Alex', 'Alina', 'Yolanda'],
        invited: []
    },
    methods: {
        changeStatus: function (event) {
            if (event) {
                if (event.target.className === 'checks') {
                    this.invited = [];
                    this.count = this.isChecked.filter((item, index) => {
                        if (item) {
                            this.invited.push(this.name[index]);
                        }
                        return item === true;
                    }).length;
                    this.count === 0 ? this.isDisable = true : this.isDisable = false;
                }
            }
        },
        alertInvite: function (event) {
            alert(this.invited + ' has been invited');
        },
        search: function (event) {
            this.isActive === true ? this.isActive = false : this.isActive = true;
        }
    }
});
