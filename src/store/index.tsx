import { create } from "zustand";
import {
  API_AddContact,
  API_DeleteContact,
  API_EditContact,
  API_GetContact,
  API_GetContactByID,
} from "../api/contact";
import { API_GetProduct } from "../api/product";

const useStore = create((set: any) => ({
  contact: [],
  contactId: {},
  getDataContact: async () => {
    const contact = await API_GetContact();
    set({ contact });
  },
  getDataContactByID: async (id: any) => {
    const contactId = await API_GetContactByID(id);
    set({ contactId });
  },
  deleteDataContact: async (id: any) => {
    await API_DeleteContact(id);
  },
  editDataContact: async (id: any, body: any) => {
    await API_EditContact(id, body);
  },
  addDataContact: async (body: any) => {
    await API_AddContact(body);
  },
  product: [],
  getDataProduct: async () => {
    const product = await API_GetProduct();
    set({ product });
  },
}));

export default useStore;
