import firebaseApp from 'src/firebase';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export async function addCall(callData: Call) {
  await setDoc(doc(db, 'calls', generateRandomCharacters()), callData);
}


function generateRandomCharacters(length = 6): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomChars = '';
  for (let i = 0; i < length; i++) {
    randomChars += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomChars;
}
