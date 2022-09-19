
import { IonContent, IonIcon, IonHeader, IonItem, IonPage, IonTitle, IonList, IonInput, IonToolbar, IonButton, IonLabel } from '@ionic/react';
import { useEffect, useState, useContext } from 'react';
import './Tab1.css';

import {trashOutline} from "ionicons/icons"; 
import{currentUserContext}from '../App';


const Tab1: React.FC = () => {

  const user=useContext(currentUserContext)

  const[todos, setTodos]= useState(['Makan','Minum','Jajan']);
const[inputText,setInputText]=useState<string>('');


const removeTodo=(i:number)=>{
  const newTodos=todos.filter((value, index)=> {
    return index !==i;
  });
  setTodos(newTodos);
};

const removeTodos=() => {
  setTodos([]);
};

  const submitTodo = () => {
    setTodos([inputText, ...todos]);
  setInputText("");
};

/*useEffect(() => {
 fetch('http://localhost:3000/todos')
  .then((response) => response.json())
  .then(data)
  const newTodos = data.map((item,i)=>{
    return item.todo;
  });
  return newTodos;
  })

}
*/


interface IListItemProps {
  text:string;
  onClick : () => void;

};


const ListItem: React.FC<IListItemProps> = ({ text, onClick }) => (
	<IonItem>
		<IonLabel>{text}</IonLabel>
		<IonButton fill="clear" color="danger" onClick={onClick}>
			<IonIcon icon={trashOutline} />
		</IonButton>
	</IonItem>
);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kegiatanku.. {user}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Todos</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonList>
        <IonItem>
          <IonInput
            value={inputText}
            placeholder= "Kegiatanku adalah ..."
            clearInput={true}
            autofocus={true}
            onIonChange={(e) => {
              setInputText(e.detail.value!);
              }}
              onKeyPress={(e)=> {
                if (e.key==="Enter"){
                  submitTodo();
                }
              }}
          />

</IonItem>
</IonList>



{todos.map((item, i) => (
  <ListItem 
  text={item} 
  onClick={() => {
    removeTodo(i);
   
  }}
  
  
  />
))}
  
  {todos.length?(
    <IonButton
						onClick={removeTodos}
						expand="full"
						fill="clear"
						size="small"
						color="danger"
					>
						Hapus semua kegiatan
					</IonButton>
				) : null}
			</IonContent>
		</IonPage>
  );
  };


export default Tab1;
