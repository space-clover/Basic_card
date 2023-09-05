import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';


interface CardComponentProps {
    title: string;
    imageSrc: string;
    description: string;
    redirectTo: string;
    
}

const CardComponent: React.FC<CardComponentProps> = ({ title, imageSrc, description, redirectTo }) => {
    return (
        <IonCard>
        <IonImg src={imageSrc} alt={title} />
        <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <p>{description}</p>
        </IonCardContent>
        <IonButton expand="full" routerLink={redirectTo}>
            Home
        </IonButton>
        </IonCard>
    );
};

export default CardComponent;
