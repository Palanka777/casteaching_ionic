<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Please login</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>

          <ion-button @click="logout">logout</ion-button>

        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>
<script>

import store from "../store";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
export default {
  name:'Logout',
  components: {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },

    methods: {
    logout(){
      console.log('logout');
      store.set('token',null)
      store.set('user',null)
      this.$router.push('/login')
    }
  }
}
</script>