import { useState } from 'react';
// El Estado siempre esta asociado a un componente, 
// Cuando utilizamos un useState provocaremos un nuevo renderizado con el setState,
// pero no de toda la aplicacion, sino sólo de la función que lo utiliza.
// Por eso los hooks siempre se llaman dentro de un componente funcional
// Para que se produzca un nuevo renderizado el valor del estado tiene que cambiar
// React hace un renderizado de comprobacion, y sino cambia el estado , no lo vuelve a renderizar.

const Likes = () => {
    console.log('render likes');

    const [likes, setlikes] = useState({ val: 0 });

    return (
        <Button
            onClick={() => {
                const newLikes = { ...likes };
                newLikes.val++;
                setlikes(newLikes)
            }}
            > {likes.val} likes </Button>
    );
}

const Button = ({ onClick, children }) => {
    console.log('render button');
    return <button onClick={onClick}> {children}</button>
}

function App() {
    console.log('render app')
    return (
        <div >
            <Likes />
        </div>
    )
}

export default App
