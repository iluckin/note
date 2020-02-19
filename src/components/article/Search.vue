<template>
    <div class="container subscribe">
        <div class="row justify-content-center my-3">
            <div class="col-10 text-center">
                <p class="text-muted">Get an email for new posts ?</p>
            </div>
            <div class="col-10 mb-3">
                <div class="input-group">
                    <div class="input-group-prepend mr-2">
                        <select v-model="mode" class="custom-select">
                            <option value="1">Instant</option>
                            <option value="2" :selected="mode">Weekly</option>
                        </select>
                    </div>
                    <input type="email" v-model="email" class="form-control subscribe-input" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic">
                    <div class="input-group-append ml-2">
                        <span class="input-group-btn" id="basic">
                          <button class="btn btn-secondary subscribe-btn" @click="subscribe">Subscribe</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data () {
            return {
                keyword: '',
                category: 0
            }
        },
        methods: {
            subscribe () {
                if (this.email.trim() == '') {
                    this.alert = "Please input your email.";
                    return
                }

                console.info('subscribe for email : ' + this.email + ' with mode :' + this.mode)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .subscribe {
        background: #f0f6fe;
        border-radius: 3px;
        padding: 8px 15px;
    }

    .subscribe .row .custom-select {
        width: 110px !important;
        border: none;
    }

    .subscribe-btn, .subscribe-input {
        border-radius: 3px !important;
        border: none;
    }
    .subscribe-title {
        background: none;
    }
</style>