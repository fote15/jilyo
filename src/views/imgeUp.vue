<template>
    <div>
        <div class="row">
            <div v-for="(x,index) in previewImage" v-bind:key="index" class="col-lg-4 wrapper__del mb-4">
            <span class="deleter" v-on:click='deleter(index)'><Icon icon="akar-icons:trash-can" />

</span>
                <div
                    
                    class="imagePreviewWrapper"
                    :style="{ 'background-image': `url(${x})` }"
                ></div>
            </div>
            <div class="col-lg-4 ">
                <label for="upload-photo">
                    <Icon class="icony" icon="bi:plus-square" />
                    <br />Загрузить изображения
                </label>
                <input
                    @change="handleFileUpload($event)"
                    ref="fileInput"
                    type="file"
                    id="upload-photo"
                    multiple
                    accept="image/png, image/jpg"
                    @input="pickFile"
                />
            </div>
        </div>
    </div>
</template>
 
<script>

import axios from "axios";
import { Icon } from '@iconify/vue2';
export default {
    components: {
        Icon
    },
    data() {
        return {
            previewImage: [],
            file: []
        };
    },
    methods: {
        deleter(e){
                this.file.splice(e, 1);
                this.previewImage.splice(e, 1);
        },
        handleFileUpload(event) {


            for (let x = 0; x < event.target.files.length; x++) {
                
            }


             console.log(this.$refs.fileInput.files)
            let input = this.$refs.fileInput
            let file = input.files
            for (let i = 0; i < file.length; i++) {


                this.file.push(file[i]);
                console.log('this.file')
                console.log(this.file)


                if (file && file[i]) {
                    let reader = new FileReader
                    reader.onload = e => {
                        this.previewImage.push(e.target.result)
                    }
                    reader.readAsDataURL(file[i])
                    this.$emit('input', file[i])
                }
            }

            

        },
       async submitFile(id) {
           console.log(this.file)
            if (this.file.length === 0) {

                this.$store.state.allowedRegister = true;
            }
            for (let x = 0; x < this.file.length; x++) {
                let formData = new FormData();
                formData.append('file', this.file[x]);
                formData.append('id', id);


                await axios.post('https://xn--e1abgm9f.kz/api/api/upload/', formData,{ headers: { 'Authorization': `Token ${this.$store.state.token}` } }).then(response => {
                    if (x + 1 === this.file.length) {

                        this.$store.state.allowedRegister = true;
                    }
                    console.log(response)
                })
            }



        },

        selectImage() {
            this.$refs.fileInput.click()
        },
        pickFile() {
           


            //      axios.post('https://xn--e1abgm9f.kz/api/api/upload/', formData).then(response => {
            //       console.log(response)
            //    })


        }
    }
}
</script>
 
<style scoped >
.wrapper__del{
    position: relative;
}
.deleter{
    cursor: pointer;
    left: 0;
    top: -8px;
    position: absolute;
    background-color: red;
    width: 28px;
    text-align: center;
    height: 28px;
    font-size: 18px;
    color:white;
    border-radius: 100%;
}
.icony {
    font-size: 30px;
    text-align: center;
    color: #acce12;
    margin-bottom: 5px;
}
.imagePreviewWrapper {
    display: inline-block;
    background-size: cover;
    background-position: center;
    text-align: center;
    height: 130px;
    padding: 20px;
    border-radius: 5px;
    background-size: cover;
    display: block;
    border: 1px dashed #acce12;
}
label {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    height: 130px;
    padding: 20px;
    border-radius: 5px;
    border: 1px dashed #acce12;
}
#upload-photo {
    opacity: 0;
    position: absolute;
    z-index: -1;
}
</style>