// on prépare l'état initial
const initialState = {
    counter: 11,
      };
  

  // on prépare une fonction qui retourne un nouveau state en fonction du state actuel et de l'action émise
  // grâce aux paramètres par défaut, notre reducer pourra être utilisé par le store pour initialiser le state
  const reducer = (state = initialState, action = {}) => {
    // on réagit au cas par cas en fonction du type d'action
    switch (action.type) {
      case '':
        // on retourne un nouveau state 
        // on ne le modifie pas directement, on reste dans une fonction pure
        // le spread operator est un allié fiable pour déverser le contenu actuel dans notre nouveau state
        // tout en spécifiant des nouveautés
        return {
          
            
        };
     

      default:
        return state;
    }
  };
  
  // on l'exporte pour s'en servir ailleurs
  export default reducer;