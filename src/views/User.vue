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
        <ion-card>
          <ion-avatar v-if="this.user.profile_photo_path">
            <img :src="this.user && this.user.profile_photo_path">
          </ion-avatar>
          <ion-avatar v-else>
            <img src="http://via.placeholder.com/80">
          </ion-avatar>
          <ion-card-header>
            <ion-card-title>{{ this.user && this.user.name}}</ion-card-title>
            <ion-card-subtitle v-if="this.user.superadmin">{{this.admin}}</ion-card-subtitle>
            <p v-else>Usuari sense privilegis</p>
          </ion-card-header>
          <ion-card-content>
            {{ this.user && this.user.email}}
            <ion-card-subtitle></ion-card-subtitle>
          </ion-card-content>
        </ion-card>
      </div>

    </ion-content>
  </ion-page>


</template>

<script>
import {
  IonAvatar,
  IonButtons,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
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
    IonAvatar,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,

  },
  data(){
    return {
      user: {},
      }

  },
  created() {
    this.admin = "Senyor administrador"
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