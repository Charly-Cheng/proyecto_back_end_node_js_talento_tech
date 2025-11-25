import { db } from "../config/firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

const COLLECTION = "products";

export const getAll = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  return querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getById = async (id) => {
  const ref = doc(db, COLLECTION, id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

export const create = async (data) => {
  const ref = await addDoc(collection(db, COLLECTION), data);
  return ref.id;
};

export const update = async (id, data) => {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, data);
};

export const remove = async (id) => {
  const ref = doc(db, COLLECTION, id);
  await deleteDoc(ref);
};

