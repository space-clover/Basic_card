// Home.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Basic_card from "../components/Basic_card" // Importa el nuevo componente



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ejercicios ionic 3 </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <Basic_card
          title="La Mona Lisa"
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/245px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg" // Reemplaza con la ruta de tu imagen
          description="La Mona Lisa, también conocida como La Gioconda, es una famosa pintura renacentista creada por
            Leonardo da Vinci en el siglo XVI. Es conocida por su enigmática sonrisa y su mirada enigmática."
          redirectTo="/pagina-de-destino"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;