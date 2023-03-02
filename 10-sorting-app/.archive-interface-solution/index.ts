import { CharactersCollection } from './CharactersCollection';
import { LinkedList, LinkedListCollection } from './LinkedList';
import { Node } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection.data);

const charactersCollection = new CharactersCollection('antwUERssrrpo');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charSorter.collection.data);

const list = new LinkedList();
list.add(88);
list.add(56);
list.add(105);
list.add(8);
list.add(42);
console.log(list);
const listSorter = new Sorter(new LinkedListCollection(list));
listSorter.sort();
