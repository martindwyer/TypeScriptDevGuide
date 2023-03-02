import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('antwUERssrrpo');

charactersCollection.sort();
console.log(charactersCollection.data);

const list = new LinkedList();
list.add(88);
list.add(56);
list.add(105);
list.add(8);
list.add(42);

list.sort();
console.log(list);
