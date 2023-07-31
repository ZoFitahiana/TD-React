Voici une explication de chaque hook et quand les utiliser :

# 1. **useState** :
   - Description : Le hook `useState` permet de gérer l'état local d'un composant dans React. Il permet de créer une variable d'état et une fonction pour la mettre à jour, provoquant un ré-rendering du composant lorsque l'état change.
   - Quand utiliser : Utilisez `useState` lorsque vous avez besoin de stocker et de modifier des variables d'état locales à un composant.

# 2. **useEffect** :
   - Description : Le hook `useEffect` permet d'effectuer des actions (comme des requêtes HTTP, des abonnements, ou des modifications du DOM) après que le rendu du composant a eu lieu.
   - Quand utiliser : Utilisez `useEffect` lorsque vous avez besoin d'effectuer des opérations secondaires après le rendu du composant, par exemple, pour charger des données depuis un serveur, effectuer des abonnements, ou effectuer des manipulations du DOM.

 # 3. **useContext** :
   - Description : Le hook `useContext` permet d'accéder à un contexte spécifié pour partager des données entre des composants sans avoir besoin de passer les props de manière explicite.
   - Quand utiliser : Utilisez `useContext` lorsque vous avez besoin de partager des données entre des composants qui sont profondément imbriqués dans la hiérarchie des composants, évitant ainsi le passage explicite de props.

 # 4. **useCallback** :
   - Description : Le hook `useCallback` permet de mémoriser une fonction et de la rendre stable entre les rendus, utile pour éviter les ré-renderings inutiles des composants enfants qui utilisent cette fonction comme prop.
   - Quand utiliser : Utilisez `useCallback` lorsque vous avez besoin de passer des fonctions en tant que props à des composants enfants, mais que ces fonctions dépendent d'autres variables et que vous ne voulez pas que les composants enfants se ré-renderent chaque fois que ces fonctions changent.

 # 5. **useMemo** :
   - Description : Le hook `useMemo` permet de mémoriser un calcul ou une valeur dérivée à partir des dépendances spécifiées, afin d'éviter les recalculs excessifs.
   - Quand utiliser : Utilisez `useMemo` lorsque vous avez des calculs coûteux en ressources à effectuer à chaque rendu du composant et que ces calculs ne doivent être effectués que lorsque certaines dépendances changent.

 # 6. **useRef** :
   - Description : Le hook `useRef` permet de créer une référence mutable qui persiste entre les rendus d'un composant, utile pour accéder à des éléments du DOM ou stocker des valeurs qui ne provoquent pas de ré-rendering.
   - Quand utiliser : Utilisez `useRef` lorsque vous avez besoin d'accéder à des éléments du DOM, de stocker des valeurs persistantes entre les rendus sans provoquer de ré-rendering, ou lorsque vous avez besoin d'obtenir la dernière valeur d'une variable dans des callbacks ou des effets.

 # 7. **useReducer** :
   - Description : Le hook `useReducer` permet d'utiliser le pattern du "reducer" pour gérer un état complexe et des actions, similaire à Redux, mais pour des états locaux à un composant.
   - Quand utiliser : Utilisez `useReducer` lorsque vous avez un état complexe qui nécessite plusieurs actions pour le mettre à jour, ou lorsque vous souhaitez gérer l'état de votre composant de manière plus structurée en utilisant des actions définies.

