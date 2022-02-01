import { plantList } from '../datas/plantList' // import de la liste de plante

function ShoppingList(){
    const categories = plantList.reduce((acc, num) =>
        acc.includes(num.category) ? acc : acc.concat(num.category), // opérateur ternaire
        [] 

        // l'accumulateur contient la catégorie ? 
        // si oui l'accumulateur reste le même :
        // sinon, l'accumulateur est fusionnée avec la catégorie
        //  line 6 : un tableau vide pour ne pas créer d'erreur s'il n'y a rien dans plantList
    )

    return <div>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                
                </ul>

                <ul>
                    {plantList.map((plant) => (
                        <li key={plant.id}>{plant.name}</li>
                    ))}
                
                </ul>
            </div>

};

export default ShoppingList