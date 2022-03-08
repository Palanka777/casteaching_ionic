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
      <div>
        <h1>User</h1>
        name: {{ this.user && this.user.name}}
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