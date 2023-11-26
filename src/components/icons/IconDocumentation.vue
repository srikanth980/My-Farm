<template>
    <!-- 
      // prevent- (prevent is modifier) which is used to page dosnt refresh when submit creaepost button -->
    <form @submit.prevent="createPost()">
      <div>
        <label for="user-id">user-id</label>
        <input type="text" id="user-id" v-model="formData.userId"/>
      </div>
      <div>
        <label for="title">title</label>
        <input type="text" id="title" v-model="formData.title"/>
      </div>
      <div>
        <label for="body">body</label>
        <input type="text" id="body" v-model="formData.body"/>
      </div>
      <button> create post</button>
    </form>
    <!-- get api -->
    <div v-for="userDetail in userDetails" :key="userDetail.id">
      <h3>{{ userDetail.id }}.{{ userDetail.title }}</h3>
     <p>{{  userDetail.body }}</p>
    
    </div>
    <button @click="getUser()">get data</button>
    </template>
    <script>
    import axios from "axios"
    export default{
      name : 'App',
      data(){
        return{
          formData:{
            userId:'',
            title:'',
            body:""
          },
          userDetails:[]
        }
      },
      methods:{
    // post (create) opration
    createPost(){
    axios.post("https://jsonplaceholder.typicode.com/posts",this.formData).then((response)=>{
      console.log(response)
    })
    },
    // get calling
        getUser(){
     axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      console.log(response.data);
      this.userDetails=response.data
     })
        }
      }
    }
    </script>