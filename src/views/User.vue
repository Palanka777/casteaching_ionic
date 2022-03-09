<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
      <div class="ion-padding">
        <h1>{{ this.user && this.user.name}}</h1>
        <ion-avatar>
          <img src="https://www.gravatar.com/avatar/046889f49471fd40d105eb76b9d83bf6">
        </ion-avatar>
      </div>

    </ion-content>
  </ion-page>


</template>

<script>
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import store from "../store";

export default {
  name: "User",
  components:{
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
  },
  data(){
    return {
      user: {}
    }
  },
  async mounted(){
    console.log('mounted');
    console.log(store.get('user'));
    this.user = await store.get('user')
  }
}
</script>

<style scoped>

</style>